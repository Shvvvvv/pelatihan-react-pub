import React from 'react'

const Tombol = ({children, ...props}) => {
  return (
    <button  {...props}>{children}</button>
  )
}

export default Tombol