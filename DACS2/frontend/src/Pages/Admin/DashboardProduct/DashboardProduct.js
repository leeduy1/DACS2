import { useSelector } from "react-redux";
import styles from "./DashboardProduct.module.scss";
import classNames from "classnames/bind";
import TitleAdmin from "../../../components/TitleAdmin/TitleAdmin";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ElementButtonBtn from "../../../components/ElementButtonBtn/ElementButtonBtn";
import HeaderContentAdmin from "../../../components/HeaderContentAdmin/HeaderContentAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Overlay from "../../../components/Overlay/Overlay";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../../features/productSlice";

const cx = classNames.bind(styles);

function DashboardProducts() {
  const products = useSelector((state) => state.products);
  const [active, setActive] = useState(false);

  const [productId, setProductId] = useState();
  const [searchProducts, setSearchProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/products").then(({ data }) => {
      console.log(data);
      dispatch(updateProducts(data));
    });
  }, []);

  return (
    <>
      <AdminDashboard>
        <div className={cx("wrapper")}>
          <TitleAdmin />
          <div className={cx("body")}>
            <ElementButtonBtn />
            <HeaderContentAdmin />
            <table className={cx("table")}>
              <thead>
                <tr>
                  <th style={{ width: "13px" }}>
                    <input type="checkbox" />
                  </th>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh</th>
                  <th>giá tiền</th>
                  <th>Danh mục</th>
                  <th>Thương hiệu</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>
                      <img src={product.pictures[0].url} alt="" />
                    </td>
                    <td>{product.price} ₫</td>
                    <td>{product.category}</td>
                    <td>{product.trademark}</td>
                    <td>
                      <button
                        className={cx("btn-Trash")}
                        onClick={() => {
                          setActive(true);
                          setProductId(product._id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                      <Link
                        to={`/product/${product._id}/edit`}
                        className={cx("btn-Edit")}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminDashboard>
      <Overlay
        className={active && "active"}
        setActive={setActive}
        productId={productId}
      />
    </>
  );
}

export default DashboardProducts;
