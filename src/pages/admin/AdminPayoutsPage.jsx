import React from 'react'
import { Clock, DollarSign, CheckCircle2, User } from 'lucide-react'

const AdminPayoutsPage = () => {
  const payouts = [
    { id: 'REQ-001', name: 'Heng Alexander', balance: '$2,450.00', bank: 'ABA Bank', account: '****4521', amount: '$2,000.00', status: 'Pending' },
    { id: 'REQ-002', name: 'Sarah Chen', balance: '$3,120.00', bank: 'ACLEDA Bank', account: '****7832', amount: '$2,500.00', status: 'Pending' },
    { id: 'REQ-003', name: 'John Smith', balance: '$1,890.00', bank: 'ABA Bank', account: '****9156', amount: '$1,500.00', status: 'Pending' },
    { id: 'REQ-004', name: 'Emily Wong', balance: '$4,200.00', bank: 'Canadia Bank', account: '****3478', amount: '$3,000.00', status: 'Pending' },
    { id: 'REQ-005', name: 'Mike Johnson', balance: '$2,780.00', bank: 'ABA Bank', account: '****6234', amount: '$2,200.00', status: 'Pending' },
  ]

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Teacher Payouts</h1>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Amber Card (Pending Requests) */}
        <div className="bg-amber-400 rounded-xl shadow-sm p-6 flex items-center justify-between h-[130px] border border-amber-300">
          <div>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Pending Requests</p>
            <h3 className="text-4xl font-bold text-slate-900 mt-2">24</h3>
          </div>
          <div className="p-3 bg-slate-900/10 rounded-full text-slate-800">
            <Clock className="h-10 w-10 text-slate-850 stroke-[1.5]" />
          </div>
        </div>

        {/* White Card (Amount to Pay) */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between h-[130px] border border-slate-100">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount to Pay</p>
            <h3 className="text-4xl font-bold text-slate-800 mt-2">$ $12,450</h3>
          </div>
          <div className="p-3 bg-slate-50 rounded-full text-slate-700">
            <DollarSign className="h-10 w-10 stroke-[1.5]" />
          </div>
        </div>

        {/* White Card (Total Paid Out) */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between h-[130px] border border-slate-100">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Paid Out</p>
            <h3 className="text-4xl font-bold text-slate-800 mt-2">$ $145,200</h3>
          </div>
          <div className="p-3 bg-green-50 rounded-full text-green-600">
            <CheckCircle2 className="h-10 w-10 stroke-[1.5]" />
          </div>
        </div>
      </div>

      {/* Payouts Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">Request ID</th>
                <th className="py-4 px-6">Instructor</th>
                <th className="py-4 px-6">Bank Details</th>
                <th className="py-4 px-6">Requested Amount</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {payouts.map((pay, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-slate-800 font-bold font-mono">{pay.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500 shrink-0">
                        <User size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 leading-tight">{pay.name}</span>
                        <span className="text-[10px] text-slate-405 font-normal">Balance: {pay.balance}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 leading-tight">{pay.bank}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{pay.account}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-850 font-bold">{pay.amount}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-yellow-50 text-amber-600 border border-yellow-200 text-[10px] font-bold">
                      {pay.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded font-bold transition duration-200 text-[10px]">
                        Approve
                      </button>
                      <button className="text-red-500 hover:text-red-700 font-bold duration-200 text-[10px] px-1">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-slate-100 bg-slate-50/30 text-xs">
          <span className="text-slate-500">Showing 1 to 5 of 5 entries</span>
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

export default AdminPayoutsPage
