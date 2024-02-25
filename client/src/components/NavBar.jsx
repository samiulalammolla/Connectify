import React from 'react'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
function NavBar() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center p-4 max-w-6xl mx-auto'>
        <Link to='/'>
        <h1 className='font-bold text-md sm:text-xl italic'>Connectify</h1>
        </Link>
        <form className='bg-slate-100  rounded-md flex justify-between items-center px-2'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-32 sm:w-64 p-1 ' />
          <FaSearch className='text-slate-700'/>
        </form>
        <ul className='flex gap-4 font-semibold text-slate-700 justify-center items-center'>
          <Link to='/'>
          <li className='hidden sm:inline hover:underline'>Home</li>
          </Link>
          <Link to='/profile'>
          <li className='hidden sm:inline hover:underline'>Profile</li>
          </Link>
          <Link to='/sign-in'>
          <li className='text-yellow-50 sm:inline hover:bg-blue-400 bg-blue-500 py-1 px-2 rounded-md '>Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default NavBar