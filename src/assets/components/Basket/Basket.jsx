import './Basket.css'

export default function Basket({ children }) {
  return (
    <div className="basket">
      <img src="/Basket.png" alt="Корзина" className="basket-icon" />
      <span className="basket-total">{children}</span>
    </div>
  );
}
