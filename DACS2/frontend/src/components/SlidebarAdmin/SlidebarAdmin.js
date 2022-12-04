import React from 'react'
import classNames from 'classnames/bind'
import styles from './SlidebarAdmin.module.scss'
import {faCartShopping, faTag, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import MenuItem from './Menu/MenuItem';
import Menu from './Menu/Menu';

const cx = classNames.bind(styles)

function SlidebarAdmin() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('user')}>
            <p className={cx('user-name')}>
                <b>Võ trường</b>
            </p>
            <p className={cx('user-des')}>
                Chào mừng bạn quay trở lại
            </p>
        </div>
        <hr/>
        <Menu>
            <Link className={cx('menu-item', 'item-cart')} to=''>
                <FontAwesomeIcon className={cx('menu-icon')} icon={faCartShopping} />
                <span>POS Bán Hàng</span>
            </Link>
            <MenuItem
                className="item-purchase"
                to="/admin/products"
                icon={faTag}
                title="Quản lý sản phẩm"
            />
            <MenuItem
                className="item-user"
                to="/admin/users"
                icon={faUser}
                title="Quản lý khách hàng"
            />
        </Menu>
    </div>  
  )
}

export default SlidebarAdmin