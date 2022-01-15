import React from "react";
import ShoppingCart from "./ShoppingCart";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.logo}>E-commerce</div>
      </Link>
      <ShoppingCart />
    </header>
  );
};

export default Header;
