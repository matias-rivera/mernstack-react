import React from "react";
import styles from "./Buttons.module.css";

export const BtnSuccess = ({ children, ...restProps }) => {
  return (
    <button className={`${styles.button}`} {...restProps}>
      {children}
    </button>
  );
};

export const BtnPrimary = ({ children, ...restProps }) => {
  return (
    <button className={`${styles.button} ${styles.primary}`} {...restProps}>
      {children}
    </button>
  );
};
