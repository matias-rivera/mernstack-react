import React from "react";
import styles from "./ProductDetails.module.css";
import Rating from "./Rating";
import { addProductToCart } from "../../app/services/productsCartServices";
import { BtnSuccess } from "../Common/Buttons";

const ProductDetails = ({ product }) => {
  if (!product) return <h1>No se pudo encontrar el producto</h1>;

  const { image, title, description, price, category, rating, id } = product;

  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <h4>{category}</h4>
        <p>{description}</p>
        <h3 className={styles.price}>${price}</h3>
        <Rating value={rating.rate} text={rating.count} />
        <BtnSuccess
          onClick={() => addProductToCart(product)}
          style={{
            marginTop: "auto",
            marginBottom: "0",
          }}
        >
          ADD TO CART
        </BtnSuccess>
      </div>
    </div>
  );
};

export default ProductDetails;
