import React from 'react'
import './style.css'

export const Input = ({text,result}) => {
  return (
    <div className='input-wraper'>
        <div className='result'>
          <h1>{result}</h1>
        </div>
        <div className='text'>
          <h3>{text}</h3>   
        </div>
    </div>
  )
}
