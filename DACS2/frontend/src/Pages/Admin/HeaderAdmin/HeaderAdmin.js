import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeaderAdmin.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function HeaderAdmin() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('log-out')}>
            <FontAwesomeIcon className={cx('log-out__icon')} icon={faRightFromBracket}/>
        </div>
    </div>
  )
}

export default HeaderAdmin