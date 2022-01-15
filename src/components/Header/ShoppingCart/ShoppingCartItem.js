import React from "react";
import { removeProductFromCart } from "../../../app/services/productsCartServices";
import styles from "./ShoppingCartItem.module.css";

const ShoppingCartItem = ({ product }) => {
  return (
    <div className={styles.item}>
      <p>{product.title}</p>
      <div>
        <h4>
          ${(product.price * product.items).toFixed(2)} ({product.items})
        </h4>
        <button className="icon" onClick={() => removeProductFromCart(product)}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
