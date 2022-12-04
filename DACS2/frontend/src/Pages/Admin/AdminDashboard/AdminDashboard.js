import React from "react";
import styles from "./AdminDashboard.module.scss"
import classNames from "classnames/bind";
import SlidebarAdmin from "../../../components/SlidebarAdmin/SlidebarAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
const cx = classNames.bind(styles)



function AdminDashboard({children}) {
    return (
        <div className={cx('wrapper')}>
            <HeaderAdmin/>
            <SlidebarAdmin/>
            <div className={cx('main')}>
                {children}
            </div>
        </div>
    );
}

export default AdminDashboard;