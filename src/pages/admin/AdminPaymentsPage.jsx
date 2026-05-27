import React from 'react'
import { User } from 'lucide-react'

const AdminPaymentsPage = () => {
  const transactions = [
    { id: 'TXN-001-2026-A7B2', name: 'John Smith', email: 'john.smith@email.com', item: 'Complete Python Bootcamp', amount: '$14.99', provider: 'Stripe', date: 'Apr 28, 2026', status: 'Completed' },
    { id: 'TXN-002-2026-C3D4', name: 'Sarah Johnson', email: 'sarah.j@email.com', item: 'React Masterclass', amount: '$19.99', provider: 'PayPal', date: 'Apr 27, 2026', status: 'Completed' },
    { id: 'TXN-003-2026-E5F6', name: 'Mike Chen', email: 'mike.chen@email.com', item: 'Node.js Advanced', amount: '$24.99', provider: 'Stripe', date: 'Apr 26, 2026', status: 'Failed' },
    { id: 'TXN-004-2026-G7H8', name: 'Emily Davis', email: 'emily.d@email.com', item: 'JavaScript Fundamentals', amount: '$12.99', provider: 'PayPal', date: 'Apr 25, 2026', status: 'Completed' },
    { id: 'TXN-005-2026-I9J0', name: 'Alex Wilson', email: 'alex.w@email.com', item: 'SQL Database Design', amount: '$17.99', provider: 'Stripe', date: 'Apr 24, 2026', status: 'Completed' },
  ]

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Student Payment</h1>
      </div>

      {/* Payments Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">Transaction ID</th>
                <th className="py-4 px-6">Student</th>
                <th className="py-4 px-6">Item Purchased</th>
                <th className="py-4 px-6">Financials</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {transactions.map((txn, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-slate-500 font-mono">{txn.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-500 shrink-0">
                        <User size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 leading-tight">{txn.name}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{txn.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-850 font-bold">{txn.item}</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800">{txn.amount}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{txn.provider}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-500">{txn.date}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                      txn.status === 'Completed' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="px-3 py-1.5 border border-gray-300 hover:bg-slate-50 text-slate-750 font-semibold rounded-md duration-200 text-[10px]">
                      Refund
                    </button>
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

export default AdminPaymentsPage
