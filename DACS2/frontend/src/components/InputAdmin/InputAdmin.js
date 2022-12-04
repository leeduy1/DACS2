import React from 'react'
import classNames from 'classnames/bind'
import styles from './InputAdmin.module.scss'

const cx = classNames.bind(styles)

function InputAdmin({title, option, onChange, value}) {
  return (
    <div className={cx("form-group")}>
        <label className={cx("control-label")}>{title}</label>
        {option ? (
            <select className={cx("form-control")} id="exampleSelect1" value={value}  onChange={onChange}>
                <option disabled selected>-- Chọn danh mục --</option>
                <option value="Rau củ">Rau củ</option>
                <option value="Thực phẩm">Thực phẩm</option>
                <option value="Trái cây">Trái cây</option>
            </select>
        ) : (
            <input className={cx("form-control")} type="text" placeholder="" value={value} onChange={onChange}/>
        )}
        
    </div>
  )
}

export default InputAdmin