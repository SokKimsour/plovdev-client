import React from 'react'
import { Users, GraduationCap, UserX, Search, SlidersHorizontal, Plus, ArrowUpRight, User, Pencil, Trash2 } from 'lucide-react'

const AdminUsersPage = () => {
  const stats = [
    { title: 'Total User', value: '500k', icon: <Users className="h-6 w-6 text-slate-800" /> },
    { title: 'Total Student', value: '200K', icon: <GraduationCap className="h-6 w-6 text-slate-800" /> },
    { title: 'Total Instructor', value: '1100', icon: <Users className="h-6 w-6 text-slate-800" /> },
    { title: 'Block User', value: '20', icon: <UserX className="h-6 w-6 text-red-500" />, isAlert: true },
  ]

  const mockUsers = [
    { id: 1, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Instructor', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 2, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 3, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 4, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 5, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 6, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 7, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 8, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 9, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
    { id: 10, name: 'Heng chupapi', email: 'hengheng168@gmail.com', role: 'Student', date: 'Tue 28 Apr 2026', status: 'Active' },
  ]

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-slate-900">User List</h1>
        
        {/* Action controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search user..."
              className="bg-white border border-gray-300 text-slate-800 text-xs rounded-lg pl-9 pr-4 py-2 w-full sm:w-60 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          {/* Filter button */}
          <button className="p-2 border border-gray-300 bg-white rounded-lg text-slate-600 hover:bg-slate-50 duration-200">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Grid Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between h-[130px]">
            <div className="flex flex-col">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.title}</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="pr-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-slate-900 leading-none">{stat.value}</h3>
              </div>
            </div>
            {/* Trend */}
            <div className="flex items-center gap-1 text-[10px] text-slate-500">
              <span className="flex items-center font-bold text-teal-600">
                12%
                <ArrowUpRight className="h-3 w-3" />
              </span>
              <span>From last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Users Table Container (Wrapped in Gold-Yellow Border Card) */}
      <div className="border border-amber-300 rounded-xl bg-white shadow-sm overflow-hidden p-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">No</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Email</th>
                <th className="py-4 px-6">Role</th>
                <th className="py-4 px-6">Join On</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-slate-400">{user.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {/* User Avatar */}
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-600 shrink-0">
                        <User size={14} />
                      </div>
                      <span className="font-bold text-slate-800">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500 font-normal">{user.email}</td>
                  <td className="py-4 px-6 text-slate-500">{user.role}</td>
                  <td className="py-4 px-6 text-slate-500">{user.date}</td>
                  <td className="py-4 px-6 text-green-500 font-bold">{user.status}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3 text-slate-500">
                      <button className="hover:text-cyan-500 duration-200">
                        <Pencil size={15} />
                      </button>
                      <button className="hover:text-red-500 text-red-500 duration-200">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-slate-100 bg-slate-50/30 text-xs rounded-b-xl">
          <span className="text-slate-500">Showing 1 to 10 of 10 entries</span>
          <div className="flex items-center gap-2 font-semibold text-slate-650">
            <span className="cursor-pointer text-slate-900 border border-slate-300 bg-white rounded px-2 py-0.5">1</span>
            <span className="cursor-pointer hover:text-cyan-500 px-1">2</span>
            <span className="cursor-pointer hover:text-cyan-500 px-1">3</span>
            <span className="text-slate-400">...</span>
            <span className="cursor-pointer hover:text-cyan-500 px-1">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUsersPage
