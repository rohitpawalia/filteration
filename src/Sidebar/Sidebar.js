import React from 'react'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import Category from './Category/Category'
import "./Sidebar.css"
const Sidebar = ({handleRadio}) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleRadio={handleRadio}/>
        <Price handleRadio={handleRadio} />
        <Colors handleRadio={handleRadio} />
      </section>
    </>
  )
}

export default Sidebar