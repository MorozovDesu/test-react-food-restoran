import React, { useState } from "react";
import Button from "../Button/Button";
import "./Cart.css";

function Cart({ id, name, price, image, tag, onAddToCart }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onAddToCart({ id, name, price, image, tag });
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemoveFromCart(id);
    }
  };

  return (
    <div className="cart-wrapper" key={id}>
      {tag && <span className={`tag ${tag}`}>{tag}</span>}
      <div className="cart">
        <img src={image} alt={name} className="cart-image" />
        <h3>{name}</h3>
        <p className="price">{price} ₽</p>

        {count === 0 ? (
          <Button className="add-to-cart-btn" onClick={handleAdd}>
            +
          </Button>
        ) : (
          <div className="counter-wrapper">
            <Button className="counter-btn" onClick={handleRemove}>
              -
            </Button>
            <span className="count">{count}</span>
            <Button className="counter-btn" onClick={handleAdd}>
              +
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
