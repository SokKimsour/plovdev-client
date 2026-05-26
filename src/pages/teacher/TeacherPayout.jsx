import { useState } from "react";
import {
  LayoutDashboard, BookOpen, GraduationCap, Users, PlusCircle,
  MessageSquare, CreditCard, Wallet, UserCircle, Settings, LogOut,
  Star, Download, Upload, X, ChevronDown
} from "lucide-react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";

const navGroups = [
  {
    section: "OVERVIEW",
    items: [
      { label: "Dashboard", icon: <LayoutDashboard size={15} /> },
      { label: "My course", icon: <BookOpen size={15} /> },
      { label: "My learning", icon: <GraduationCap size={15} /> },
      { label: "Student", icon: <Users size={15} /> },
    ],
  },
  {
    section: "CONTENT",
    items: [
      { label: "Create course", icon: <PlusCircle size={15} /> },
      { label: "Q & A", icon: <MessageSquare size={15} /> },
      { label: "Payments", icon: <CreditCard size={15} /> },
      { label: "Payouts", icon: <Wallet size={15} />, active: true },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "My Profile", icon: <UserCircle size={15} /> },
      { label: "Setting", icon: <Settings size={15} /> },
    ],
  },
];

const courses = [
  { id: 1, title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { id: 2, title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { id: 3, title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
  { id: 4, title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
];

const paymentHistory = [
  { id: 1, date: "May 15, 2026",      billing: "April 1-30",     amount: "$450.00", method: "ABA",    status: "Paid",       canDownload: true },
  { id: 2, date: "April 16, 2026",    billing: "March 1-31",     amount: "$520.00", method: "ACLEDA", status: "Paid",       canDownload: true },
  { id: 3, date: "March 18, 2026",    billing: "February 1-28",  amount: "$480.00", method: "Wing",   status: "Paid",       canDownload: true },
  { id: 4, date: "February 20, 2026", billing: "January 1-31",   amount: "$510.00", method: "ABA",    status: "Processing", canDownload: false },
  { id: 5, date: "January 22, 2026",  billing: "December 1-31",  amount: "$495.00", method: "ACLEDA", status: "Paid",       canDownload: true },
];

export default function TeacherPayout() {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [bankName, setBankName] = useState("ABA");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Main */}
        <main className="flex-1 p-8">
          {/* Financial Summary Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Financial Summary</h2>
            <div className="flex gap-24 items-start">
              <div>
                <p className="text-sm text-gray-400 mb-1">Lifetime Earnings</p>
                <p className="text-4xl font-bold text-gray-900">$12,450.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Next Expected Payout</p>
                <p className="text-4xl font-bold text-gray-900">$450.00</p>
                <p className="text-xs text-gray-400 mt-1 mb-4">Processing on May 25th</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowHistoryModal(true)}
                    className="text-sm font-medium text-gray-700 underline hover:text-gray-900 transition-colors"
                  >
                    View Payment History
                  </button>
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
                  >
                    Edit Payment Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-xs">Course</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Status</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Student</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Revenue</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Rating</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-8 bg-amber-400 rounded-md flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{course.title}</p>
                          <p className="text-xs text-gray-400">{course.lessons}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`text-xs font-semibold ${course.status === "Published" ? "text-green-500" : "text-amber-500"}`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{course.students}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{course.revenue}</td>
                    <td className="px-4 py-4">
                      <span className="text-gray-700 text-sm">{course.rating}</span>
                      <Star size={11} className="inline text-amber-400 fill-amber-400 ml-1 mb-0.5" />
                    </td>
                    <td className="px-4 py-4">
                      <button className="flex items-center gap-1 text-xs border border-gray-200 rounded px-3 py-1.5 hover:bg-gray-100 transition-colors text-gray-600 font-medium">
                        <span className="text-gray-400">···</span> Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Payment History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl">
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h3 className="text-xl font-bold text-gray-900">Payment History</h3>
              <button onClick={() => setShowHistoryModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="px-6 pb-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    {["Date", "Billing Period", "Amount (USD)", "Payment Method", "Status", "Action"].map((h) => (
                      <th key={h} className="text-left py-3 pr-4 text-gray-800 font-semibold text-xs">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((row) => (
                    <tr key={row.id} className="border-b border-gray-50">
                      <td className="py-4 pr-4 text-gray-700 text-sm">{row.date}</td>
                      <td className="py-4 pr-4 text-gray-700 text-sm">{row.billing}</td>
                      <td className="py-4 pr-4 text-gray-700 text-sm font-medium">{row.amount}</td>
                      <td className="py-4 pr-4 text-gray-700 text-sm">{row.method}</td>
                      <td className="py-4 pr-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          row.status === "Paid" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4">
                        {row.canDownload ? (
                          <button className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-gray-900 transition-colors font-medium">
                            <Download size={13} /> Download Receipt
                          </button>
                        ) : (
                          <span className="text-gray-300 text-sm">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end px-6 py-4">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Payment Details Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h3 className="text-xl font-bold text-gray-900">Edit Payment Details</h3>
              <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="px-6 pb-4 flex flex-col gap-5">
              {/* Bank Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Bank Name</label>
                <div className="relative">
                  <select
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-gray-50 appearance-none outline-none focus:ring-2 focus:ring-cyan-300"
                  >
                    <option>ABA</option>
                    <option>ACLEDA</option>
                    <option>Wing</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Account Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Account Name</label>
                <input
                  type="text"
                  placeholder="Full name on the bank account"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-gray-50 outline-none focus:ring-2 focus:ring-cyan-300 placeholder-gray-400"
                />
              </div>

              {/* Account Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Account Number</label>
                <input
                  type="text"
                  placeholder="Enter your account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-gray-50 outline-none focus:ring-2 focus:ring-cyan-300 placeholder-gray-400"
                />
              </div>

              {/* KHQR Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">KHQR Upload</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center gap-2 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                  <Upload size={24} className="text-gray-400" />
                  <p className="text-sm font-medium text-gray-700">Click to upload KHQR image</p>
                  <p className="text-xs text-gray-400">Drag and drop your KHQR image here or click to browse</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setShowEditModal(false)}
                className="border border-gray-200 text-gray-700 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}