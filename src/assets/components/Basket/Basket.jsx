
import './Basket.css'

export default function Basket({children}) {
  return (
    <div className="basket">
      {children}
      <img src="public\Basket.png" alt="Корзина" className="basket-icon" />
    </div>
  )
} 