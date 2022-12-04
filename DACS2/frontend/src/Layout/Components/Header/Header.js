import React from "react";
import className from "classnames/bind";
import styles from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/userSlice";
import { Link } from "react-router-dom";
import { cartToggle } from "../../../features/cartToggleSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = className.bind(styles);

function Header() {
  const user = useSelector(state => state.user)
  // const crtToggle = useSelector(state => state.cartToggle)
  const disPatch = useDispatch()

  function handleLogout() {
    disPatch(logout())
  }

  function handleOpenCart(){
    disPatch(cartToggle())
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top_header")}>
        <img src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/banner_header_top.jpg?1658678736715" alt=""/>
      </div>
      <div className={cx("middle_header")}>
        <div className={cx("middle_header-wrap")}>
          <div className={cx("middle_header-item")}>
            <form>
              <input
                placeholder="Tìm sản phẩm"
                className={cx("search-auto")}
              ></input>
              <button className={cx("btn-search")}>
                <svg className={cx("btn-search__icon")} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.7608 19.6062L15.6358 14.4813C16.9097 12.9494 17.6772 10.9823 17.6772 8.83887C17.6772 3.9651 13.7122 0 8.83865 0C3.96499 0 0 3.9651 0 8.83887C0 13.7123 3.96499 17.6771 8.83865 17.6771C10.9819 17.6771 12.9492 16.9097 14.4811 15.6358L19.6062 20.7608C19.7656 20.9203 19.9746 21 20.1835 21C20.3924 21 20.6014 20.9203 20.7609 20.7608C21.0798 20.442 21.0798 19.9251 20.7608 19.6062ZM1.63294 8.83887C1.63294 4.8655 4.86539 1.63294 8.83865 1.63294C12.8118 1.63294 16.0441 4.8655 16.0441 8.83887C16.0441 12.8119 12.8118 16.0441 8.83865 16.0441C4.86539 16.0441 1.63294 12.8119 1.63294 8.83887Z" fill="white"></path>
								</svg>
              </button>
            </form>
          </div>

          <div className={cx("middle_header-item")}>
            <div className={cx("middle_header--img")}>
              <img
                className="item-logo"
                src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/logo.png?1658678736715"
                alt=""
              ></img>
            </div>
          </div>

          <div className={cx("middle_header-item")}>
            <div className={cx("header-page-link")}>
              <div
                classname={cx("contact__header")}
                style={{
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid #c4c4c4",
                  borderRadius: "30px",
                  padding: " 5px 20px 5px 20px",
                  marginLeft: "15px"
                }}
              >
                <div className={cx("contact__header-icon")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="43"
                    viewBox="0 0 39 43"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.4756 3.2558C33.2543 1.15588 30.3131 0 27.1919 0C24.0708 0 21.1273 1.15588 18.906 3.2558C16.6346 5.40177 15.3839 8.27304 15.3839 11.34C15.3839 14.407 16.6346 17.276 18.906 19.4243C19.3138 19.8088 19.7444 20.1611 20.1978 20.4811C19.364 21.8673 18.3866 23.1429 17.2885 24.278C19.6829 24.0593 21.9543 23.3593 24.0229 22.2679C25.0436 22.5396 26.1075 22.6801 27.1919 22.6801C30.3131 22.6801 33.2566 21.5242 35.4779 19.4243C37.7493 17.2783 39 14.407 39 11.34C39 8.27304 37.747 5.40177 35.4756 3.2558ZM27.1919 20.1588C21.9406 20.1588 17.669 16.203 17.669 11.34C17.669 6.47705 21.9406 2.52129 27.1919 2.52129C32.4433 2.52129 36.7149 6.47705 36.7149 11.34C36.7127 16.203 32.441 20.1588 27.1919 20.1588ZM27.397 34.3424L23.7769 30.3521C22.7335 29.2009 21.0339 29.2009 19.9882 30.3521L18.398 32.1044C14.7665 30.0067 11.782 26.7164 9.87971 22.7123L11.4699 20.9601C12.5133 19.8088 12.5133 17.9345 11.4699 16.7832L7.85209 12.7929C6.80866 11.6417 5.1091 11.6417 4.0634 12.7929L1.17005 15.9843C-0.342695 17.6513 -0.390538 20.5916 1.03791 24.2642C2.32511 27.573 4.68535 31.2179 7.68578 34.5266C10.6862 37.8354 13.9919 40.4373 16.9946 41.8556C18.6076 42.6178 20.0657 43 21.3141 43C22.6401 43 23.7268 42.5694 24.5059 41.7106L27.4015 38.5169C27.9073 37.9597 28.1853 37.2183 28.1853 36.4285C28.1807 35.6411 27.9028 34.8997 27.397 34.3424ZM25.7817 36.7348L22.8861 39.9284C22.1024 40.7919 20.2365 40.6491 17.8922 39.5416C15.1515 38.2476 12.101 35.8322 9.30104 32.7468C6.5011 29.6591 4.31172 26.295 3.13844 23.2741C2.13374 20.6907 2.00388 18.6322 2.78759 17.7687L5.68321 14.5751C5.83586 14.407 6.08646 14.407 6.2391 14.5751L9.8592 18.5654C10.0118 18.7335 10.0118 19.0098 9.8592 19.1779L7.11394 22.1988L7.45795 23.0001C9.67011 28.1509 13.4634 32.3323 18.136 34.773L18.8628 35.1529L21.6035 32.1297C21.7037 32.0192 21.8199 32.0031 21.8814 32.0031C21.9429 32.0031 22.0591 32.0192 22.1593 32.1297L25.7794 36.12C25.8797 36.2305 25.8934 36.3595 25.8934 36.4262C25.8956 36.4953 25.882 36.6243 25.7817 36.7348ZM23.3828 11.34C23.3828 12.268 22.7016 13.0209 21.8586 13.0209C21.018 13.0209 20.3345 12.268 20.3345 11.34C20.3345 10.4121 21.0157 9.65917 21.8586 9.65917C22.7016 9.65917 23.3828 10.4121 23.3828 11.34ZM32.523 13.0186C33.3637 13.0186 34.0471 12.2656 34.0471 11.3377C34.0471 10.4098 33.3659 9.65687 32.523 9.65687C31.6823 9.65687 30.9989 10.4098 30.9989 11.3377C31.0011 12.268 31.6823 13.0186 32.523 13.0186ZM28.7161 11.34C28.7161 12.268 28.0349 13.0209 27.1919 13.0209C26.349 13.0209 25.6678 12.268 25.6678 11.34C25.6678 10.4121 26.349 9.65917 27.1919 9.65917C28.0349 9.65917 28.7161 10.4121 28.7161 11.34Z"
                      fill="#349545"
                    ></path>
                  </svg>
                </div>
                <div
                  classname={cx("contact__header-content")}
                  style={{
                    paddingLeft: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginTop: "2px",
                      lineheight: "normal",
                      color: "#339538",
                      marginBottom: "0"
                    }}
                  >
                    Hỗ trợ
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                      lineHeight: "normal",
                      display: "inline-block",
                      marginTop: "0px",
                      color: "#339538",
                      textDecoration: "none",
                    }}
                  >
                    1900 6750
                  </a>
                </div>
              </div>
              <div className={cx("header__acount", "header--icon")} >
                <a href="#" alt="">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 21.875C22.3325 21.875 26.25 17.9575 26.25 13.125C26.25 8.29251 22.3325 4.375 17.5 4.375C12.6675 4.375 8.75 8.29251 8.75 13.125C8.75 17.9575 12.6675 21.875 17.5 21.875Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M4.23682 29.53C5.58153 27.2024 7.51508 25.2697 9.84322 23.926C12.1714 22.5823 14.8121 21.875 17.5002 21.875C20.1883 21.875 22.829 22.5824 25.1571 23.9262C27.4852 25.2699 29.4188 27.2027 30.7634 29.5302"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <div className={cx("drop-acount")}>
                  {!user && (
                    <>
                    <a href="/login">Đăng nhập</a>
                    <a href="/signup">Đăng ký</a>
                    </>
                  )}
                  {user && (
                    <>
                    <a>{user.name}</a>
                    <a onClick={handleLogout}>Đăng xuất</a>
                    </>
                  )}
                  
                  <a
                    href="/danh-sach-yeu-thich"
                    title="Danh sách yêu thích"
                    rel="nofollow"
                  >
                    Danh sách yêu thích
                  </a>
                </div>
              </div>
              <div className={cx("header__cart", "header--icon")} onClick={handleOpenCart}>
                <a>
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.47253 20.4219C6.94111 20.4219 5.69971 21.6707 5.69971 23.211C5.69971 24.7513 6.94117 26 8.47253 26C10.004 26 11.2454 24.7513 11.2454 23.211C11.2454 21.6707 10.004 20.4219 8.47253 20.4219ZM8.47253 24.7605C7.62176 24.7605 6.93209 24.0668 6.93209 23.211C6.93209 22.3553 7.62176 21.6616 8.47253 21.6616C9.32331 21.6616 10.013 22.3553 10.013 23.211C10.013 24.0668 9.32331 24.7605 8.47253 24.7605Z"
                      fill="white"
                    ></path>
                    <path
                      d="M20.1801 20.4219C18.6486 20.4219 17.4072 21.6707 17.4072 23.211C17.4072 24.7513 18.6487 26 20.1801 26C21.7114 26 22.9529 24.7513 22.9529 23.211C22.9529 21.6707 21.7115 20.4219 20.1801 20.4219ZM20.1801 24.7605C19.3293 24.7605 18.6396 24.0668 18.6396 23.211C18.6396 22.3553 19.3293 21.6616 20.1801 21.6616C21.0308 21.6616 21.7205 22.3553 21.7205 23.211C21.7206 24.0668 21.0308 24.7605 20.1801 24.7605Z"
                      fill="white"
                    ></path>
                    <path
                      d="M26.4343 4.15262C26.306 4.01162 26.1304 3.92336 25.9413 3.90468L5.88457 3.62578L5.33001 1.92135C4.93933 0.781956 3.87856 0.0127528 2.6804 0H0.616185C0.275865 0 0 0.277478 0 0.619787C0 0.962097 0.275865 1.23957 0.616185 1.23957H2.6804C3.35036 1.25446 3.94031 1.68717 4.15926 2.32422L8.07203 14.1931L7.76397 14.9059C7.42035 15.7971 7.52354 16.8003 8.04125 17.6019C8.554 18.3893 9.41662 18.8752 10.352 18.9035H22.3368C22.6771 18.9035 22.9529 18.626 22.9529 18.2837C22.9529 17.9414 22.6771 17.6639 22.3368 17.6639H10.3519C9.8237 17.6506 9.33748 17.3711 9.0579 16.9202C8.78145 16.4747 8.72466 15.9259 8.90387 15.4326L9.15037 14.8748L22.121 13.5113C23.5458 13.3535 24.7178 12.3112 25.0479 10.9082L26.5268 4.67934C26.5934 4.49997 26.5581 4.29824 26.4343 4.15262ZM23.8463 10.6293C23.6463 11.5325 22.884 12.1986 21.967 12.2718L9.15037 13.6043L6.2851 4.86535L25.1711 5.14425L23.8463 10.6293Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                <span>{user?.cart.count || 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("bottom_header")}>
        <div className={cx("header-menu")}>
            <ul className={cx("menu-list")}>
              <li className={cx("menu-item")}>
                <a className={cx("menu-item-link")} href='/'>
                  TRANG CHỦ
                </a>
              </li>
              <li className={cx("menu-item")}>
                <a className={cx("menu-item-link")} href='/introduce'>
                  GIỚI THIỆU
                </a>
              </li>
              <li className={cx("menu-item")}>
                <a className={cx("menu-item-link")} href='/product-all'>
                  SẢN PHẨM
                </a>
              </li>
              <li className={cx("menu-item")}>
                <a className={cx("menu-item-link")} href='./news'>
                  TIN TỨC
                </a>
              </li>
              <li className={cx("menu-item")} >
                <a className={cx("menu-item-link")} href='contact'>
                  LIÊN HỆ
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
