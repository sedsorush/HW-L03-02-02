/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Button = (props) => {
  return (
    <div className='btn'>
        <button 
            className={props.className}
            onClick={props.onClick}>
                {props.title}
        </button>
    </div>
  )
}

export default Button