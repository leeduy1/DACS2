import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../services/appApi";
import { useNavigate } from "react-router-dom";

const cx = className.bind(styles);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError, isLoading, error }] = useLoginMutation();
  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }
  
  return (
    <div className={cx("wrapper")}>
      <form className={cx("form-login")} onSubmit={handleLogin}>
        <h1 className={cx("title_heads")}>Đăng Nhập</h1>
        <div className={cx("subtitle")}>
          Nếu bạn chưa có tài khoản,
          <Link className={cx("subtitle-link")} to="/register">
            {" "}
            đăng ký tại đây
          </Link>
        </div>
        {isError && <div>{error.data}</div>}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={cx("from-group")}>
          <button type="submit" disabled={isLoading}>
            Đăng nhập
          </button>
        </div>
        <div className={cx("forgot-password")}>Quên mật khẩu</div>
        <div className={cx("social-login-title")}>Hoặc đăng nhập bằng</div>
        <div className={cx("social-login")}>
          <div className={cx("social-login-facebook")}>
            <a href="">
              <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"></img>
            </a>
          </div>
          <div className={cx("social-login-facebook")}>
            <a href="">
              <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"></img>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
