import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, color, size }) => {
  return (
    <div>
      <button className={`${styles[color]} ${styles[size]}`}>{children}</button>
    </div>
  );
};

export default Button;
