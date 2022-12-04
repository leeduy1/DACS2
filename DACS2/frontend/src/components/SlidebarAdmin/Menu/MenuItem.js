import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from '../SlidebarAdmin.module.scss'

const cx = classNames.bind(styles)

function MenuItem({className, to, icon, title}) {
  return (
    <NavLink className={(nav) => cx('menu-item', {className}, { active: nav.isActive })} to={to}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={icon} />
            <span>{title}</span>
    </NavLink>
  )
}

export default MenuItem