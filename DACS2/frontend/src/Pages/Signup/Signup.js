import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import { useSignupMutation } from "../../services/appApi";
const cx = className.bind(styles);

function Signup() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, { error, isLoading, isError }] = useSignupMutation();

  function handleRegister(e) {
    e.preventDefault();
    signup({ name, phoneNumber, email, password });
  }

  return (
    <div className={cx("wrapper")}>
      <form className={cx("form-login")} onSubmit={handleRegister}>
        <h1 className={cx("title_heads")}>Đăng ký</h1>
        <div className={cx("subtitle")}>
          Đã có tài khoản, đăng nhập
          <Link className={cx("subtitle-link")} to="/login">
            {" "}
            tại đây
          </Link>
        </div>
        {isError && <div>{error.data}</div>}
        <div className={cx("from-group")}>
          <input
            type="text"
            placeholder="Tên"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={cx("from-group")}>
          <input
            type="text"
            placeholder="Số điện thoại"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={cx("from-group")}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={cx("from-group")}>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={cx("from-group")}>
          <button type="submit" disabled={isLoading}>
            Đăng ký
          </button>
        </div>
        <div
          className={cx("social-login-title", "social-login-title-register")}
        >
          Hoặc đăng nhập bằng
        </div>
        <div className={cx("social-login")}>
          <div className={cx("social-login-facebook")}>
            <a href="">
              <img
                src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                alt=""
              ></img>
            </a>
          </div>
          <div className={cx("social-login-facebook")}>
            <a href="">
              <img
                src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
