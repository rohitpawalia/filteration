import React from 'react'

const Button = ({handleButton, value, title}) => {
  return (
    <>
    <button
    onClick={handleButton} value={value} className='btns'>{title}</button></>
  )
}

export default Button