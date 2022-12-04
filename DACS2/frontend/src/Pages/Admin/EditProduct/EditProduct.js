import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUpdateProductMutation } from "../../../services/appApi";
import axios from "../../../axios";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import TitleAdmin from "../../../components/TitleAdmin/TitleAdmin";
import styles from "./EditProduct.module.scss";
import classNames from "classnames/bind";
import InputAdmin from "../../../components/InputAdmin/InputAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const cx = classNames.bind(styles);

function EditProduct() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [trademark, setTrademark] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const navigate = useNavigate();
  const [updateProduct, { isError, error, isLoading, isSuccess }] =
    useUpdateProductMutation();

  useEffect(() => {
    axios
      .get("/products/" + id)
      .then(({ data }) => {
        const product = data.product;
        setName(product.name);
        setTrademark(product.trademark);
        setDescription(product.description);
        setCategory(product.category);
        setImages(product.pictures);
        setPrice(product.price);
      })
      .catch((e) => console.log(e));
  }, [id]);

  function handleRemoveImg(imgObj) {
    setImgToRemove(imgObj.public_id);
    axios
      .delete(`/images/${imgObj.public_id}/`)
      .then((res) => {
        setImgToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !images.length ||
      !trademark.length
    ) {
      return alert("Please fill out all the fields");
    }
    updateProduct({
      id,
      name,
      trademark,
      description,
      price,
      category,
      images,
    }).then(({ data }) => {
      if (data.length > 0) {
        setTimeout(() => {
          navigate("/admin/products");
        }, 1500);
      }
    });
  }

  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dzprqr5uo",
        uploadPreset: "qt2yfu5v",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    widget.open();
  }

  return (
    <AdminDashboard>
      <div className={cx("wrapper")}>
        <TitleAdmin />
        <div className={cx("body")}>
          <h3 className={cx("title")}>Tạo mới sản phẩm</h3>
          <div className={cx("main")}>
            <form>
              <InputAdmin
                title="Tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputAdmin
                title="Thương hiệu"
                value={trademark}
                onChange={(e) => setTrademark(e.target.value)}
              />
              <InputAdmin
                title="Giá bán"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <InputAdmin
                title="Danh mục"
                value={category}
                option={true}
                onChange={(e) => setCategory(e.target.value)}
              />
            </form>
            <div className={cx("add__img")}>
              <label className={cx("add__img--title")}>Ảnh sản phẩm</label>
              <button type="button" onClick={showWidget}>
                <FontAwesomeIcon
                  className={cx("add__img--icon")}
                  icon={faCloudUploadAlt}
                />
                Chọn ảnh
              </button>
              <div className="images-preview-container">
                {images.map((image) => (
                  <div className={cx("image-preview")}>
                    <img src={image.url} alt="" />
                    {imgToRemove != image.public_id && (
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={cx("icon-close")}
                        onClick={() => handleRemoveImg(image)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("describe")}>
              <label>Mô tả sản phẩm</label>
              <div className={cx("content")}>
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onReady={(editor) => {
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setDescription(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
            <div className={cx("button-bottom")}>
              <button className={cx("btn", "btn-save")} onClick={handleSubmit}>
                Lưu lại
              </button>
              <Link to="/admin/products" className={cx("btn", "btn-cancel")}>
                Hủy bỏ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
}

export default EditProduct;
