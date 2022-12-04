import classNames from "classnames/bind";
import styles from "./New.module.scss";

const cx = classNames.bind(styles);

function News() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("right-content")}>
          <h1 class={cx('title-page')}>Tin tức</h1>
          <div className={cx("list-blogs")}>
            <div className={cx("block-item")}>
              <div className={cx("block-item__img")}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-4.jpg?v=1646027137757"
                  alt=""
                />
              </div>
              <div className={cx("block-item__content")}>
                <h3>Bí quyết bảo quản nho đen trong tủ lạnh tươi lâu hơn</h3>
              </div>
              <div className={cx("time-post")}>
                <span className={cx("author")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"></path>
                  </svg>
                  Cafein Team
                </span>
                <span className={cx("xo")}>|</span>
                <span className={cx("posted")}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7C0 3.13996 3.13996 0 7 0C10.86 0 14 3.13996 14 7C14 10.86 10.86 14 7 14C3.13996 14 0 10.86 0 7ZM1.08443 7C1.08443 10.2614 3.73857 12.9156 7 12.9156C10.2614 12.9156 12.9156 10.2614 12.9156 7C12.9156 3.73857 10.262 1.08443 7 1.08443C3.73857 1.08443 1.08443 3.73857 1.08443 7ZM7.5422 6.77225L9.49419 8.23624C9.73386 8.41572 9.78267 8.75569 9.60261 8.99483C9.49632 9.13798 9.33366 9.21227 9.16828 9.21227C9.05497 9.21227 8.94108 9.17703 8.84349 9.10383L6.67464 7.47717C6.538 7.37524 6.45775 7.21418 6.45775 7.04339V3.79009C6.45775 3.49024 6.70012 3.24786 6.99997 3.24786C7.29983 3.24786 7.5422 3.49024 7.5422 3.79009V6.77225Z"
                      fill="#7F7F7F"
                    ></path>
                  </svg>
                  Ngày 28/02/2022
                </span>
              </div>
              <p>
                Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và tốt cho
                sức khỏe, tuy nhiên nếu không biết cách bảo quản nho sẽ không để
                được lâu hoặc bị hỏng, không tốt cho sức khỏe. Hôm nay hãy tìm
                hiể...
              </p>
            </div>
            <div className={cx("block-item")}>
              <div className={cx("block-item__img")}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-4.jpg?v=1646027137757"
                  alt=""
                />
              </div>
              <div className={cx("block-item__content")}>
                <h3>Bí quyết bảo quản nho đen trong tủ lạnh tươi lâu hơn</h3>
              </div>
              <div className={cx("time-post")}>
                <span className={cx("author")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"></path>
                  </svg>
                  Cafein Team
                </span>
                <span className={cx("xo")}>|</span>
                <span className={cx("posted")}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7C0 3.13996 3.13996 0 7 0C10.86 0 14 3.13996 14 7C14 10.86 10.86 14 7 14C3.13996 14 0 10.86 0 7ZM1.08443 7C1.08443 10.2614 3.73857 12.9156 7 12.9156C10.2614 12.9156 12.9156 10.2614 12.9156 7C12.9156 3.73857 10.262 1.08443 7 1.08443C3.73857 1.08443 1.08443 3.73857 1.08443 7ZM7.5422 6.77225L9.49419 8.23624C9.73386 8.41572 9.78267 8.75569 9.60261 8.99483C9.49632 9.13798 9.33366 9.21227 9.16828 9.21227C9.05497 9.21227 8.94108 9.17703 8.84349 9.10383L6.67464 7.47717C6.538 7.37524 6.45775 7.21418 6.45775 7.04339V3.79009C6.45775 3.49024 6.70012 3.24786 6.99997 3.24786C7.29983 3.24786 7.5422 3.49024 7.5422 3.79009V6.77225Z"
                      fill="#7F7F7F"
                    ></path>
                  </svg>
                  Ngày 28/02/2022
                </span>
              </div>
              <p>
                Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và tốt cho
                sức khỏe, tuy nhiên nếu không biết cách bảo quản nho sẽ không để
                được lâu hoặc bị hỏng, không tốt cho sức khỏe. Hôm nay hãy tìm
                hiể...
              </p>
            </div>
            <div className={cx("block-item")}>
              <div className={cx("block-item__img")}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-4.jpg?v=1646027137757"
                  alt=""
                />
              </div>
              <div className={cx("block-item__content")}>
                <h3>Bí quyết bảo quản nho đen trong tủ lạnh tươi lâu hơn</h3>
              </div>
              <div className={cx("time-post")}>
                <span className={cx("author")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"></path>
                  </svg>
                  Cafein Team
                </span>
                <span className={cx("xo")}>|</span>
                <span className={cx("posted")}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7C0 3.13996 3.13996 0 7 0C10.86 0 14 3.13996 14 7C14 10.86 10.86 14 7 14C3.13996 14 0 10.86 0 7ZM1.08443 7C1.08443 10.2614 3.73857 12.9156 7 12.9156C10.2614 12.9156 12.9156 10.2614 12.9156 7C12.9156 3.73857 10.262 1.08443 7 1.08443C3.73857 1.08443 1.08443 3.73857 1.08443 7ZM7.5422 6.77225L9.49419 8.23624C9.73386 8.41572 9.78267 8.75569 9.60261 8.99483C9.49632 9.13798 9.33366 9.21227 9.16828 9.21227C9.05497 9.21227 8.94108 9.17703 8.84349 9.10383L6.67464 7.47717C6.538 7.37524 6.45775 7.21418 6.45775 7.04339V3.79009C6.45775 3.49024 6.70012 3.24786 6.99997 3.24786C7.29983 3.24786 7.5422 3.49024 7.5422 3.79009V6.77225Z"
                      fill="#7F7F7F"
                    ></path>
                  </svg>
                  Ngày 28/02/2022
                </span>
              </div>
              <p>
                Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và tốt cho
                sức khỏe, tuy nhiên nếu không biết cách bảo quản nho sẽ không để
                được lâu hoặc bị hỏng, không tốt cho sức khỏe. Hôm nay hãy tìm
                hiể...
              </p>
            </div>
            <div className={cx("block-item")}>
              <div className={cx("block-item__img")}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-4.jpg?v=1646027137757"
                  alt=""
                />
              </div>
              <div className={cx("block-item__content")}>
                <h3>Bí quyết bảo quản nho đen trong tủ lạnh tươi lâu hơn</h3>
              </div>
              <div className={cx("time-post")}>
                <span className={cx("author")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"></path>
                  </svg>
                  Cafein Team
                </span>
                <span className={cx("xo")}>|</span>
                <span className={cx("posted")}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7C0 3.13996 3.13996 0 7 0C10.86 0 14 3.13996 14 7C14 10.86 10.86 14 7 14C3.13996 14 0 10.86 0 7ZM1.08443 7C1.08443 10.2614 3.73857 12.9156 7 12.9156C10.2614 12.9156 12.9156 10.2614 12.9156 7C12.9156 3.73857 10.262 1.08443 7 1.08443C3.73857 1.08443 1.08443 3.73857 1.08443 7ZM7.5422 6.77225L9.49419 8.23624C9.73386 8.41572 9.78267 8.75569 9.60261 8.99483C9.49632 9.13798 9.33366 9.21227 9.16828 9.21227C9.05497 9.21227 8.94108 9.17703 8.84349 9.10383L6.67464 7.47717C6.538 7.37524 6.45775 7.21418 6.45775 7.04339V3.79009C6.45775 3.49024 6.70012 3.24786 6.99997 3.24786C7.29983 3.24786 7.5422 3.49024 7.5422 3.79009V6.77225Z"
                      fill="#7F7F7F"
                    ></path>
                  </svg>
                  Ngày 28/02/2022
                </span>
              </div>
              <p>
                Bí quyết lựa chọn và bảo quản nho tươi – Nho rất ngon và tốt cho
                sức khỏe, tuy nhiên nếu không biết cách bảo quản nho sẽ không để
                được lâu hoặc bị hỏng, không tốt cho sức khỏe. Hôm nay hãy tìm
                hiể...
              </p>
            </div>
          </div>
        </div>
        <div className={cx("left-content")}>
          <h2 className={cx('left-content__title')}>Bài viết nổi bật</h2>
          <div className={cx('block-content')}>
            <div className={cx('block-content__item')}>
              <div className={cx('block-content__item--img')}>
                <img src="https://bizweb.dktcdn.net/100/448/970/articles/untitled-6.jpg?v=1646027190997" alt=""/>
              </div>
              <div className={cx('block-content__item-msg')}>
                <h3>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</h3>
              </div>
            </div>
            <div className={cx('block-content__item')}>
              <div className={cx('block-content__item--img')}>
                <img src="https://bizweb.dktcdn.net/100/448/970/articles/untitled-6.jpg?v=1646027190997" alt=""/>
              </div>
              <div className={cx('block-content__item-msg')}>
                <h3>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</h3>
              </div>
            </div>
            <div className={cx('block-content__item')}>
              <div className={cx('block-content__item--img')}>
                <img src="https://bizweb.dktcdn.net/100/448/970/articles/untitled-6.jpg?v=1646027190997" alt=""/>
              </div>
              <div className={cx('block-content__item-msg')}>
                <h3>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</h3>
              </div>
            </div>
            <div className={cx('block-content__item')}>
              <div className={cx('block-content__item--img')}>
                <img src="https://bizweb.dktcdn.net/100/448/970/articles/untitled-6.jpg?v=1646027190997" alt=""/>
              </div>
              <div className={cx('block-content__item-msg')}>
                <h3>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</h3>
              </div>
            </div>
            <div className={cx('block-content__item')}>
              <div className={cx('block-content__item--img')}>
                <img src="https://bizweb.dktcdn.net/100/448/970/articles/untitled-6.jpg?v=1646027190997" alt=""/>
              </div>
              <div className={cx('block-content__item-msg')}>
                <h3>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
