import React from 'react'
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts'
import ProductPortfolio from '../../components/ProductPortfolio/ProductPortfolio'
import ProductPreview from '../../components/productPreview/ProductPreview'
import styles from './ProductVegetable.module.scss'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

function ProductVegetable() {
  const products = useSelector(state => state.products)
  const productFruits = products.filter((product) => product.category === "Rau củ")

  return (
    <div className={cx('wrapper')}>
      <div className={cx('navbar')}>
        <ProductPortfolio/>
      </div>
      <div className={cx('content')}>
        <CategoryProducts/>
        <div className={cx('product-list')}>
          {productFruits.map((product) => (
            <ProductPreview {...product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductVegetable