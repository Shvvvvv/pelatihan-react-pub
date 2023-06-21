import React from 'react'

const Header = () => {
  let count = 1;
  return (
    <div style={{
        background: 'rgb(176, 0, 0)',
        padding: 15,
        color: 'white'
    }}>
        <h1>Ari Sandi Shefa Maldini</h1>
        <p style={{marginLeft: 250, fontWeight: 600, fontSize: 50}}>{count}</p>
    </div>
  )
}

export default Header