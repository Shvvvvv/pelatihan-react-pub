import React from 'react'
import { useState } from 'react'
import Tombol from './components/Tombol'
import './App.css'

const App = () => {
  // let count = 0;
  //INISIALISASI VARIABEL STATE
  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(true);
  const incrementCount = () => {
    //MENGUBAH NILAI VARIABEL STATE
    setCount(count+1)
  }
  const decrementCount = () => {
    setCount(count-1);
  }

  const handleChangeColor = () => {
    //MENGUBAH NILAI VARIABEL STATE
    setChangeColor(!changeColor)
  }
  return (
    // TERNARY BACKGROUND COLOR
    <div style={{background: changeColor ? 'skyblue' : 'pink', padding: 20}}>
      <p>Count: {count}</p>
      <div style={{margin: 5, display: 'flex', gap: 5}}>
        <Tombol onClick={incrementCount} className="tombol">Tambah Count</Tombol>
        <Tombol handleClick={decrementCount}>Kurang Count</Tombol>
      </div>
      <div>
        <Tombol handleClick={handleChangeColor}>Ganti Background</Tombol>
      </div>
    </div>
  )
}

export default App