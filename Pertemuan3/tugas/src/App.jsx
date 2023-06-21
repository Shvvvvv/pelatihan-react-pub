import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tombol from './components/Tombol'
import ListProduct from './components/ListProduct'

const App = () => {
  // const [isShowProduct, setIsShowProduct] = useState(true)
  return (
    <>
    <Header/>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: 10,
      flexDirection: 'column',
      gap: 25
    }}>
      <ListProduct/>
    {/* <Tombol onClick={() => setIsShowProduct(!isShowProduct)} >{isShowProduct ? 'Hide' : 'Show'} List Product</Tombol>
    {isShowProduct && <ListProduct/>} */}
    </div>
    </>
  )
}

export default App