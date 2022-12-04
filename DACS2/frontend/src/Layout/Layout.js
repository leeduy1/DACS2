import React from 'react'
import classNames from 'classnames/bind';
import styles from './Layout.module.scss'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { cartToggle } from '../features/cartToggleSlice';
 const cx = classNames.bind(styles);

 function Layout({children}) {

  const user = useSelector((state) => state.user);
  const crtToggle = useSelector(state => state.cartToggle)
  const disPatch = useDispatch()
  function handleCloseCart() {
    disPatch(cartToggle())
  }

  
   return (
     <div className={cx('wrapper')}>
        <Header/>
        <div className={cx('container')}>
            {children}
        </div>
        <Footer/>
        {user && (
          <>
          <div className={cx('overlay', crtToggle && "active")} onClick={handleCloseCart}>
          </div>
          <Cart/>
          </>
        )}
        
     </div>
   )
 }
 
 export default Layout