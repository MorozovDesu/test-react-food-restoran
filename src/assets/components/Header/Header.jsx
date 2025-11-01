import Basket from "../Basket/Basket.jsx";
import BurgerMenuButton from "../BurgerMenuButton/BurgerMenuButton.jsx";
import Button from "../Button/Button.jsx";
import "./Header.css";

export default function Header({ totalPrice, onOrder }) {
  return (
    <header className="header">
      <div className="menuButton">
        <BurgerMenuButton>Меню</BurgerMenuButton>
      </div>

      <div className="basketButton">
        <Basket>{totalPrice || 0} ₽</Basket>
        {totalPrice > 0 && (
          <div className="order-button">
            <Button onClick={onOrder}>Заказать</Button>
          </div>
        )}
      </div>
    </header>
  );
}
