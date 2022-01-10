import React from "react";
import styles from "./ShoppingCartItem.module.css";
import db from "../../../app/db/db";

const ShoppingCartItem = ({ product }) => {
  const removeProductFromCart = () => {
    db.cart.where("id").equals(product.id).delete();
  };

  return (
    <div className={styles.item}>
      <p>{product.title}</p>
      <div>
        <h4>
          ${product.price} ({product.items})
        </h4>
        <button className="icon" onClick={removeProductFromCart}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
