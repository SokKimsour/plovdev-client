import { useState } from "react";
import {
  LayoutDashboard, BookOpen, GraduationCap, Users, PlusCircle,
  MessageSquare, CreditCard, Wallet, UserCircle, Settings, LogOut
} from "lucide-react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";

export default function TeacherSetting() {
  // User Info State
  const [fullName, setFullName] = useState("Heng Alexander");
  const [email, setEmail] = useState("heng.alexander@example.com");
  
  // About Me State
  const [aboutMe, setAboutMe] = useState(
    "I am a passionate Python teacher dedicated to helping students understand programming in a simple and practical way. I focus on building strong fundamentals, problem-solving skills, and real-world applications."
  );

  // Password State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8">
          
          {/* User Information Form */}
          <div className="border border-amber-400 rounded-2xl p-10 max-w-2xl bg-white shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">User Information</h2>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all"
                />
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-xl py-3 text-sm font-bold text-gray-900 transition-colors mt-2">
                Save Information
              </button>
            </div>
          </div>

          {/* About Me Form */}
          <div className="border border-amber-400 rounded-2xl p-10 max-w-2xl bg-white shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Short Bio</label>
                <textarea
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  placeholder="Tell students about yourself..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all resize-none"
                />
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-xl py-3 text-sm font-bold text-gray-900 transition-colors mt-2">
                Update Bio
              </button>
            </div>
          </div>

          {/* Change Password Form */}
          <div className="border border-amber-400 rounded-2xl p-10 max-w-2xl bg-white shadow-sm">
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all"
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all"
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl py-3 text-sm font-bold transition-colors mt-2">
                Update Password
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}