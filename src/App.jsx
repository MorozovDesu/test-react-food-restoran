import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header.jsx";
import Button from "./assets/components/Button/Button.jsx";
import CategoryMenu from "./assets/components/CategoryMenu/CategoryMenu.jsx";
import Categories from "./assets/components/Category/Category.jsx";

export default function App() {
  const [mode, setMode] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Добавление в корзину
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      // ищем, есть ли товар уже в корзине
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // если есть, увеличиваем количество
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // если нет, добавляем с count = 1
        return [...prev, { ...product, count: 1 }];
      }
    });
  };

  // Уменьшение количества
  const handleRemoveFromCart = (productId) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) =>
            item.id === productId ? { ...item, count: item.count - 1 } : item
          )
          .filter((item) => item.count > 0) // удаляем, если count = 0
    );
  };

  // Сумма всех товаров
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  function handleClick(type) {
    setMode(type);
  }

  return (
    <>
      <Header totalPrice={totalPrice} /> 
      <main>
        <div className="delivery">
          <Button
            onClick={() => handleClick("delivery")}
            active={mode === "delivery"}
          >
            Доставка
          </Button>
          <Button
            onClick={() => handleClick("pickup")}
            active={mode === "pickup"}
          >
            Самовывоз
          </Button>
        </div>

        {mode === "delivery" && (
          <div className="delivery-input">
            <h1>Доставка Иркутск</h1>
            <label className="label-street">
              Улица:
              <input type="text" placeholder="Улица" />
            </label>
            <label className="label-house">
              Дом:
              <input type="text" placeholder="Дом" />
            </label>
          </div>
        )}

        {mode === "pickup" && (
          <div className="pickup-info">
            <h1>
              Самовывоз доступен по адресу: г. Иркутск, ул. Лермонтова, 131
            </h1>
          </div>
        )}
        <div>{totalPrice}</div>

        <CategoryMenu
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <Categories
          selected={selectedCategory}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </main>
    </>
  );
}
