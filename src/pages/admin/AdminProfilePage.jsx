import React from 'react'
import { Pencil, User } from 'lucide-react'

const AdminProfilePage = () => {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
      </div>

      {/* Profile gold card */}
      <div className="relative bg-amber-50/70 border border-amber-300 rounded-2xl p-8 flex items-center gap-6 shadow-sm">
        {/* Edit Icon on Gold Card (Top-Right) */}
        <button className="absolute top-4 right-4 p-2 text-slate-600 hover:text-cyan-500 duration-200">
          <Pencil size={18} />
        </button>

        {/* Circular Avatar Container */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center text-white border border-slate-700 shadow-inner">
            <User size={44} className="opacity-90" />
          </div>
          {/* Avatar edit badge */}
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow hover:text-cyan-500 duration-200">
            <Pencil size={12} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Name and Email */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-slate-900 leading-tight">Heng Alexander</h2>
          <span className="text-sm font-semibold text-slate-500 mt-1">hengheng168@gmail.com</span>
        </div>
      </div>

      {/* About Me Section Card */}
      <div className="relative bg-white border border-slate-100 rounded-xl p-8 shadow-sm">
        {/* Edit Icon (Top-Right) */}
        <button className="absolute top-4 right-4 p-2 text-slate-500 hover:text-cyan-500 duration-205">
          <Pencil size={18} />
        </button>

        <h3 className="text-lg font-bold text-slate-900 mb-4">About Me</h3>
        <p className="text-sm font-semibold text-slate-600 leading-relaxed">
          Plov Dev Admin
        </p>
      </div>
    </div>
  )
}

export default AdminProfilePage
