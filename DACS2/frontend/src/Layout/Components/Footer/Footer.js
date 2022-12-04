import React from "react";
import className from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = className.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top-footer")}>
        <div className={cx("top-footer-inner")}>
          <div className={cx("top-footer-slide")}>
            <div className={cx("service-left")}>
              <div className={cx("service-left-titile")}>Hỗ trợ 24/7</div>
              <div className={cx("service-left-sumary")}>
                Liên hệ chúng tôi 24h
              </div>
            </div>
            <div className={cx("service-right")}>
              <img src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/service_1.svg?1658678736715" />
            </div>
          </div>
          <div className={cx("top-footer-slide")}>
            <div className={cx("service-left")}>
              <div className={cx("service-left-titile")}>Thanh toán</div>
              <div className={cx("service-left-sumary")}>
                Bảo mật thanh toán
              </div>
            </div>
            <div className={cx("service-right")}>
              <img src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/service_2.svg?1658678736715" />
            </div>
          </div>
          <div className={cx("top-footer-slide")}>
            <div className={cx("service-left")}>
              <div className={cx("service-left-titile")}>Giao hàng</div>
              <div className={cx("service-left-sumary")}>Giao hàng tận nhà</div>
            </div>
            <div className={cx("service-right")}>
              <img src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/service_3.svg?1658678736715" />
            </div>
          </div>
        </div>
      </div>
      <div className={cx("middle-footer")}>
        <div className={cx("middle-footer-inner")}>
          <div className={cx("middle-footer-left")}>
            <div className={cx("logo-footer")}>
              <a>
                <img src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/logo_footer.png?1658678736715" />
              </a>
            </div>
            <div className={cx("about-footer")}>
              Cửa hàng Nông sản sạch là một website cũng cấp thực phẩm an toàn,
              nông sản sạch cho người dân.
            </div>
            <div className={cx("contact-footer")}>
              <div className={cx("contact-footer-info")}>
                <span className={cx("contact-footer-icon")}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0.148438C13.5106 0.148438 16.7734 3.41128 16.7734 7.42188C16.7734 9.37012 15.5931 11.872 13.2652 14.8578C12.1987 16.2222 11.0438 17.5151 9.80779 18.7281C9.72492 18.8073 9.61467 18.8515 9.5 18.8515C9.38533 18.8515 9.27508 18.8073 9.19221 18.7281C7.95625 17.5151 6.80128 16.2222 5.73477 14.8578C3.4069 11.872 2.22656 9.37012 2.22656 7.42188C2.22656 3.41128 5.4894 0.148438 9.5 0.148438ZM9.5 12.6172C12.3648 12.6172 14.6953 10.2867 14.6953 7.42188C14.6953 4.55703 12.3648 2.22656 9.5 2.22656C6.63516 2.22656 4.30469 4.55703 4.30469 7.42188C4.30469 10.2867 6.63516 12.6172 9.5 12.6172Z"
                      fill="#339538"
                    ></path>
                    <path
                      d="M5.9348 6.7955L9.20043 3.82674C9.2824 3.75223 9.3892 3.71094 9.49998 3.71094C9.61075 3.71094 9.71755 3.75223 9.79952 3.82674L13.0651 6.7955C13.1412 6.86468 13.191 6.95805 13.2061 7.05977C13.2212 7.16149 13.2006 7.2653 13.1479 7.35358C13.1063 7.4208 13.048 7.47609 12.9787 7.51407C12.9093 7.55205 12.8314 7.57142 12.7523 7.5703H12.3203V10.3906C12.3203 10.5087 12.2734 10.622 12.1899 10.7055C12.1063 10.789 11.9931 10.8359 11.875 10.8359H10.8359C10.7178 10.8359 10.6045 10.789 10.521 10.7055C10.4375 10.622 10.3906 10.5087 10.3906 10.3906V8.7578C10.3906 8.6397 10.3437 8.52643 10.2602 8.44292C10.1767 8.35941 10.0634 8.31249 9.94529 8.31249H9.05466C8.93656 8.31249 8.82329 8.35941 8.73978 8.44292C8.65627 8.52643 8.60935 8.6397 8.60935 8.7578V10.3906C8.60935 10.5087 8.56243 10.622 8.47892 10.7055C8.39541 10.789 8.28214 10.8359 8.16404 10.8359H7.12498C7.00687 10.8359 6.8936 10.789 6.81009 10.7055C6.72658 10.622 6.67966 10.5087 6.67966 10.3906V7.5703H6.24764C6.16859 7.57142 6.09061 7.55205 6.02129 7.51407C5.95196 7.47609 5.89365 7.4208 5.85205 7.35358C5.79932 7.2653 5.77875 7.16149 5.79383 7.05977C5.80892 6.95805 5.85872 6.86468 5.9348 6.7955Z"
                      fill="#339538"
                    ></path>
                  </svg>
                </span>
                <span className={cx("contact-footer-content")}>
                  Tâng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội
                </span>
              </div>
              <div className={cx("contact-footer-sdt")}>
                <span>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_346_125)">
                      <path
                        d="M7.86765 11.1324C6.05413 9.31892 5.64465 7.5054 5.55227 6.77881C5.52646 6.57791 5.59559 6.37643 5.73932 6.23371L7.20691 4.76678C7.42279 4.55103 7.4611 4.21479 7.29929 3.956L4.96262 0.327658C4.7836 0.0411016 4.41602 -0.0623195 4.11384 0.0888477L0.362651 1.85552C0.118291 1.97585 -0.0254378 2.23547 0.00230662 2.50643C0.198858 4.37368 1.01291 8.96381 5.52377 13.475C10.0346 17.9862 14.6241 18.7999 16.4923 18.9965C16.7633 19.0242 17.0229 18.8805 17.1433 18.6361L18.9099 14.8849C19.0605 14.5834 18.9578 14.2168 18.6724 14.0375L15.0441 11.7015C14.7854 11.5395 14.4492 11.5775 14.2333 11.7932L12.7664 13.2608C12.6236 13.4045 12.4222 13.4736 12.2213 13.4478C11.4947 13.3554 9.68117 12.946 7.86765 11.1324Z"
                        fill="#339538"
                      ></path>
                      <path
                        d="M14.0862 0C11.3724 0 9.17236 1.90655 9.17236 4.25862C9.17679 5.12163 9.47097 5.95814 10.0077 6.63395L9.49995 9.17241L12.0761 8.14183C12.717 8.39069 13.3986 8.518 14.0862 8.51724C16.7999 8.51724 19 6.61069 19 4.25862C19 1.90655 16.7999 0 14.0862 0ZM11.4655 4.91379C11.1036 4.91379 10.8103 4.62046 10.8103 4.25862C10.8103 3.89678 11.1036 3.60345 11.4655 3.60345C11.8273 3.60345 12.1206 3.89678 12.1206 4.25862C12.1206 4.62046 11.8273 4.91379 11.4655 4.91379ZM14.0862 4.91379C13.7243 4.91379 13.431 4.62046 13.431 4.25862C13.431 3.89678 13.7243 3.60345 14.0862 3.60345C14.448 3.60345 14.7413 3.89678 14.7413 4.25862C14.7413 4.62046 14.448 4.91379 14.0862 4.91379ZM16.7069 4.91379C16.345 4.91379 16.0517 4.62046 16.0517 4.25862C16.0517 3.89678 16.345 3.60345 16.7069 3.60345C17.0687 3.60345 17.362 3.89678 17.362 4.25862C17.362 4.62046 17.0687 4.91379 16.7069 4.91379Z"
                        fill="#339538"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_346_125">
                        <rect width="19" height="19" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className={cx("contact-footer-number")}>1900 6750</span>
              </div>
            </div>
          </div>
          <div className={cx("middle-footer-right")}>
            <div className={cx("middle-footer-about")}>
              <h4 className={cx("footer-about-title")}>Về chúng tôi</h4>
              <div className={cx("footer-menu-list")}>
                <ul>
                  <li>Trang chủ</li>
                  <li>Giới thiệu</li>
                  <li>Sản phẩm</li>
                </ul>
                <ul>
                  <li>Đặt hàng</li>
                  <li>Tin tức</li>
                  <li>Liên hệ</li>
                </ul>
              </div>
              <div className={cx("footer-menu-mail")}>
                <div className={cx("menu-mail-img")}>
                  <img src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/i-mail-f.svg?1658678736715"/>
                </div>
                <div className={cx("menu-mail-content")}>
                  <div className={cx("mail-1")}>Đăng ký</div>
                  <div className={cx("mail-2")}>nhận thông tin khuyến mãi</div>
                </div>
              </div>
            </div>
            <div className={cx("middle-footer-support")}>
            <h4 className={cx("footer-about-title")}>Hỗ trợ khách hàng</h4>
              <div className={cx("footer-menu-list")}>
                <ul>
                  <li>Trang chủ</li>
                  <li>Giới thiệu</li>
                  <li>Sản phẩm</li>
                </ul>
              </div>
              <div className={cx("footer-input-mail")}>
                  <input className={cx("input-mail")} placeholder="Email"/>
                  <button className={cx("button-mail")}>Đăng ký</button>
              </div>
              <div className={cx("footer-payment")}>
                <img src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/payment.png?1658678736715"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
