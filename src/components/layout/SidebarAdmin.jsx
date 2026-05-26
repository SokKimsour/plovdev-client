import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard, MdOutlineVideoSettings, MdOutlinePayment, MdOutlineWork } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { LogOut } from 'lucide-react';

const SidebarAdmin = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 mx-4 my-1 rounded-md text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-[#00BCD4] text-white shadow-sm font-semibold'
        : 'text-[#4A5568] hover:text-[#00BCD4] hover:bg-slate-50'
    }`;

  return (
    <div className="flex flex-col h-full bg-white justify-between py-6">
      <div>
        {/* OVERVIEW SECTION */}
        <div className="px-6 mb-2 text-[10px] font-bold text-[#A0AEC0] tracking-wider uppercase">
          Overview
        </div>
        <ul className="space-y-1">
          <li>
            <NavLink to="/admin/dashboard" className={linkClass}>
              <MdOutlineDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/courses" className={linkClass}>
              <MdOutlineVideoSettings size={20} />
              <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className={linkClass}>
              <FaUserGroup size={18} />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/payments" className={linkClass}>
              <MdOutlinePayment size={20} />
              <span>Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/payouts" className={linkClass}>
              <RiMoneyDollarCircleFill size={20} />
              <span>Payouts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/jobs" className={linkClass}>
              <MdOutlineWork size={20} />
              <span>Job Board</span>
            </NavLink>
          </li>
        </ul>

        {/* ACCOUNT SECTION */}
        <div className="px-6 mt-8 mb-2 text-[10px] font-bold text-[#A0AEC0] tracking-wider uppercase">
          Account
        </div>
        <ul className="space-y-1">
          <li>
            <NavLink to="/admin/profile" className={linkClass}>
              <CgProfile size={20} />
              <span>My Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/settings" className={linkClass}>
              <IoSettingsOutline size={20} />
              <span>Setting</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* LOGOUT BUTTON */}
      <div className="border-t border-gray-100 pt-4 flex flex-col items-stretch">
        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-2.5 mx-4 rounded-md text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  )
}

export default SidebarAdmin