import React from "react";
import db from "../../app/db/db";
import Rating from "./Rating";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  const { image, title, description, price, category, rating } = product;

  const addProductToCart = async () => {
    const productFromDb = await db.cart.get({ title: title });

    // If products is already in the cart
    if (productFromDb == null) {
      await db.cart.add({
        title,
        price,
        category,
        items: 1,
      });
    } else {
      await db.cart.update(productFromDb.id, {
        items: productFromDb.items + 1,
      });
    }
  };

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
      <button className={styles.button} onClick={addProductToCart}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;
