import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react';
const NavbarAfterLogin = () => {
  const [menuOpen, IsmenuOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 w-full   z-50  '>
      <div className='bg-white/50 backdrop-blur-sm flex justify-center items-center text-lg   max-2xl:w-[96%] mx-auto border-1 border-amber-300/90
 '>

        <div className=' flex justify-between items-center  max-2xl:w-[96%] m-4 gap-6 '>
          <div className='flex items-center gap-2 cursor-pointer '>
            
            <div className=' text-xl text black '><h1 className="text-2xl font-bold text-black">
            Plov<span className="text-yellow-400">Dev</span>
          </h1></div>
          </div>
          <ul className='m-4 max-lg:hidden flex gap-6 items-center '>
            
            <li className=''><NavLink to="/" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink> </li>
            <li className=''><NavLink to="/courses"  className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
            <li className=''><NavLink to="/aboutus"  className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
            <li className=''><NavLink to="/jobboard"  className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink> </li>
  
          </ul>
          {/* search  */}
          <div className=" flex w-full items-center gap-2 rounded-full border  border-white/55 bg-white/65 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition focus-within:border-amber-300/90 focus-within:bg-white/80 focus-within:shadow-[0_12px_32px_rgba(245,158,11,0.14)] sm:flex-1 md:w-auto md:min-w-[13rem]">
                 <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-slate-500 transition group-focus-within:text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  type="text"
                  placeholder="Search courses"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:w-40"
                />
              </div>
          
          <div className='flex items-center gap-2'>
            <div className=' max-md:hidden'><NavLink to="/instructor" className='hover:text-teal-500  duration-200'>Instructor</NavLink></div>
            <div className=' max-md:hidden'><NavLink to="/mylearning" className='hover:text-teal-500  duration-200'>MyLearning</NavLink></div>
            <div className=' w-[44px] h-[44px] rounded-full border-2 border-solid border-gray-200 max-sm:hidden'></div>
            <div className='lg:hidden h-[40px] w-[52px]  justify-center flex items-center' onClick={()=>IsmenuOpen(!menuOpen)}>  <Menu />
            </div>

          </div>
        </div>
      </div>

      <div className ={`bg-white/50 backdrop-blur-sm absolute  right-0   w-full h-svh bg-white  text-lg lg:hidden duration-500 p-8 ${menuOpen ? 'opacity-100' : 'opacity-0'}  `}> 
        <ul >
            
            <li ><NavLink to="/" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink> </li>
            <li ><NavLink to="/courses" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
            <li className=''><NavLink to="/aboutus" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
            <li className=''><NavLink to="/jobboard" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink> </li>

            <div className=' md:hidden mt-12'><NavLink to="/instructor" className='hover:text-teal-500  duration-200'>Instructor</NavLink></div>
            <div className=' md:hidden mt-4'><NavLink to="/mylearning" className='hover:text-teal-500  duration-200'>MyLearning</NavLink></div>
  
          </ul>
        </div>

    </nav>

  )
}

export default NavbarAfterLogin
