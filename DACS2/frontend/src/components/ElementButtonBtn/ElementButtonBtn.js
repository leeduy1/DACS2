import React from 'react'
import classNames from 'classnames/bind'
import styles from './ElementButtonBtn.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faFileArrowUp, faFileExcel, faFilePdf, faPlus, faPrint, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function ElementButtonBtn() {
  return (
        <div className={cx('wrapper')}>
            <div >
                <Link className={cx('btn','btn-add')} to='/new-product'>
                    <FontAwesomeIcon className={cx('icon')} icon={faPlus}/>
                    Tạo mới sản phẩm
                </Link>
            </div>
            <div >
                <Link className={cx('btn','btn-loadFile')} to=''>
                    <FontAwesomeIcon className={cx('icon')} icon={faFileArrowUp}/>
                    Tải từ file
                </Link>
            </div>
            <div >
                <Link className={cx('btn','btn-printData')} to=''>
                    <FontAwesomeIcon className={cx('icon')} icon={faPrint}/>
                    In dữ liệu
                </Link>
            </div>
            <div >
                <Link className={cx('btn','btn-copy')} to=''>
                    <FontAwesomeIcon className={cx('icon')} icon={faCopy}/>
                    Sao chép
                </Link>
            </div>
            <div >
                <Link className={cx('btn','btn-exportExcel')} to=''>
                    <FontAwesomeIcon className={cx('icon')} icon={faFileExcel}/>
                    Xuất Excel
                </Link>
            </div>
            <div >
                <Link className={cx('btn','btn-exportPDF')} to=''>
                    <FontAwesomeIcon className={cx('icon')} icon={faFilePdf}/>
                    Xuất PDF
                </Link>
            </div>
            <div >
                <Link className={cx('btn','btn-deleteAll')} to=''>
                    <FontAwesomeIcon className={cx('icon')} icon={faTrashAlt}/>
                    Xóa tất cả
                </Link>
            </div>
        </div>
  )
}

export default ElementButtonBtn