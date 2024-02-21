import React from 'react'
import './style.css';

export const Button = ({symbol ,color ,handleClick})  => {
  return (
    <div
    onClick={()=>handleClick(symbol)}
     className='button-wraper' style={{backgroundColor:color}}>
        {symbol}
    </div>
  )
}
