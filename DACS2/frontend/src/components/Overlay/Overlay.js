import React from "react";
import classNames from "classnames/bind";
import styles from "./Overlay.module.scss";
import { useDeleteProductMutation } from "../../services/appApi";

const cx = classNames.bind(styles);

function Overlay({ className, setActive, productId }) {
  const [deleteProduct] = useDeleteProductMutation();
  console.log(productId);
  return (
    <div
      className={cx("wrapper", className)}
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          setActive(false);
        }
      }}
    >
      <div className={cx("modal")}>
        <div className={cx("modal__title")}>Cảnh báo</div>
        <div className={cx("modal__text")}>
          Bạn có chắc chắn là muốn xóa sản phẩm này?
        </div>
        <div className={cx("modal__btn")}>
          <button
            className={cx("modal__btn--cancel")}
            onClick={() => setActive(false)}
          >
            Hủy bỏ
          </button>
          <button
            className={cx("modal__btn--confirm")}
            onClick={() => {
              deleteProduct({ productId });
              setActive(false);
            }}
          >
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
