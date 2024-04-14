import React from 'react'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import Category from './Category/Category'

const Sidebar = ({handleRadio}) => {
  return (
    <nav className='flex flex-col ml-0 pl-4 border-r-2 justify-between'>
    
      
        <h1 className='items-center p-5 text-4xl'>🛒</h1>
        <Category handleRadio={handleRadio}/>
        <Price handleRadio={handleRadio} />
        <Colors handleRadio={handleRadio} />
        
        </nav>
  )
}

export default Sidebar