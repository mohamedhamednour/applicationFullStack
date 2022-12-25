import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    
<nav className="bg-white flex px-2 py-2.5 dark:bg-gray-900 fixed w-full  top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> <Link to="/">CRUD</Link> 
  </a>
  <Link
                        to="/addItem"
                        className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4  rounded"
                      >
                        Create Item
                      </Link>
                    


  </div>

</nav>
    
    </>
  )
}

export default NavBar