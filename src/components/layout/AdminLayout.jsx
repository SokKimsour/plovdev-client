import React from 'react'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import SidebarAdmin from './SidebarAdmin'
import NavbarAfterLogin from './NavbarAfterLogin'

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#E5E7EB] flex flex-col font-sans overflow-hidden">
      {/* Standard User Header */}
      <NavbarAfterLogin />

      {/* Main Container with top padding to clear fixed header */}
      <div className="flex-1 flex overflow-hidden pt-20">
        {/* Left Sidebar */}
        <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col shrink-0">
          <SidebarAdmin />
        </aside>

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
