import React, { useState } from 'react'
import { Play, Wifi, Clock, Trash2, Search, SlidersHorizontal, Plus, ArrowUpRight, User } from 'lucide-react'

const AdminCoursesPage = () => {
  const stats = [
    { title: 'Total Courses', value: '500k', icon: <Play className="h-6 w-6 text-slate-800" /> },
    { title: 'Publish Courses', value: '200K', icon: <Wifi className="h-6 w-6 text-slate-800" /> },
    { title: 'Pending Courses', value: '5', icon: <Clock className="h-6 w-6 text-slate-800" /> },
    { title: 'Archived Courses', value: '8', icon: <Trash2 className="h-6 w-6 text-red-500" />, isAlert: true },
  ]

  const mockCourses = [
    { id: 1, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Pending' },
    { id: 2, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Pending' },
    { id: 3, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Pending' },
    { id: 4, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Pending' },
    { id: 5, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Pending' },
    { id: 6, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Publish' },
    { id: 7, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Publish' },
    { id: 8, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Publish' },
    { id: 9, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Publish' },
    { id: 10, title: 'Complete Python Bootcamp: Zero to Hero', category: 'Python', instructor: 'Heng Alexander', email: 'hengheng168@gmail.com', price: '$14.99', students: 1200, date: 'Tue 28 Apr 2026', status: 'Publish' },
  ]

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-slate-900">Admin Course</h1>
        
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
          {/* Add Course button */}
          <button className="flex items-center gap-2 bg-black hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg duration-200 shadow-sm">
            <span className="bg-white text-black rounded-full p-0.5 flex items-center justify-center">
              <Plus size={12} className="stroke-[3]" />
            </span>
            Add Course
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

      {/* Courses Table Container */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">No</th>
                <th className="py-4 px-6">Course</th>
                <th className="py-4 px-6">Instructor</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Student</th>
                <th className="py-4 px-6">Created at</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {mockCourses.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-slate-400">{course.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {/* Yellow Course Thumbnail */}
                      <div className="w-16 h-10 bg-amber-400 rounded-md shrink-0"></div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">{course.title}</span>
                        <span className="text-[10px] font-bold text-orange-500 uppercase mt-0.5">{course.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500 text-[10px]">
                        <User size={12} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 leading-tight">{course.instructor}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{course.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-bold">{course.price}</td>
                  <td className="py-4 px-6">{course.students}</td>
                  <td className="py-4 px-6 text-slate-500">{course.date}</td>
                  <td className="py-4 px-6">
                    <span className={`font-bold ${course.status === 'Publish' ? 'text-green-500' : 'text-orange-500'}`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-3 py-1.5 border border-gray-300 hover:bg-slate-50 text-slate-700 rounded-md font-semibold duration-200 text-[10px]">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-slate-100 bg-slate-50/30 text-xs">
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

export default AdminCoursesPage
