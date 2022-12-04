import { useSelector } from "react-redux";
import styles from "./ClientAdmin.module.scss";
import classNames from "classnames/bind";
import TitleAdmin from "../../../components/TitleAdmin/TitleAdmin";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ElementButtonBtn from "../../../components/ElementButtonBtn/ElementButtonBtn";
import HeaderContentAdmin from "../../../components/HeaderContentAdmin/HeaderContentAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ClientAdmin() {
  const user = useSelector((state) => state.user);

  return (
    <AdminDashboard>
      <div className={cx("wrapper")}>
        <TitleAdmin />
        <div className={cx("body")}>
          <ElementButtonBtn />
          <HeaderContentAdmin />
          <table className={cx("table")}>
            <thead>
              <tr>
                <th style={{ width: "13px" }}>
                  <input type="checkbox" />
                </th>
                <th>ID người dùng</th>
                <th>Họ và tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                {/* <th>Mật khẩu</th> */}
              </tr>
            </thead>
            <tbody>
              {/* {users.map((user => ( */}
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                {/* <td>{user.password}</td> */}
                {/* <td>
                <button className={cx('btn-Trash')}>
                  <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
                <button className={cx('btn-Edit')}>
                  <FontAwesomeIcon icon={faEdit}/>
                </button>
              </td> */}
              </tr>
              {/* )))} */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminDashboard>
  );
}

export default ClientAdmin;
