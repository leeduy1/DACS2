import React from 'react'
import classNames from 'classnames/bind'
import styles from './ProductAll.module.scss'
import ProductPortfolio from '../../components/ProductPortfolio/ProductPortfolio'
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts'
import { useSelector } from 'react-redux'
import ProductPreview from '../../components/productPreview/ProductPreview'

const cx = classNames.bind(styles)

function ProductAll() {
  const products = useSelector(state => state.products)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('navbar')}>
        <ProductPortfolio/>
      </div>
      <div className={cx('content')}>
        <CategoryProducts/>
        <div className={cx('product-list')}>
          {products.map((product) => (
            <ProductPreview {...product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductAll