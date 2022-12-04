import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductPortfolio.module.scss";
import { Link, NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function ProductPortfolio() {
  const [productActive, setProductActive] = useState(false)
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Danh mục sản phẩm</div>
      <ul className={cx("nav-category")}>
        <li className={cx("nav-item")}>
          <NavLink to="/">Trang chủ</NavLink>
        </li>
        <li className={cx("nav-item")}>
          <NavLink to="/">Giới thiệu</NavLink>
        </li>
        <li className={cx("nav-item", "nav-product", productActive && "active")}>
          <NavLink to="/">Sản phẩm</NavLink>
          <i className={cx("down_icon", productActive && "active")} onClick={() => setProductActive(!productActive)}>
            <svg
              className={cx('down_icon--svg')}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              // class="svg-inline--fa fa-chevron-right fa-w-10"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                class=""
              ></path>
            </svg>
          </i>
          <ul className={cx("menu_down")} >
            <li>
              <Link to="/">Rau củ</Link>
            </li>
            <li>
              <Link to="/">Thực phẩm</Link>
            </li>
            <li>
              <Link to="/">Trái cây</Link>
            </li>
          </ul>
        </li>
        <li className={cx("nav-item")}>
          <NavLink to="/">Tin tức</NavLink>
        </li>
        <li className={cx("nav-item")}>
          <NavLink to="/">Liên hệ</NavLink>
        </li>
      </ul>
      <div className={cx("filter-content")}></div>
    </div>
  );
}

export default ProductPortfolio;
