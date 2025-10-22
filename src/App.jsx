import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header.jsx'
import Button from './assets/components/Button/Button.jsx'


export default function App() {
  const [mode, setMode] = useState(null); // "delivery" | "pickup" | null


   function handleClick(type) {
      setMode(type);
    }


  return (
    <>
      <Header></Header>
      <main>
        <div className='delivery'>
          <Button onClick={() => handleClick('delivery')  } active={mode === 'delivery'}>Доставка</Button>
          <Button onClick={() => handleClick('pickup')}  active={mode === 'pickup'}>Самовывоз</Button>
        </div>
        {mode === 'delivery' && (
          <div className="delivery-input">
            <h1>Доставка Иркутск</h1>
            <label className="label-street" >
              Улица:
              <input type="text" placeholder="Улица" />
            </label>
            <label className="label-house">
              Дом:
              <input type="text" placeholder="Дом" />
            </label>
          </div>
        )}
        {mode === 'pickup' && (
          <div className="pickup-info">
            <h1>Самовывоз доступен по адресу: г. Иркутск, ул. Лермонтова, 131</h1>
          </div>
        )}
        
      </main>
    </>
  )
}