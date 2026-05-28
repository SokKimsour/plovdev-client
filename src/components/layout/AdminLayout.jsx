import React from 'react'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import SidebarAdmin from './SidebarAdmin'
import NavbarAfterLogin from './NavbarAfterLogin'
import SidebarUser from './SidebarUser'

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
   <div className="min-h-screen w-full bg-gray-100 font-sans pt-28">
      <NavbarAfterLogin />

      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <SidebarAdmin />
        

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1440px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
