import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { LogOut } from 'lucide-react';

const SidebarUser = () => {
  const activeStyle = 'text-teal-500 font-bold gap-2 duration-200 flex items-center pointer';
  const inactiveStyle = 'hover:text-teal-500 gap-2 duration-200 flex items-center pointer';

  return (
    <nav>
      <ul className='my-8  items-center w-[250px] rounded-lg '>

        <div className='mx-2 my-8 font-bold text-xs text-black'> OVERVIEW </div>

        <li className='p-4' >
          <NavLink to="/instructor" end className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlineDashboard /> Dashboard
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/instructor/mycourse" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlineVideoSettings /> My Course
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/instructor/mylearning" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <LiaLaptopCodeSolid /> My Learning
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/instructor/student" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <PiStudent /> Student
          </NavLink>
        </li>

        <div className='mx-2 my-8  font-bold text-xs text-black'> CONTENT </div>

        <li className='p-4'>
          <NavLink to="/instructor/createcourse" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <FaPlus /> Create Course
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/instructor/q&a" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlineQuestionAnswer /> Q & A
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/instructor/payment" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <MdOutlinePayment /> Payment
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/instructor/payout" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <RiMoneyDollarCircleFill /> Payout
          </NavLink>
        </li>

        <div className='mx-2 my-8  font-bold text-xs text-black'> ACCOUNT </div>

        <li className='p-4'>
          <NavLink to="/instructor/myprofile" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <CgProfile /> My Profile
          </NavLink>
        </li>

        <li className='p-4'>
          <NavLink to="/instructor/setting" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
            <IoSettingsOutline /> Setting
          </NavLink>
        </li>

        <div className='pt-8 mt-12 border-t-2 flex px-4 hover:text-red-600'>
          <NavLink to="/setting" className=' gap-2 duration-200 flex items-center pointer'>
            <LogOut /> Logout
          </NavLink>
        </div>

      </ul>
    </nav>
  )
}

export default SidebarUser