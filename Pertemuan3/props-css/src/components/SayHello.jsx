import React from 'react'
import './SayHello.css'

const styleTitleHello = {
    backgroundColor: 'rgb(0, 157, 255)',
    borderRadius: 10,
    padding: 5 
}

const SayHello = (props) => {
  return (
    // <h1 className='title-hello'>Halo {props.nama}</h1>
    // <h1 style={{
    //     backgroundColor: 'rgb(0, 157, 255)',
    //     borderRadius: 10,
    //     padding: 5
    // }}>Halo {props.nama}</h1>
    <h1 style={styleTitleHello}>Halo {props.nama}</h1>
  )
}

export default SayHello