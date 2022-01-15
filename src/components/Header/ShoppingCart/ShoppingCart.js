import React, { useEffect, useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import styles from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";
import {
  getTotalPrice,
  useCart,
} from "../../../app/services/productsCartServices";

const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const productsCart = useCart();

  const cartIsNotEmpty = productsCart.length > 0;

  useEffect(() => {
    if (cartIsNotEmpty) {
      setTotalPrice(getTotalPrice(productsCart));
    }
  }, [productsCart]);

  return (
    <div
      className={styles.cart}
      style={{ backgroundColor: `${cartIsNotEmpty ? "#477ae7" : "#2452b4"}` }}
    >
      {cartIsNotEmpty ? (
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <h4>SHOPPING CART ({productsCart.length})</h4>
        </Link>
      ) : (
        "No Items in Shopping Cart"
      )}
      <div className={styles.items}>
        {productsCart?.map((product) => {
          return <ShoppingCartItem key={product.id} product={product} />;
        })}
        {cartIsNotEmpty && (
          <>
            <div className={styles.total}>
              <h4>TOTAL</h4>
              <span>${totalPrice.toFixed(2)} </span>
            </div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className={styles.carrito}>
                <h4>SHOPPING CART</h4>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
