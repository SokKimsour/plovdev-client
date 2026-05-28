import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard, MdOutlineVideoSettings, MdOutlinePayment, MdOutlineWork } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { LogOut } from 'lucide-react';

const SidebarAdmin = () => {
  const activeStyle = 'text-teal-500 font-bold gap-2 duration-200 flex items-center pointer';
  const inactiveStyle = 'hover:text-teal-500 gap-2 duration-200 flex items-center pointer';

  return (
    <nav>
      <ul className='my-8 items-center w-[250px] rounded-lg '>

        <div className='mx-2 my-8 font-bold text-xs text-black'> OVERVIEW </div>

        <li className='p-4' >
          <NavLink to="/admin/dashboard" end className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlineDashboard /> Dashboard
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/admin/courses" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlineVideoSettings /> Courses
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/admin/users" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <FaUserGroup /> Users
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/admin/payments" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlinePayment /> Payments
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/admin/payouts" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <RiMoneyDollarCircleFill /> Payouts
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/admin/jobs" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlineWork /> Job Board
          </NavLink>
        </li>

        <div className='mx-2 my-8 font-bold text-xs text-black'> ACCOUNT </div>

        <li className='p-4'>
          <NavLink to="/admin/profile" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <CgProfile /> My Profile
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/admin/settings" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <IoSettingsOutline /> Setting
          </NavLink>
        </li>

        <div className='pt-8 mt-12 border-t-2 flex px-4 hover:text-red-600'>
          <NavLink to="/login" className=' gap-2 duration-200 flex items-center pointer'>
            <LogOut /> Logout
          </NavLink>
        </div>

      </ul>
    </nav>
  )
}

export default SidebarAdmin
