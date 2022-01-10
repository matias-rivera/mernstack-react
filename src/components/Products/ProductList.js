import React from 'react'
import Product from './Product'
import styles from './ProductList.module.css'

const ProductList = ({products}) => {
    return (
    <div className={styles.list}>
        {products.map(product => <Product key={product.id} product={product} />)}
    </div>
    )
}

export default ProductList