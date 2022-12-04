import React from 'react'
import classNames from 'classnames/bind'
import styles from './CategoryProducts.module.scss'

const cx = classNames.bind(styles)

function CategoryProducts() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('title')}>
            Tất cả sản phẩm
        </div>
        <div className={cx('sort')}>
            <ul className={cx('ul-col')}>
                <li className={cx('sort-main')}>
                    <span>Sắp xếp theo:</span>
                </li>
                <ul className={cx('content-ul')}>
                    <li>
                        <a>Mặc định</a>
                    </li>
                    <li>
                        <a>A -{'>'} Z</a>
                    </li>
                    <li>
                        <a>Z -{'>'} A</a>
                    </li>
                    <li>
                        <a>Giá tăng dần</a>
                    </li>
                    <li>
                        <a>Giá giảm dần</a>
                    </li>
                    <li>
                        <a>Hàng mới nhất</a>
                    </li>
                    <li>
                        <a>Hàng cũ nhất</a>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
  )
}

export default CategoryProducts