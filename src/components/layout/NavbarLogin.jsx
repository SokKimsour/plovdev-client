import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const NavbarLogin = () => {
  const [menuOpen, IsmenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className='fixed top-0 left-0 w-full   z-50  pt-4 '>
      <div className='bg-white/50 backdrop-blur-sm flex justify-center items-center text-lg   max-2xl:w-[96%] mx-auto rounded-3xl border-1 border-amber-300/90
 '>

        <div className=' flex justify-between items-center  max-2xl:w-[96%] m-4 gap-6 '>
          <div className='flex items-center gap-2 cursor-pointer '>
            
            <div className=' text-xl text black '><h1 className="text-2xl font-bold text-black">
            Plov<span className="text-yellow-400">Dev</span>
          </h1></div>
          </div>
          <ul className='m-4 max-lg:hidden flex gap-6 items-center '>
            
            <li className=''><NavLink to="/" className='hover:text-teal-500  duration-200'>Home</NavLink> </li>
            <li className=''><NavLink to="/courses"  className='hover:text-teal-500  duration-200'>Courses</NavLink></li>
            <li className=''><NavLink to="/aboutus"  className='hover:text-teal-500  duration-200'>About Us</NavLink></li>
            <li className=''><NavLink to="/jobboard"  className='hover:text-teal-500  duration-200'>Job Board</NavLink> </li>
  
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
            <div className=' max-sm:hidden'><NavLink to="/login" className='hover:text-teal-500  duration-200'>Sign In</NavLink></div>
            <div className=' max-sm:hidden'><NavLink to="/signup" className='hover:text-white text-white  bg-teal-400 rounded-md active:text-black p-2 duration-200'>
            Signup Free</NavLink></div>
            
            <div className='lg:hidden h-[40px] w-[52px] rounded-md  border-2 border-solid border-gray-200 ' onClick={()=>IsmenuOpen(!menuOpen)}> 
            </div>

          </div>
        </div>
      </div>

      <div className ={`bg-white/50 backdrop-blur-sm absolute  right-0   w-full h-svh bg-white  text-lg lg:hidden duration-500 p-8 ${menuOpen ? 'opacity-100' : 'opacity-0'}  `}> 
        <ul >
            
            <li ><NavLink to="/"  className='hover:text-teal-500  duration-200'>Home</NavLink> </li>
            <li ><NavLink to="/courses"  className='hover:text-teal-500  duration-200'>Courses</NavLink></li>
            <li className=''><NavLink to="/aboutus"  className='hover:text-teal-500  duration-200'>About Us</NavLink></li>
            <li className=''><NavLink to="/jobboard"  className='hover:text-teal-500  duration-200'>Job Board</NavLink> </li>
  
          </ul>
        </div>

    </nav>
    
//  <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
//       <div className="mx-auto max-w-[1200px]">
//         <nav
//           className={`rounded-[28px] px-6 py-3 text-white backdrop-blur-2xl transition-all duration-300 ${
//             isScrolled
//               ? "border border-white/20 bg-white/10 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
//               : "border border-white/45 bg-white/40 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
//           }`}
//         >
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           {/* Logo */}
//             <ul className="hidden gap-6 text-slate-800 md:flex">
//               <li className='cursor-pointer hover:text-slate-600'><NavLink to="/">Home</NavLink> </li>
//               <li className='cursor-pointer hover:text-slate-600'><NavLink to="/courses">Courses</NavLink></li>
//              <li className='cursor-pointer hover:text-slate-600'><NavLink to="/aboutus">About Us</NavLink></li>
//              <li className='cursor-pointer hover:text-slate-600'><NavLink to="/">Job Board</NavLink> </li>
//             </ul>

//             {/* Desktop Menu */}
//             <form className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:w-auto md:flex-nowrap md:items-center">
//               <div className="group flex w-full items-center gap-2 rounded-full border border-white/55 bg-white/65 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition focus-within:border-amber-300/90 focus-within:bg-white/80 focus-within:shadow-[0_12px_32px_rgba(245,158,11,0.14)] sm:flex-1 md:w-auto md:min-w-[13rem]">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-4 w-4 text-slate-500 transition group-focus-within:text-amber-600"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle cx="11" cy="11" r="7" />
//                   <path d="M20 20l-3.5-3.5" />
//                 </svg>
//                 <input
//                   type="text"
//                   placeholder="Search courses"
//                   className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:w-40"
//                 />
//               </div>
//               <div className="grid w-full grid-cols-2 gap-3 sm:w-auto">
//                 <button
//                   type="button"
//                   className="rounded-full border border-slate-300/80 bg-white/55 px-4 py-2 text-sm font-medium text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-md transition-colors duration-300 ease-out hover:border-slate-400 hover:bg-white/80"
//                 >
//                   Sign In
//                 </button>
//                 <button
//                   type="button"
//                   className="rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-200 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_28px_rgba(245,158,11,0.22)] transition-colors duration-300 ease-out hover:from-amber-400 hover:via-yellow-300 hover:to-orange-300"
//                 >
//                   Sign Up for free
//                 </button>
//               </div>
//             </form>

//             {/* Mobile Button */}
//           </div>
//         </nav>
//       </div>
//     </header>
  )
}

export default NavbarLogin