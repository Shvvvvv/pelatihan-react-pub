import React from 'react'
import './Header.css'
import {GiMilkCarton} from 'react-icons/gi'

const Header = () => {
  return (
    <header>
        <div className='header'>
            <GiMilkCarton/> Milky Way
        </div>
    </header>
  )
}

export default Header