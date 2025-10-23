import { useRef, useEffect } from "react";
import Cart from "../Cart/Cart.jsx";
import { products } from "../Cart/Data.js";
import "./Category.css";

export default function Categories({ selected, onAddToCart, onRemoveFromCart, cartItems }) {
  const categories = [
    "Бургеры",
    "Твистеры",
    "Курица",
    "Баскеты",
    "Снеки",
    "Соусы",
    "Напитки",
    "Кофе и чай",
    "Десерты",
    "Хиты по 50",
    "Хиты по 100",
    "Хиты по 250",
    "Хиты по 350",
    "Хиты по 500",
  ];

  const refs = useRef([]);
  refs.current = categories.map((_, i) => refs.current[i] ?? null);

  useEffect(() => {
    const index = categories.indexOf(selected);
    if (index !== -1 && refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

  return (
    <div style={{ padding: "20px 0" }}>
      {categories.map((category, i) => {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <div
            key={category}
            ref={(el) => (refs.current[i] = el)}
            className="category-section"
          >
            <h2>{category}</h2>
            {filteredProducts.length === 0 ? (
              <p className="no-products">Нет товаров в этой категории</p>
            ) : (
              <div className="category-cards">
                {filteredProducts.map((product) => {
                  const cartItem = cartItems.find(item => item.id === product.id);
                  const count = cartItem ? cartItem.count : 0;
                  
                  return (
                    <Cart
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      tag={product.tag}
                      count={count}
                      onAddToCart={onAddToCart}
                      onRemoveFromCart={onRemoveFromCart}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
