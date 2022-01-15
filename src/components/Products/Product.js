import React from "react";
import Rating from "./Rating";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../app/services/productsCartServices";
import { BtnSuccess } from "../Common/Buttons";

const Product = ({ product }) => {
  const { image, title, description, price, category, rating, id } = product;

  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <div className={styles.content}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <h4>{category}</h4>
          <p>{description}</p>
          <h3 className={styles.price}>${price}</h3>
          <Rating value={rating.rate} text={rating.count} />
        </div>
      </Link>
      <BtnSuccess onClick={() => addProductToCart(product)}>
        ADD TO CART
      </BtnSuccess>
    </div>
  );
};

export default Product;
