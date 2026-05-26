import React from 'react'
import { Users, Play, GraduationCap, Briefcase, TrendingUp, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total User',
      value: '500k',
      change: '12%',
      timeframe: 'From last month',
      icon: <Users className="h-8 w-8 text-slate-800" />,
    },
    {
      title: 'Total Courses',
      value: '200K',
      change: '12%',
      timeframe: 'From last month',
      icon: <Play className="h-8 w-8 text-slate-800" />,
    },
    {
      title: 'Total Student',
      value: '200K',
      change: '12%',
      timeframe: 'From last month',
      icon: <GraduationCap className="h-8 w-8 text-slate-800" />,
    },
    {
      title: 'Total Instructors',
      value: '1110',
      change: '12%',
      timeframe: 'From last month',
      icon: (
        <div className="relative">
          <Users className="h-8 w-8 text-slate-800" />
          <span className="absolute -bottom-1 -right-1 bg-cyan-400 text-white rounded-full text-[8px] px-0.5">ins</span>
        </div>
      ),
    },
    {
      title: 'Total Revenue',
      value: '$2,022.99',
      change: '12%',
      timeframe: 'From last month',
      icon: (
        <div className="flex items-center text-slate-800">
          <span className="text-2xl font-bold">$</span>
          <TrendingUp className="h-6 w-6 ml-0.5" />
        </div>
      ),
    },
    {
      title: 'Open Job',
      value: '128',
      change: '12%',
      timeframe: 'From last month',
      icon: <Briefcase className="h-8 w-8 text-slate-800" />,
    },
  ]

  const topCourses = Array(6).fill({
    title: 'Complete Python...',
    students: '12000 Students enrolled',
  })

  const topInstructors = Array(6).fill({
    name: 'Heng Alexander',
    students: '12000 Students',
  })

  const topStudents = Array(6).fill({
    name: 'Heng Chupapi',
    details: '120 courses 80 certificates',
  })

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
      </div>

      {/* Grid Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between h-[160px]">
            {/* Top Row: Title & Icon next to Value */}
            <div className="flex flex-col">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.title}</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="pr-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-slate-900 leading-none">{stat.value}</h3>
              </div>
            </div>
            {/* Bottom Row: Trend */}
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <span className="flex items-center font-bold text-teal-600">
                {stat.change}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
              <span>{stat.timeframe}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Yellow Border Container with three tables */}
      <div className="border border-amber-300 rounded-2xl bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Top Courses Column */}
          <div className="border-r border-slate-100 last:border-0 pr-0 md:pr-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold text-slate-800">Top course</h2>
              <Link to="/admin/courses" className="text-xs text-slate-500 hover:text-cyan-500 font-semibold">See all</Link>
            </div>
            <div className="space-y-4">
              {topCourses.map((course, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {/* Yellow rectangle */}
                  <div className="w-16 h-10 bg-yellow-450 rounded-md bg-amber-400 shrink-0"></div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-slate-800 truncate">{course.title}</p>
                    <p className="text-[10px] text-slate-500 truncate">{course.students}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Instructor Column */}
          <div className="border-r border-slate-100 last:border-0 px-0 md:px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold text-slate-800">Top Instructor</h2>
              <Link to="/admin/users" className="text-xs text-slate-500 hover:text-cyan-500 font-semibold">See all</Link>
            </div>
            <div className="space-y-4">
              {topInstructors.map((inst, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {/* Circular Avatar */}
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0">
                    <Users size={16} className="text-slate-600" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-slate-800 truncate">{inst.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{inst.students}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Student Column */}
          <div className="pl-0 md:pl-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold text-slate-800">Top Student</h2>
              <Link to="/admin/users" className="text-xs text-slate-500 hover:text-cyan-500 font-semibold">See all</Link>
            </div>
            <div className="space-y-4">
              {topStudents.map((stud, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {/* Circular Avatar */}
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0">
                    <Users size={16} className="text-slate-600" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-slate-800 truncate">{stud.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{stud.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
