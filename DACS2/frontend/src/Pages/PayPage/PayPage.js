import React from "react";
import classNames from "classnames/bind";
import styles from "./PayPage.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  useDecreaseCartProductMutation,
  useIncreaseCartProductMutation,
  useRemoveFromCartMutation,
} from "../../services/appApi";

const cx = classNames.bind(styles);

function PayPage() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const userCartObj = user?.cart;

  let cart = products.filter((product) => userCartObj[product._id] != null);

  const [increaseCart] = useIncreaseCartProductMutation();
  const [decreaseCart] = useDecreaseCartProductMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  function handleDecrease(product) {
    const quantity = user.cart.count;
    if (quantity <= 0) return alert("Can't proceed");
    decreaseCart(product);
    console.log(user.cart[product.productId]);
    if (user.cart[product.productId] === 1) {
      removeFromCart(product);
    }
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <h2 className={cx("title")}>Big Green</h2>
        <div className={cx("main__content")}>
          <div className={cx("section")}>
            <div className={cx("section__header")}>Thông tin nhận hàng</div>
            <div className={cx("section__fieldset")}>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Họ và tên"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    type="text"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Số điện thoại (tùy chọn)"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    type="text"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Địa chỉ (tùy chọn)"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Tỉnh thành"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Quận huyện (tùy chọn)"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Phường xã (tùy chọn)"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </div>
              <div className={cx("field__wrapper")}>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Ghi chú"
                  className={cx("field__input-label")}
                >
                  <Form.Control
                    className={cx("field__input-input")}
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "70px" }}
                  />
                </FloatingLabel>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", padding: "0 14px" }}>
            <div className={cx("transport")}>
              <div className={cx("transport__title")}>vận chuyển</div>
              <div className={cx("transport__main")}>
                <div className={cx("radio__input")}>
                  <InputGroup.Radio
                    checked
                    className={cx("radio__input--radio")}
                    aria-label="Radio button for following text input"
                  />
                </div>
                <label className={cx("radio__label")}>
                  <span className={cx("radio__label__primary")}>
                    Giao hàng tận nơi
                  </span>
                  <span className={cx("radio__label__accessory")}>40.000₫</span>
                </label>
              </div>
            </div>
            <div className={cx("pay-cod")}>
              <div className={cx("transport__title")}>Thanh toán</div>
              <div className={cx("transport__main")}>
                <div className={cx("radio__input")}>
                  <InputGroup.Radio
                    checked
                    className={cx("radio__input--radio")}
                    aria-label="Radio button for following text input"
                  />
                </div>
                <label className={cx("radio__label")}>
                  <span className={cx("radio__label__primary")}>
                    Thanh toán khi giao hàng (COD)
                  </span>
                </label>
              </div>
            </div>
            <div className={cx("pay-cod__title")}>
              Bạn chỉ phải thanh toán khi nhận được hàng
            </div>
          </div>
        </div>
      </div>

      <div className={cx("sidebar")}>
        <div className={cx("sidebar__header")}>
          <h2 class={cx("sidebar__title")}>Đơn hàng (7 sản phẩm)</h2>
        </div>
        <div className={cx("sidebar__content")}>
          <div className={cx("order-primary")}>
            {cart.map((item) => (
              <div className={cx("product__item")}>
                <Link to="" className={cx("product__item--link")}>
                  <img src={item.pictures[0].url} alt="" />
                </Link>
                <div className={cx("product__item--info")}>
                  <Link to="" className={cx("product__item--title")}>
                    {item.name}
                  </Link>
                  <div className={cx("product__item--center")}>
                    <div className={cx("product__item--amount")}>Số lượng</div>
                    <div className={cx("product__item--price")}>
                      {item.price * user.cart[item._id]}₫
                    </div>
                  </div>
                  <div className={cx("product__item--bottom")}>
                    <div className={cx("input-group__btn")}>
                      <button
                        onClick={() =>
                          handleDecrease({
                            productId: item._id,
                            price: item.price,
                            userId: user._id,
                          })
                        }
                      >
                        -
                      </button>
                      <input type="text" value={userCartObj[item._id]} />
                      <button
                        onClick={() =>
                          increaseCart({
                            productId: item._id,
                            price: item.price,
                            userId: user._id,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div
                      className={cx("product__item--delete")}
                      onClick={() =>
                        removeFromCart({
                          productId: item._id,
                          price: item.price,
                          userId: user._id,
                        })
                      }
                    >
                      Xóa
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={cx("discount-code")}>
            <input
              className={cx("discount-code__input")}
              placeholder="Nhập mã giảm giá"
            />
            <button className={cx("discount-code__btn")}>Áp dụng</button>
          </div>
          <div className={cx("pay")}>
            <div className={cx("pay-provisional")}>
              <div className={cx("pay-provisional__title")}>Tạm tính</div>
              <div className={cx("pay-provisional__number")}>2710000₫</div>
            </div>
            <div className={cx("transport-fee")}>
              <div className={cx("transport-fee__title")}>Phí vận chuyển</div>
              <div className={cx("transport-fee__number")}>40000₫</div>
            </div>
          </div>
          <div className={cx("total")}>
            <div className={cx("total__title")}>Tổng cộng</div>
            <div className={cx("total__number")}>2750000₫</div>
          </div>
          <div className={cx("button")}>
            <Link to="" className={cx("button__link")}>
              <i class="">❮</i>
              <span>Quay về giỏ hàng</span>
            </Link>
            <button className={cx("button__order")}>ĐẶT HÀNG</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayPage;
