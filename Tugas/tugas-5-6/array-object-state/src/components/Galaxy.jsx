import React from 'react'
import './Galaxy.css'

const Galaxy = (props) => {
  return (
    <div className='wrapper-galaxy'>
        <h4 className='name-galaxy'>{`(${props.id}) ${props.name}`}</h4>
        <p className='diameter-galaxy'>Diameter: {props.diameter}</p>
    </div>
  )
}

export default Galaxy