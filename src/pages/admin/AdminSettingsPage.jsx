import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'

const AdminSettingsPage = () => {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
      </div>

      <div className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-slate-50 rounded-lg text-slate-700">
            <IoSettingsOutline size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Admin Account Settings</h3>
            <p className="text-xs text-slate-400">Configure your system-wide dashboard preferences.</p>
          </div>
        </div>

        <form className="space-y-4 text-xs font-semibold text-slate-700">
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-500">System Language</label>
            <select className="border border-slate-350 bg-white rounded-lg p-2.5 font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500">
              <option>English & Khmer (Default)</option>
              <option>English only</option>
              <option>Khmer only</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-slate-500">Notification Alerts</label>
            <div className="flex items-center gap-2 font-normal text-slate-650 mt-1">
              <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-500 focus:ring-cyan-500 h-4 w-4" />
              <span>Email notification for new course submissions</span>
            </div>
            <div className="flex items-center gap-2 font-normal text-slate-655 mt-1">
              <input type="checkbox" defaultChecked className="rounded border-slate-300 text-cyan-500 focus:ring-cyan-500 h-4 w-4" />
              <span>Email notification for teacher payout requests</span>
            </div>
          </div>

          <div className="pt-4 flex justify-start">
            <button type="button" className="px-5 py-2.5 bg-black hover:bg-slate-800 text-white font-bold rounded-lg duration-200 shadow-sm">
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminSettingsPage
