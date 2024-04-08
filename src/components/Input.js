import React from 'react'

const Input = ({handleRadio, value, title, name, color}) => {
  return (
    <div><label className='sidebar-label-container'>
    <input type='radio' name={name} value={value}
    onChange={handleRadio}/>
    <span className='checkmark' style={{backgroundColor: color}}></span>{title}
  </label></div>
  )
}

export default Input