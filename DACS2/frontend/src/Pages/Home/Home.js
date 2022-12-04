import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ProductPreview from "../../components/productPreview/ProductPreview";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import { updateProducts } from "../../features/productSlice";

const cx = classNames.bind(styles);

const responders = [
  {
    name: "NGUYỄN LAN ANH",
    position: "CEO Vinamilk",
    evaluate:
      "Tôi hài lòng với Sapo nhờ dịch vụ Sapo mà thu hút được rất nhiều khách hàng. Tôi đánh giá cao đội ngũ chăm sóc khách hàng luôn tận tình và luôn tư vấn cho tôi những tính năng mới, thuận tiện cho việc bán hàng online.",
    img: "https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/image_customer_review_1.jpg?1658678736715",
  },
  {
    name: "TRẦN ANH ĐỨC",
    position: "Lập trình viên",
    evaluate:
      "Tôi hài lòng với Sapo nhờ dịch vụ Sapo mà thu hút được rất nhiều khách hàng. Tôi đánh giá cao đội ngũ chăm sóc khách hàng luôn tận tình và luôn tư vấn cho tôi những tính năng mới, thuận tiện cho việc bán hàng online.",
    img: "https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/image_customer_review_2.jpg?1658678736715",
    avt: true,
  },
  {
    name: "NGUYỄN KHÁNH VY",
    position: "Thư ký",
    evaluate:
      "Tôi hài lòng với Sapo nhờ dịch vụ Sapo mà thu hút được rất nhiều khách hàng. Tôi đánh giá cao đội ngũ chăm sóc khách hàng luôn tận tình và luôn tư vấn cho tôi những tính năng mới, thuận tiện cho việc bán hàng online.",
    img: "https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/image_customer_review_3.jpg?1658678736715",
  },
  {
    name: "TÚ ANH",
    position: "CMO Momo",
    evaluate:
      "Tôi hài lòng với Sapo nhờ dịch vụ Sapo mà thu hút được rất nhiều khách hàng. Tôi đánh giá cao đội ngũ chăm sóc khách hàng luôn tận tình và luôn tư vấn cho tôi những tính năng mới, thuận tiện cho việc bán hàng online.",
    img: "https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/image_customer_review_4.jpg?1658678736715",
  },
];

function Home() {
  const [respon, setRespon] = useState(responders);
  const [total, setTotal] = useState(0);
  const [totalDes, setTotalDes] = useState(0);
  const [id, setId] = useState(1);
  const [category,setCategory] = useState("all")
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);

  const productsFruit = products.filter(
    (product) => product.category === "Trái cây"
  );
  const lastProductsFruit = productsFruit.slice(0, 8);

  const productsVegetable = products.filter(
    (product) => product.category === "Rau củ"
  );  
  const lastProductsVegetable = productsVegetable.slice(0, 8);

  const productsFood = products.filter(
    (product) => product.category === "Thực phẩm"
  );
  const lastProductsFood = productsFood.slice(0, 8);

  useEffect(() => {
    axios.get("/products").then(({ data }) => {
      console.log(data);
      dispatch(updateProducts(data));
    });
  }, []);

  console.log(lastProducts);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-img")}>
        <img
          src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/slider_1.jpg?1658678736715"
          alt=""
        />
        <div className={cx("cate-list")}>
          <div className={cx("cate-item")}>
            <div className={cx("cate-item__img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-1.png?v=1646028861353"
                alt=""
              />
            </div>
            <div className={cx("cate-item__title")}>Gạo</div>
          </div>
          <div className={cx("cate-item")}>
            <div className={cx("cate-item__img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-2.png?v=1646028875540"
                alt=""
              />
            </div>
            <div className={cx("cate-item__title")}>Mướp</div>
          </div>
          <div className={cx("cate-item")}>
            <div className={cx("cate-item__img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-3.png?v=1646028896397"
                alt=""
              />
            </div>
            <div className={cx("cate-item__title")}>Đu đủ</div>
          </div>
          <div className={cx("cate-item")}>
            <div className={cx("cate-item__img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-4.png?v=1646028861353"
                alt=""
              />
            </div>
            <div className={cx("cate-item__title")}>Bông cải xanh</div>
          </div>
          <div className={cx("cate-item")}>
            <div className={cx("cate-item__img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-5.png?v=1646028861353"
                alt=""
              />
            </div>
            <div className={cx("cate-item__title")}>Cà chua</div>
          </div>
          <div className={cx("cate-item")}>
            <div className={cx("cate-item__img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/compact/100/448/970/collections/cate-6.png?v=1646028861353"
                alt=""
              />
            </div>
            <div className={cx("cate-item__title")}>Măng tây</div>
          </div>
        </div>
      </div>
      <div className={cx("section-intro")}>
        <div className={cx("intro-inner")}>
          <div className={"intro-img"}>
            <img
              src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/banner_intro.png?1658678736715"
              alt=""
            />
          </div>
          <div className={cx("intro-content")}>
            <div className={cx("intro-content__title")}>
              <h3 className={cx("intro-content__title-main")}>
                Chúng tôi cung cấp
              </h3>
              <h2 className={cx("intro-content__title-sub")}>
                CÁC SẢN PHẨM NÔNG SẢN TƯƠI - SẠCH
              </h2>
            </div>
            <div className={cx("intro-content__msg")}>
              Cửa hàng<b style={{ color: "#339538" }}> Nông sản sạch </b>là một
              website cung cấp thực phẩm an toàn, nông sản sạch cho người dân.
              Với mong muốn mang tới mọi gia đình những thực phẩm an toàn nhất
              trước mối lo ngại về thực phẩm bẩn tại Việt Nam. <br></br>
              Với mục đích là <b>"Mang thiên nhiên về với căn nhà của bạn"</b>
            </div>
            <div className={cx("intro-img__list")}>
              <div className={cx("intro-img__item")}>
                <img
                  src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/img_intro_1.jpg?1658678736715"
                  alt=""
                />
              </div>
              <div className={cx("intro-img__item")}>
                <img
                  src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/img_intro_2.jpg?1658678736715"
                  alt=""
                />
              </div>
              <div className={cx("intro-img__item")}>
                <img
                  src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/img_intro_3.jpg?1658678736715"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("section-product")}>
        <div className={cx("section-product-img")}>
          <img
            src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/bg_tab_1_top.png?1649300337854"
            alt=""
          />
        </div>
        <div className={cx("section-product__inner")}>
          <div className={cx("product-title")}>SẢN PHẨM</div>
          <div className={cx("product-nav-tab")}>
            <div className={cx("nav-tab")}>
              <div className={cx("product-nav-item", category === "all" && "active")} onClick={() => setCategory("all")}>Tất cả</div>
              <div className={cx("product-nav-item", category === "fruit" && "active")} onClick={() => setCategory("fruit")}>Trái cây</div>
              <div className={cx("product-nav-item", category === "vegetable" && "active")} onClick={() => setCategory("vegetable")}>Rau củ</div>
              <div className={cx("product-nav-item", category === "food" && "active")} onClick={() => setCategory("food")}>Thực phẩm</div>
            </div>
          </div>
          <div className={cx("wrap-product")}>
            {category === "all" && lastProducts.map((product) => (
              <ProductPreview {...product} />
            ))}
            {category === "fruit" && lastProductsFruit.map((product) => (
              <ProductPreview {...product} />
            ))}
            {category === "vegetable" && lastProductsVegetable.map((product) => (
              <ProductPreview {...product} />
            ))}
            {category === "food" && lastProductsFood.map((product) => (
              <ProductPreview {...product} />
            ))}
          </div>
        </div>
        <div className={cx("section-product-img-bottom")}>
          <img
            src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/bg_tab_1_bot.png?1649300337854"
            alt=""
          />
        </div>
      </div>
      <div className={cx("section-3banner")}>
        <div className={cx("section-3banner-inner")}>
          <div className={cx("banner-1", "banner")}>
            <img
              src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/banner_1.jpg?1658678736715"
              alt=""
            />
          </div>
          <div className={cx("banner-2", "banner")}>
            <img
              src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/banner_2.jpg?1658678736715"
              alt=""
            />
          </div>
          <div className={cx("banner-3", "banner")}>
            <img
              src="https://bizweb.dktcdn.net/100/448/970/themes/855670/assets/banner_3.jpg?1658678736715"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={cx("section-feedback")}>
        <div className={cx("section-feedback-inner")}>
          <div
            className={cx("section-feedback-info")}
            style={{ marginLeft: `${totalDes}px` }}
          >
            {respon.map((responder) => (
              <div className={cx("feedback-info-item")}>
                <div className={cx("dauphay")}>
                  <svg
                    style={{ width: "44px", height: "31px" }}
                    viewBox="0 0 44 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1143 29.916C8.56478 30.1478 6.36296 29.5104 4.50879 28.0039C2.77051 26.3815 1.61165 24.2956 1.03223 21.7461C0.568685 19.5443 0.452799 17.2845 0.68457 14.9668C1.03223 12.5332 1.78548 10.3314 2.94434 8.36133C4.21908 6.27539 5.95736 4.47917 8.15918 2.97266C10.361 1.46615 13.1423 0.539062 16.5029 0.191406L17.7197 4.53711C15.9814 5.00065 14.1273 5.81185 12.1572 6.9707C10.1872 8.12956 8.91243 10.0996 8.33301 12.8809L10.9404 12.3594C13.6058 12.2435 15.8656 12.9967 17.7197 14.6191C19.6898 16.2415 20.6748 18.2695 20.6748 20.7031C20.6748 23.1367 19.7477 25.2806 17.8936 27.1348C16.0394 28.873 13.7796 29.8001 11.1143 29.916ZM34.0596 29.916C31.3942 30.1478 29.1924 29.5104 27.4541 28.0039C25.7158 26.3815 24.557 24.2956 23.9775 21.7461C23.3981 19.5443 23.2822 17.2845 23.6299 14.9668C23.9775 12.5332 24.7308 10.3314 25.8896 8.36133C27.1644 6.27539 28.9027 4.47917 31.1045 2.97266C33.3063 1.46615 36.0296 0.539062 39.2744 0.191406L40.665 4.53711C38.9268 5.00065 37.0146 5.81185 34.9287 6.9707C32.9587 8.12956 31.6839 10.0996 31.1045 12.8809C31.568 12.765 31.9736 12.707 32.3213 12.707C32.7848 12.5911 33.3063 12.4753 33.8857 12.3594C36.5511 12.2435 38.8109 12.9967 40.665 14.6191C42.5192 16.2415 43.4463 18.2695 43.4463 20.7031C43.4463 23.1367 42.5192 25.2806 40.665 27.1348C38.9268 28.873 36.7249 29.8001 34.0596 29.916Z"
                      fill="#A1CCA3"
                    ></path>
                  </svg>
                </div>
                <div className={cx("des")}>{responder.evaluate}</div>
                <div className={cx("name")}>{responder.name}</div>
                <div className={cx("position")}>{responder.position}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("section-feedback-img")}>
          <div className={cx("feedback-img__inner")}>
            <div
              className={cx("feedback-img__list")}
              style={{ marginLeft: `${total}px` }}
            >
              {responders.map((responder, index) => (
                <div
                  className={cx(`feedback-img__item`, { active: id === index })}
                  onClick={() => {
                    setId(index);
                    setTotal(-index * 148 + 148);
                    setTotalDes(-index * 700 + 700);

                    console.log(index);
                  }}
                >
                  <img src={responder.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("section-block")}>
        <div className={cx("section-block-inner")}>
          <h2 className={cx("block-title")}>TIN TỨC NÔNG NGHIỆP</h2>
          <div
            className={cx("block-list")}
            style={{ justifyContent: "space-between" }}
          >
            <div className={cx("block-item")}>
              <div className={cx("block-item__img")}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-6.jpg?v=1646027190997"
                  alt=""
                />
              </div>
              <div className={cx("block-item__content")}>
                <h3>
                  Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao
                  đao
                </h3>
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
                Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo
                dài liên tiếp nên nguồn cung rau xanh cho các chợ bắt đầu...
              </p>
            </div>
            <div className={cx("block-item")}>
              <div className={cx("block-item__img")}>
                <img
                  src="https://bizweb.dktcdn.net/thumb/grande/100/448/970/articles/untitled-5.jpg?v=1646027162863"
                  alt=""
                />
              </div>
              <div className={cx("block-item__content")}>
                <h3>
                  Nhập khẩu rau quả vượt mốc 1 tỷ USD, Thái Lan chiếm 60% thị
                  phần
                </h3>
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
                Theo báo cáo từ Bộ NN&PTNT, giá trị xuất khẩu hàng rau quả tháng
                9 năm 2017 ước đạt 294 triệu USD, đưa giá trị xuất khẩu hàng rau
                quả 9 tháng đầu năm 2017 ước đạt 2,64 tỷ USD, tăng 44,2% so với
                cù...
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
      </div>
    </div>
  );
}

export default Home;
