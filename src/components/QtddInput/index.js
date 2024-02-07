import React, { useState } from "react";
import styles from "./style.module.css"

export default function QtddInput() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.divInputModal}>
      <button onClick={handleDecrease}>-</button>
      <input type="text" value={quantity} readOnly />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}