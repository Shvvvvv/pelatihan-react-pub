import React from 'react'
import './ButtonComponent.css'

const ButtonComponent = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default ButtonComponent