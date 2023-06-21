import React from 'react'
import { useState } from 'react'

const Galaxy = (props) => {
    const [isLike, setIsLike] = useState(false);
    const [isShow, setIsShow] = useState(false);
  return (
    <li>
        <div>
            <h4>{props.name}</h4>
            {isShow ? <p>{props.detail}</p> : null }
            <div>
                <button onClick={() => setIsLike(!isLike)}>{isLike ? 'Batal Suka' : 'Suka'}</button>
                <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Sembunyikan Detail' : 'Lihat Detail'}</button>
            </div>
        </div>
    </li>
  )
}

export default Galaxy