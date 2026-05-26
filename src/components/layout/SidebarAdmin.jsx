import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard, MdOutlineWrapText } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { LogOut } from 'lucide-react';
const SidebarAdmin = () => {
  return (
    <nav>
      <ul className='my-8 py-8  items-center w-[250px] bg-white rounded-lg shadow-lg '>

        <div className='mx-2 my-8  font-bold text-xs text-black'> OVERVIEW </div>

        <li className='p-4' ><NavLink to="/dashboard" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'>
          <MdOutlineDashboard /> Dashboard
        </NavLink> </li>

        <li className='p-4'><NavLink to="/mycourse" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><MdOutlineVideoSettings /> Courses </NavLink></li>

        <li className='p-4'><NavLink to="/users" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><FaUserGroup /> Users </NavLink> </li>

        <li className='p-4'><NavLink to="/payment" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><MdOutlinePayment /> Payment</NavLink> </li>

        <li className='p-4'><NavLink to="/payout" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer0'><RiMoneyDollarCircleFill /> Payout</NavLink> </li>

        <li className='p-4'><NavLink to="/word" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer0'><MdOutlineWork/> Job Board</NavLink> </li>

        <div className='mx-2 my-8  font-bold text-xs text-black'> ACCOUNT </div>

        <li className='p-4'><NavLink to="/myprofile" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><CgProfile /> My Profile</NavLink> </li>
        <li className='p-4'><NavLink to="/setting" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><IoSettingsOutline /> Setting</NavLink> </li>



        <div className='pt-4 mt-12 border-t-2 flex justify-center hover:text-red-600'><NavLink to="/setting" className=' gap-2 duration-200 flex items-center pointer'><LogOut /> Logout</NavLink> </div>

      </ul>
      
    </nav>
  )
}

export default SidebarAdmin