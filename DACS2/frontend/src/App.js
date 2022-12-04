import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BelowHeader from "./components/BelowHeader/BelowHeader";
import { useSelector } from "react-redux";
import routes from "./config/routes";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Introduce from "./Pages/introduce/Introduce";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ScrollToTop from "./components/ScrollTotop";
import News from "./Pages/news/News";
import Contact from "./Pages/Contact/Contact";
import ProductAll from "./Pages/ProductAll/ProductAll";
import ProductFruit from "./Pages/ProductFruit/ProductFruit";
import ProductVegetable from "./Pages/ProductVegetable/ProductVegetable";
import ProductFood from "./Pages/ProductFood/ProductFood";
import DashboardProducts from "./Pages/Admin/DashboardProduct/DashboardProduct";
import AdminDashboard from "./Pages/Admin/AdminDashboard/AdminDashboard";
import ClientAdmin from "./Pages/Admin/ClientAdmin/ClientAdmin";
import NewProduct from "./Pages/Admin/newProduct/newProduct";
import EditProduct from "./Pages/Admin/EditProduct/EditProduct";
import PayPage from "./Pages/PayPage/PayPage";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            {/* home */}
            <Route index path={routes.home} element={
              <Layout>
                <Home/>
              </Layout>
            } />
            <Route path="*" element={
              <Layout>
                <Home/>
              </Layout>
            } />
            {!user && (
              <>
                {/* login */}
                <Route
                  path={routes.login}
                  element={
                    <>
                      <Layout>
                        <BelowHeader title="Đăng nhập" subTitle="ĐĂNG NHẬP"/>
                        <Login />
                      </Layout>
                    </>
                  }
                />
                {/* register */}
                <Route
                  path={routes.signup}
                  element={
                    <>
                      <Layout>
                        <BelowHeader title="Đăng ký" subTitle="ĐĂNG KÝ"/>
                        <Signup />
                      </Layout>
                    </>
                  }
                />
              </>
            )}
            {/* Introduce */}
            <Route
              path={routes.introduce}
              element={
                <>
                <Layout>
                  <BelowHeader title="Giới thiệu" subTitle="GIỚI THIỆU"/>
                  <Introduce />
                </Layout>
                </>
              }
            />
            {/* news */}
            <Route
              path='/news'
              element={
                <>
                <Layout>
                  <BelowHeader title="Tin tức" subTitle="TIN TỨC"/>
                  <News />
                </Layout>
                </>
              }
            />
            <Route
              path='new-product'
              element={
                <>
                  <NewProduct />
                </>
              } 
            />
            <Route
              path='/product/:id/edit'
              element={
                <>
                  <EditProduct />
                </>
              } 
            />
            <Route
              path='contact'
              element={
                <>
                <Layout>
                  <BelowHeader title="Liên hệ" subTitle="LIÊN HỆ"/>
                  <Contact />
                  </Layout>
                </>
              } 
            />
            <Route
              path='product-all'
              element={
                <>
                <Layout>
                  <BelowHeader title="Tất cả sản phẩm" subTitle="TẤT CẢ SẢN PHẨM"/>
                  <ProductAll />
                </Layout>
                </>
              } 
            />
            <Route
              path='product-fruit'
              element={
                <>
                <Layout>
                  <BelowHeader title="Trái cây" subTitle="TRÁI CÂY"/>
                  <ProductFruit />
                </Layout>
                </>
              } 
            />
            <Route
              path='product-food'
              element={
                <>
                <Layout>
                  <BelowHeader title="Thực phẩm" subTitle="THỰC PHẨM"/>
                  <ProductFood />
                </Layout>
                </>
              } 
            />
            <Route
              path='product-vegetable'
              element={
                <>
                <Layout>
                  <BelowHeader title="Rau các loại" subTitle="RAU CÁC LOẠI"/>
                  <ProductVegetable />
                </Layout>
                </>
              } 
            />
            <Route
              path='/product/:id'
              element={
                <>
                <Layout>
                  <BelowHeader title="Chi tiết sản phẩm" subTitle="CHI TIẾT SẢN PHẨM"/>
                  <ProductPage />
                </Layout>
                </>
              } 
            />
            
            <Route path='admin/products' element={
                <DashboardProducts/>
            }/>
             <Route path='pay' element={
                <PayPage/>
            }/>
            <Route path='admin/users' element={
                <ClientAdmin/>
            }/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
