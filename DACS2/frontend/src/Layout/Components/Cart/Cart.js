import React, { useEffect, useLayoutEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartToggle } from "../../../features/cartToggleSlice";
import { useDecreaseCartProductMutation, useIncreaseCartProductMutation, useRemoveFromCartMutation } from "../../../services/appApi";

const cx = classNames.bind(styles);

function Cart() {
  const user = useSelector(state => state.user)
  const products = useSelector((state) => state.products);
  const userCartObj = user?.cart
  const disPatch = useDispatch()
  const crtToggle = useSelector(state => state.cartToggle)

  const [increaseCart] = useIncreaseCartProductMutation();
  const [decreaseCart] = useDecreaseCartProductMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  let cart = products.filter((product) => userCartObj[product._id] != null)
    
  function handleDecrease(product) {
    const quantity = user.cart.count;
    if (quantity <= 0) return alert("Can't proceed");
    decreaseCart(product);
    console.log(user.cart[product.productId])
    if(user.cart[product.productId] === 1) {
      removeFromCart(product)
    }
  }

  function handleClose() {
    disPatch(cartToggle())
  }

  return (
    <div className={cx("wrapper", crtToggle && "active") }>
      <div className={cx("heading")}>
        <h4 className={cx("title")}>GIỎ HÀNG</h4>
        <div className={cx("btn-close")} onClick={handleClose}>
          <svg class="Icon Icon--close" viewBox="0 0 16 14">
            <path
              d="M15 0L1 14m14 0L1 0"
              stroke="currentColor"
              fill="none"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className={cx("drawer__inner")}>
        <div className={cx("product__list")}>
          {cart.map(item => (
            <div className={cx("product__item")}>
            <Link to="" className={cx("product__item--link")}>
              <img
                src={item.pictures[0].url}
                alt=""
              />
            </Link>
            <div className={cx("product__item--info")}>
              <Link to="" className={cx("product__item--title")}>
                {item.name}
              </Link>
              <div className={cx("product__item--center")}>
                <div className={cx("product__item--amount")}>Số lượng</div>
                <div className={cx("product__item--price")}>{item.price * user.cart[item._id]}₫</div>
              </div>
              <div className={cx("product__item--bottom")}>
                <div className={cx("input-group__btn")}>
                  <button onClick={() => handleDecrease({ productId: item._id, price: item.price, userId: user._id })}>-</button>
                  <input type="text" value={userCartObj[item._id]} />
                  <button onClick={() => increaseCart({ productId: item._id, price: item.price, userId: user._id })}>+</button>
                </div>
                <div className={cx("product__item--delete")} onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })}>Xóa</div>
              </div>
            </div>
          </div>
          ))}
          
          
        </div>
        <div className={cx("pay")}>
          <div className={cx("pay__subtotal")}>
            <div classNames={cx("pay__subtotal--sum")}>Tổng tiền:</div>
            <div className={cx("pay__subtotal--amount")}>{user.cart.total}₫</div>
          </div>
          <div className={cx("pay__btn")}>
            <button>Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
