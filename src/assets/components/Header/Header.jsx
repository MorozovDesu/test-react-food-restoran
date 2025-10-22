
import Basket from '../Basket/Basket.jsx'
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton.jsx'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="menuButton"><BurgerMenuButton>Меню</BurgerMenuButton></div>
      <div className="basketButton"><Basket> Цена ₽ </Basket></div>
    </header>

  )
} 