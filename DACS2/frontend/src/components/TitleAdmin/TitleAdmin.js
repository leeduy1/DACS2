import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './TitleAdmin.module.scss'

const cx = classNames.bind(styles)

function TitleAdmin() {
    const [dateState, setDateState] = useState(new Date());
    const [date, setDate] = useState("Thứ Hai")    

    useEffect(() => {
        setInterval(() => (setDateState(new Date()), 30000)) 
    },[])
    
    const setThu = (current_day) => {
        let day;
        switch (current_day) {
            case 0:
                day = "Chủ Nhật";
                setDate(day);
                break;
            case 1:
                day = "Thứ Hai";
                setDate(day);
                break;
            case 2:
                day = "Thứ Ba";
                setDate(day);
                break;
            case 3:
                day = "Thứ Tư";
                setDate(day);
                break;
            case 4:
                day = "Thứ Năm";
                setDate(day);
                break;
            case 5:
                day = "Thứ Sáu";
                setDate(day);
                break;
            case 6:
                day = "Thứ Bảy";
                setDate(day);
                break;
            default:
                day = "Failure";
                setDate(day);
                break;
        }
    }
    useEffect(() => {
        setThu(dateState.getDay());
    }, [date]);
    
  return (
    <div className={cx('wrapper')}>
        <ul className={cx('content')}>
            <li>
                <b>Danh sách sản phẩm</b>
            </li>
            <li>
                {date + ", " + dateState.getDate() +"/" + Number(dateState.getUTCMonth()+1) + "/" + dateState.getFullYear() + " - " + dateState.getHours() + ' giờ ' + dateState.getMinutes() + ' phút ' + dateState.getSeconds() + " giây"}
            </li>
        </ul>
    </div>
  )
}

export default TitleAdmin