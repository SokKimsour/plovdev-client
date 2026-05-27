import {
  LayoutDashboard, BookOpen, GraduationCap, Users, PlusCircle,
  MessageSquare, CreditCard, Wallet, UserCircle, Settings, LogOut
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
      { label: "Payments", icon: <CreditCard size={15} />, active: true },
      { label: "Payouts", icon: <Wallet size={15} /> },
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

const payments = [
  { id: 1, title: "Complete Python Bootcamp: Zero to Hero", date: "May 05 2026", price: "$12", invoice: "INV-0042", status: "Completed" },
  { id: 2, title: "Complete Python Bootcamp: Zero to Hero", date: "May 05 2026", price: "$12", invoice: "INV-0042", status: "Completed" },
  { id: 3, title: "Complete Python Bootcamp: Zero to Hero", date: "May 05 2026", price: "$12", invoice: "INV-0042", status: "Completed" },
  { id: 4, title: "Complete Python Bootcamp: Zero to Hero", date: "May 05 2026", price: "$12", invoice: "INV-0042", status: "Completed" },
];

export default function TeacherPayment() {
  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Main Content */}
        <main className="flex-1 p-8">

          {/* Payment Summary Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Payment</h2>
            <div className="flex gap-24">
              {/* Available to withdraw */}
              <div>
                <p className="text-sm text-gray-400 mb-1">Available to withdraw</p>
                <p className="text-4xl font-bold text-gray-900">$450.00</p>
                <p className="text-xs text-gray-400 mt-1">Processing on May 25th</p>
              </div>
              {/* Total spend */}
              <div>
                <p className="text-sm text-gray-400 mb-1">Total spend on course</p>
                <p className="text-4xl font-bold text-gray-900">$50.00</p>
                <p className="text-xs text-gray-400 mt-1">
                  courses bought <span className="text-cyan-400 font-semibold">4</span>
                </p>
              </div>
            </div>
          </div>

          {/* Payments Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-xs">Course purchased</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Date</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Price</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Invoice</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    {/* Course */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-9 bg-amber-400 rounded-md flex-shrink-0" />
                        <span className="text-gray-800 font-medium text-sm">{payment.title}</span>
                      </div>
                    </td>
                    {/* Date */}
                    <td className="px-4 py-4 text-gray-600 text-sm">{payment.date}</td>
                    {/* Price */}
                    <td className="px-4 py-4 text-gray-600 text-sm">{payment.price}</td>
                    {/* Invoice */}
                    <td className="px-4 py-4 text-gray-600 text-sm">{payment.invoice}</td>
                    {/* Status */}
                    <td className="px-4 py-4">
                      <span className="text-green-500 font-semibold text-sm">{payment.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
}