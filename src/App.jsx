import { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header.jsx";
import Button from "./assets/components/Button/Button.jsx";
import CategoryMenu from "./assets/components/CategoryMenu/CategoryMenu.jsx";
import Categories from "./assets/components/Category/Category.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";

export default function App() {
  const [mode, setMode] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [serverMessage, setServerMessage] = useState("");

  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  //  Проверка связи с backend
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("Ответ от сервера:", data);
        setServerMessage(data.message);
      })
      .catch((err) => console.error("Ошибка при обращении к backend:", err));
  }, []);

  // Добавление в корзину
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
  };

  // Уменьшение количества
  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  function handleClick(type) {
    setMode(type);
  }

  //  Новый код: функция для отправки заказа
  async function handleSendOrder() {
    try {
      //  Формируем тело запроса
      const orderData = {
        items: cartItems,
        total: totalPrice,
        deliveryMode: mode,
      };

      // Если выбран "delivery", добавляем адрес
      if (mode === "delivery") {
        orderData.address = {
          street,
          house,
        };
      }

      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      console.log("Ответ от сервера:", data);

      alert(data.message || "Заказ успешно оформлен!");
      setCartItems([]);
      setStreet("");
      setHouse("");
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Не удалось отправить заказ на сервер.");
    }
  }

  return (
    <>
      <Header totalPrice={totalPrice} onOrder={handleSendOrder} />

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
              <input
                type="text"
                placeholder="Улица"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>
            <label className="label-house">
              Дом:
              <input
                type="text"
                placeholder="Дом"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
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

        <CategoryMenu
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <Categories
          selected={selectedCategory}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        />
      </main>

      <Footer />
    </>
  );
}
