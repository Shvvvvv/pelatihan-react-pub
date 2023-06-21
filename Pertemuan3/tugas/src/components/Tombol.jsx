import React from 'react'

const Tombol = (props) => {
  return (
    <button onClick={props.onClick} style={{
        background: 'rgb(176, 0, 0)',
        border: 'none',
        padding: 5,
        borderRadius: 5,
        color: 'white'
    }}>{props.children}</button>
  )
}

export default Tombol