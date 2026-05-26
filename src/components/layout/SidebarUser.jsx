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
  return (
    <nav>
      <ul className='m-8 py-8  items-center w-[250px] bg-white rounded-lg shadow-lg '>

        <div className='mx-2 my-8 font-bold text-xs text-black'> OVERVIEW </div>

        <li className='p-4' ><NavLink to="/dashboard" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'>
          <MdOutlineDashboard /> Dashboard
        </NavLink> </li>

        <li className='p-4'><NavLink to="/mycourse" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><MdOutlineVideoSettings /> My Course</NavLink></li>

        <li className='p-4'><NavLink to="/mylearning" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><LiaLaptopCodeSolid /> My Learning</NavLink></li>
        <li className='p-4'><NavLink to="/student" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><PiStudent /> Student</NavLink> </li>

        <div className='mx-2 my-8  font-bold text-xs text-black'> CONTENT </div>


        <li className='p-4'><NavLink to="/createcourse" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><FaPlus /> Create Course
        </NavLink> </li>
        <li className='p-4'><NavLink to="/q&a" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><MdOutlineQuestionAnswer /> Q & A </NavLink> </li>
        <li className='p-4'><NavLink to="/payment" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><MdOutlinePayment /> Payment</NavLink> </li>
        <li className='p-4'><NavLink to="/payout" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer0'><RiMoneyDollarCircleFill /> Payout</NavLink> </li>

        <div className='mx-2 my-8  font-bold text-xs text-black'> ACCOUNT </div>

        <li className='p-4'><NavLink to="/myprofile" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><CgProfile /> My Profile</NavLink> </li>
        <li className='p-4'><NavLink to="/setting" className='hover:text-teal-500 gap-2 duration-200 flex items-center pointer'><IoSettingsOutline /> Setting</NavLink> </li>


        <div className='pt-4 mt-12 border-t-2 flex justify-center hover:text-red-600'><NavLink to="/setting" className=' gap-2 duration-200 flex items-center pointer'><LogOut /> Logout</NavLink> </div>

      </ul>

      
    </nav>
  )
}

export default SidebarUser