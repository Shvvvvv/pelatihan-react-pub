import React from 'react'

const CardProduct = (props) => {
    // const showDetailProduct = () => {
    //     alert(`Product ${props.productName} dengan harga ${props.productPrice} merupakan product dengan kualitas terbaik.`)
    // }

    const styleCardProduct = {
        background: 'rgb(176, 0, 0)',
        padding: 10,
        borderRadius: 5,
        width: 150,
        height: 200,
        color: 'white'
    }

  return (
    <div onClick={props.showDetail} style={styleCardProduct}>
        <img style={{
            width: '100%',
            maxHeight: '75%'
        }} src={props.urlImage} alt={props.productName} />
        <p style={{
            fontSize: 12
        }}>{props.productName}</p>
        <p>{props.productPrice}</p>
    </div>
  )
}

export default CardProduct