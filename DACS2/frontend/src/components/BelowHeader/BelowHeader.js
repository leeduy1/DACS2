import React from "react";
import className from "classnames/bind";
import styles from "./BelowHeader.module.scss";
const cx = className.bind(styles);

function BelowHeader({ title, subTitle }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-page")}>
        <a href="#"> Trang chủ</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
        </svg>
        <span>{title}</span>
      </div>
      <div className={cx("subtitle")}>{subTitle}</div>
    </div>
  );
}

export default BelowHeader;
