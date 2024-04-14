
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Nav = ({handleChange, query}) => {
  return (
    <nav className='bg-white w-full border-b-2 flex m-0 p-5 justify-between'>
      <input
       type="text"
       className="bg-gray-50 border h-10 border-gray-300
        text-gray-900 text-sm rounded-lg 
         focus:ring-blue-500 focus:border-blue-500 block p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500" 
       placeholder="Enter your search"
       onChange={handleChange}
       value={query} />
     
      <div className="flex flex-col items-center md:flex-row  space-y-3 md:space-y-0 md:space-x-3">
        <a href="#">
          <FiHeart className='nav-icons' />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  )
}

export default Nav