import React from "react";
import ShoppingCart from "./ShoppingCart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>E-commerce</div>
      <ShoppingCart />
    </header>
  );
};

export default Header;
