import React from 'react'

const Tombol = (props) => {
  return (
    <button onClick={props.onClick}>Hitung{ props.hitung}</button>
    )
}

export default Tombol