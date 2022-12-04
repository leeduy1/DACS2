import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeaderContentAdmin.module.scss'

const cx = classNames.bind(styles)

function HeaderContentAdmin() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('dataTables_length')}>
            <label>
                Hiện
                <select>
                    <option value="10">10</option>
                    <option value="10">25</option>
                    <option value="10">50</option>
                    <option value="10">100</option>
                </select>
                danh mục
            </label>
        </div>
        <div className={cx('dataTables_filter')}>
            <label>
                Tìm kiếm:
                <input type="search"/>
            </label>
        </div>
    </div>
  )
}

export default HeaderContentAdmin