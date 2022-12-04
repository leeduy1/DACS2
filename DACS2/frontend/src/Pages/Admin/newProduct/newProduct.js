import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../../services/appApi";
import axios from "../../../axios";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import TitleAdmin from "../../../components/TitleAdmin/TitleAdmin";
import styles from "./NewProduct.module.scss";
import classNames from "classnames/bind";
import InputAdmin from "../../../components/InputAdmin/InputAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const cx = classNames.bind(styles);

function NewProduct() {
  const [name, setName] = useState("");
  const [trademark, setTrademark] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const navigate = useNavigate();
  const [createProduct, { isError, error, isLoading, isSuccess }] =
    useCreateProductMutation();

  console.log(description);
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
    if (!name || !description || !price || !category || !images.length) {
      return alert("Please fill out all the fields");
    }
    createProduct({ name, trademark, description, price, category, images });
    setTimeout(() => {
      navigate("/admin/products");
    }, 3000);
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
                {/* <CKEditor
                  editor={ClassicEditor}
                  data=""
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
                /> */}
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Hello from CKEditor 5!</p>"
                  config={{
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "link",
                      "bulletedList",
                      "numberedList",
                      "blockQuote",
                      "ckfinder",
                      "|",
                      "imageTextAlternative",
                      "imageUpload",
                      "imageStyle:full",
                      "imageStyle:side",
                      "|",
                      "mediaEmbed",
                      "insertTable",
                      "tableColumn",
                      "tableRow",
                      "mergeTableCells",
                      "|",
                      "undo",
                      "redo",
                    ],
                  }}
                  onInit={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                    console.log(
                      "toolbar: ",
                      Array.from(editor.ui.componentFactory.names())
                    );
                    console.log(
                      "plugins: ",
                      ClassicEditor.builtinPlugins.map(
                        (plugin) => plugin.pluginName
                      )
                    );
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setDescription(data);
                  }}
                  onBlur={(editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
            <div className={cx("button-bottom")}>
              <button className={cx("btn", "btn-save")} onClick={handleSubmit}>
                Lưu lại
              </button>
              <Link to="" className={cx("btn", "btn-cancel")}>
                Hủy bỏ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
}

export default NewProduct;
