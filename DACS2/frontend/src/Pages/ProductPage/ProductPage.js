import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import Loading from "../../components/Loading";
import ProductPreview from "../../components/productPreview/ProductPreview";
import { useAddToCartMutation } from "../../services/appApi";
import { useDispatch, useSelector } from "react-redux";
import { cartToggle } from "../../features/cartToggleSlice";
import parse from 'html-react-parser';

const cx = classNames.bind(styles);

function ProductPage() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  console.log(id);
  const [product, setProduct] = useState(null);
  const [similars, setSimilars] = useState(null);
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(0);
  const [addToCart, { isSuccess }] = useAddToCartMutation();
  const disPatch = useDispatch();

  function handleAddToCart() {
    addToCart({
      userId: user._id,
      productId: id,
      price: product.price,
      image: product.pictures[0].url,
    });
    disPatch(cartToggle());
  }

  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) => {
      console.log(data);
      setProduct(data.product);
      setSimilars(data.similar);
    });
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("product-detail")}>
          <div className={cx("detail-left")}>
            <div className={cx("detail-left-img")}>
              <div className={cx("swiper-wrapper")}>
                {product.pictures.map((item, index) => (
                  <div
                    className={cx("swiper-slide",{active : active === index} )}
                    onClick={() => {
                      setActive(index)
                      setTotal(-index * 400);
                    }}
                  >
                    <img src={item.url} alt="" />
                  </div>
                ))}
              </div>
              <div className={cx("img-tall")}>
                <div
                  className={cx("img-tall__inner")}
                  style={{ marginLeft: `${total}px` }}
                >
                  {product.pictures.map((item, index) => (
                    <img src={item.url} alt="" />
                  ))}
                </div>
              </div>
            </div>
            <div className={cx("social-media")}>
              <label>Chia sẻ: </label>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#0384ff"
                  style={{ width: "24px", height: "24px" }}
                >
                  <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#3b5999"
                  style={{ width: "24px", height: "24px" }}
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  fill="#de0217"
                  style={{ width: "24px", height: "24px" }}
                >
                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#fff"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className={cx("detail-right")}>
            <h1 className={cx("title-product")}>{product.name}</h1>
            <div className={cx("inventory_quantity")}>
              <span className={cx("mb-break")}>
                <span class={cx("stock-brand-title")}>Thương hiệu:</span>
                <span class={cx("a-vendor")}>{product.trademark}</span>
              </span>
              <span class={cx("line")}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span className={cx("mb-break")}>
                <span class={cx("stock-brand-title")}>Tình trạng:</span>
                <span class={cx("a-vendor")}>Còn hàng</span>
              </span>
            </div>
            <div className={cx("product-price")}>{product.price}₫</div>
            <div className={cx("custom-btn")}>
              <label>Số lượng:</label>
              <div className={cx("custom-btn-input")}>
                <button className={cx("custom-btn-input-top")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{ width: "10px", height: "10px" }}
                  >
                    <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"></path>
                  </svg>
                </button>
                <input type="text" value="1" />
                <button className={cx("custom-btn-input-bottom")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{ width: "10px", height: "10px" }}
                  >
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={cx("btn-action")}>
              <button className={cx("btn-action-buy")}>
                <span className={cx("txt-main")}>Mua ngay</span>
                <span>Giao hàng tận tay quý khách</span>
              </button>
              <button
                className={cx("btn-action-give")}
                onClick={handleAddToCart}
              >
                <span className={cx("txt-main")}>Cho vào giỏ</span>
                <span>Thêm vào giỏ để chọn tiếp</span>
              </button>
            </div>
          </div>
        </div>
        <div className={cx("product-decription")}>
          <div className={cx("product-description__title")}>
            <h3>Mô tả sản phẩm</h3>
          </div>

          <div className={cx("product-description__content")}>
            {parse(product.description)}
          </div>
        </div>
        <h2 className={cx("product-similar-title")}>Sản phẩm tương tự</h2>
        <div className={cx("product-similar")}>
          {similars.map((similar) => (
            <ProductPreview {...similar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
