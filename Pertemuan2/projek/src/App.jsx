import React from 'react'
import Pertama from './Pertama'

const App = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        background: 'blue'
    }}>
        <Pertama/>
    </div>
  )
}

export default App