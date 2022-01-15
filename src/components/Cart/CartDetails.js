import React, { useEffect, useState } from "react";
import styles from "./CartDetails.module.css";
import { Link } from "react-router-dom";
import { BtnPrimary, BtnSuccess } from "../Common/Buttons";
import {
  addItem,
  removeItem,
  removeProductFromCart,
  useCart,
  getTotalPrice,
} from "../../app/services/productsCartServices";

const CartDetails = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const productsCart = useCart();

  const cartIsNotEmpty = productsCart.length > 0;

  useEffect(() => {
    if (cartIsNotEmpty) {
      setTotalPrice(getTotalPrice(productsCart));
    }
  }, [productsCart]);

  return (
    <div className={styles.cart}>
      <div className={styles.productsList}>
        <ul>
          {productsCart?.map((product) => {
            return (
              <li key={product.id}>
                <div className={styles.infoSection}>
                  <img src={product.image} alt={product.title} />
                  <span>{product.title}</span>
                </div>
                <div className={styles.actionSection}>
                  <div className={styles.buttonGroup}>
                    <button
                      className={styles.left}
                      style={{ color: "red" }}
                      onClick={() => removeItem(product)}
                    >
                      -
                    </button>
                    <span className={styles.center}>{product.items}</span>
                    <button
                      className={styles.right}
                      style={{ color: "greenlight" }}
                      onClick={() => addItem(product)}
                    >
                      +
                    </button>
                  </div>
                  <span>${product.price}</span>
                  <button
                    className={styles.buttonDelete}
                    onClick={() => removeProductFromCart(product)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </li>
            );
          })}
          <li className={styles.total}>
            <span>TOTAL:</span>
            <span style={{ color: "blue" }}>
              {cartIsNotEmpty ? `${totalPrice.toFixed(2)}` : "No items added"}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.cartInfo}>
        <Link to="/">
          <BtnPrimary>CONTINUE SHOPPING</BtnPrimary>
        </Link>
        <BtnSuccess>BUY NOW</BtnSuccess>
      </div>
    </div>
  );
};

export default CartDetails;
