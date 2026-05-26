import { useState } from "react";
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
      { label: "Payments", icon: <CreditCard size={15} /> },
      { label: "Payouts", icon: <Wallet size={15} /> },
    ],
  },
  {
    section: "ACCOUNT",
    items: [
      { label: "My Profile", icon: <UserCircle size={15} /> },
      { label: "Setting", icon: <Settings size={15} />, active: true },
    ],
  },
];

export default function TeacherSetting() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="border border-amber-400 rounded-2xl p-10 max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Change Password</h2>

            <div className="flex flex-col gap-5">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-cyan-300 placeholder-gray-300"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-cyan-300 placeholder-gray-300"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-cyan-300 placeholder-gray-300"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors mt-2">
                Update password
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}