import React from 'react'
import styles from './Product.module.css'
import Rating from './Rating';

const Product = ({product}) => {
    const {image, title, description, price, category, rating} = product;
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <h4>{category}</h4>
                <p>{description}</p>
                <h3 className={styles.price}>${price}</h3>
                <Rating value={rating.rate} text={rating.count} />
            </div>
            <button className={styles.button}>
                ADD TO CART
            </button>
        </div>
    )
}

export default Product