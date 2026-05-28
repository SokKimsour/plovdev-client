import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const NavbarAfterLogin = () => {
  const [menuOpen, IsmenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='bg-white/50 backdrop-blur-sm flex justify-center items-center text-lg max-2xl:w-[96%] mx-auto border-1 border-amber-300/90'>
        <div className='flex justify-between items-center max-2xl:w-[96%] m-4 gap-6'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <div className='text-xl text-black'>
              <h1 className="text-2xl font-bold text-black" onClick={() => navigate('/')}>
                Plov<span className="text-yellow-400">Dev</span>
              </h1>
            </div>
          </div>
          <ul className='m-4 max-lg:hidden flex gap-6 items-center'>
            <li><NavLink to="/" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
            <li><NavLink to="/aboutus" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
            <li><NavLink to="/jobboard" className={({ isActive }) => `hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink></li>
          </ul>

          {/* Search */}
          <div className="flex w-full items-center gap-2 rounded-full border border-white/55 bg-white/65 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition focus-within:border-amber-300/90 focus-within:bg-white/80 focus-within:shadow-[0_12px_32px_rgba(245,158,11,0.14)] sm:flex-1 md:w-auto md:min-w-[13rem]">
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

          {/* User profile & navigation */}
          <div className='flex items-center gap-3 relative'>
            <div className='max-md:hidden'><NavLink to="/instructor" className='hover:text-teal-500 duration-200'>Instructor</NavLink></div>
            <div className='max-md:hidden'><NavLink to="/mylearning" className='hover:text-teal-500 duration-200'>MyLearning</NavLink></div>
            
            {/* Avatar Dropdown Trigger */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative flex items-center justify-center w-[44px] h-[44px] rounded-full border-2 border-amber-300 bg-amber-50 hover:bg-amber-100 transition-colors font-bold text-amber-700 cursor-pointer shadow-sm"
            >
              {getInitials(user?.fullName || user?.userName)}
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute right-0 top-14 z-20 w-56 rounded-2xl border border-white/35 bg-white/90 p-2 shadow-2xl backdrop-blur-xl animate-fadeIn">
                  <div className="px-3 py-2.5 border-b border-gray-100">
                    <p className="text-sm font-bold text-slate-800 truncate">{user?.fullName || "PlovDev User"}</p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{user?.email}</p>
                  </div>
                  <div className="p-1 space-y-0.5">
                    {user?.role === 'admin' ? (
                      <NavLink
                        to="/admin"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-slate-700 rounded-xl hover:bg-slate-50 transition"
                      >
                        <Settings className="w-4 h-4 text-slate-500" />
                        <span>Admin Panel</span>
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/instructor"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-slate-700 rounded-xl hover:bg-slate-50 transition"
                      >
                        <User className="w-4 h-4 text-slate-500" />
                        <span>Instructor Dashboard</span>
                      </NavLink>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-red-600 font-medium rounded-xl hover:bg-red-50/50 transition cursor-pointer text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className='lg:hidden h-[40px] w-[52px] justify-center flex items-center cursor-pointer' onClick={() => IsmenuOpen(!menuOpen)}>
              <Menu />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`bg-white/95 backdrop-blur-md absolute right-0 w-full h-svh text-lg lg:hidden duration-500 p-8 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className="space-y-4">
          <li><NavLink to="/" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `block hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Home</NavLink></li>
          <li><NavLink to="/courses" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `block hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Courses</NavLink></li>
          <li><NavLink to="/aboutus" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `block hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>About Us</NavLink></li>
          <li><NavLink to="/jobboard" onClick={() => IsmenuOpen(false)} className={({ isActive }) => `block hover:text-teal-500 duration-200 ${isActive ? 'text-[#026357]' : ''}`}>Job Board</NavLink></li>
          <li className="pt-4 border-t border-slate-100">
            <NavLink to="/instructor" onClick={() => IsmenuOpen(false)} className="block hover:text-teal-500 duration-200">Instructor</NavLink>
          </li>
          <li>
            <NavLink to="/mylearning" onClick={() => IsmenuOpen(false)} className="block hover:text-teal-500 duration-200">MyLearning</NavLink>
          </li>
          <li className="pt-2">
            <button
              onClick={() => {
                IsmenuOpen(false);
                handleLogout();
              }}
              className="w-full text-left text-red-600 font-bold hover:text-red-700 py-2"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarAfterLogin
