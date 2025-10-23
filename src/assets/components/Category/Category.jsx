import { useRef, useEffect } from "react";
import Cart from "../Cart/Cart.jsx";
import { products } from "../Cart/Data.js";

export default function Categories({ selected, onAddToCart }) {
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
            style={{
              padding: "30px 0",
              borderBottom: "1px solid #ccc",
            }}
          >
            <h2>{category}</h2>
            {filteredProducts.length === 0 ? (
              <p>Нет товаров в этой категории</p>
            ) : (
              <div
                className="category-cards"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                {filteredProducts.map((product) => (
                  <Cart
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    tag={product.tag}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
