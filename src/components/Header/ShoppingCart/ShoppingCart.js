import React, { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../../../app/db/db";
import ShoppingCartItem from "./ShoppingCartItem";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const [productsCart, setProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price * currentProduct.items;
    }, 0);
    setTotalPrice(total);
  };

  const cartIsNotEmpty = productsCart.length > 0;

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray();
    setProductsCart(productsDB);
  }, []);

  useEffect(() => {
    if (cartIsNotEmpty) {
      getTotalPrice();
    }
  }, [productsCart]);

  return (
    <div
      className={styles.cart}
      style={{ backgroundColor: `${cartIsNotEmpty ? "#477ae7" : "#2452b4"}` }}
    >
      {cartIsNotEmpty
        ? ` Shopping Cart (${productsCart.length})`
        : "No items in your Cart"}
      <div className={styles.items}>
        {productsCart?.map((product) => {
          return <ShoppingCartItem key={product.id} product={product} />;
        })}
        {cartIsNotEmpty && (
          <div className={styles.total}>
            <h4>TOTAL</h4>
            <span>${totalPrice.toFixed(2)} </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
