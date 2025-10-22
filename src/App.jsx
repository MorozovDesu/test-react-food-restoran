import { useState } from 'react'

import './App.css'
import Header from './assets/components/Header/Header.jsx'
import Button from './assets/components/Button/Button.jsx'


function App() {
   function handleClick() {
        console.log('Button clicked');
    }


  return (
    <>
      <Header>header</Header>
      <main>
        <div className='delivery'>
          <Button onClick={handleClick}>Доставка</Button>
          <Button onClick={handleClick}>Самовывоз</Button>
        </div>

      </main>
    </>
  )
}

export default App
