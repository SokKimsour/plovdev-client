import { useState } from "react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";


const stats = [
  {
    label: "Total Student",
    value: "1100",
    icon: "🎓",
    sub: "8↑ Students",
    subColor: "text-gray-400",
  },
  {
    label: "Total Courses",
    value: "8",
    icon: "▶",
    sub: "2 Pending",
    subColor: "text-amber-500",
  },
  {
    label: "Total Revenue",
    value: "$2,022",
    valueSup: ".99",
    icon: "💰",
    sub: "12↑ Last mont",
    subColor: "text-gray-400",
  },
  {
    label: "Rating",
    value: "4.5",
    icon: "⭐",
    sub: "0.1↑ Average Rating",
    subColor: "text-gray-400",
    star: true,
  },
];

const smallStats = [
  { label: "Total Purchased", value: "2", icon: "🛍️" },
  { label: "Total Certificate", value: "1", icon: "🏆" },
];

const courses = [
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
];

const navItems = [
  { section: "OVERVIEW", items: [
    { label: "Dashboard", icon: "▦", active: true },
    { label: "My course", icon: "📋" },
    { label: "My learning", icon: "👤" },
    { label: "Student", icon: "👥" },
  ]},
  { section: "CONTENT", items: [
    { label: "Create course", icon: "+" },
    { label: "Q & A", icon: "💬" },
    { label: "Payments", icon: "💳" },
    { label: "Payouts", icon: "👤" },
  ]},
  { section: "ACCOUNT", items: [
    { label: "My Profile", icon: "👤" },
    { label: "Setting", icon: "⚙️" },
  ]},
];

const tabs = ["My Course", "Purchased", "Certificate"];

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("My Course");

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <NavbarAfterLogin/>

      <div className="flex">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Large Stats */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-xs font-semibold text-gray-500 mb-2">{stat.label}</p>
                <div className="flex items-end gap-3">
                  {stat.star ? (
                    <span className="text-2xl">⭐</span>
                  ) : (
                    <span className="text-2xl">{stat.icon}</span>
                  )}
                  <div>
                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                    {stat.valueSup && (
                      <sup className="text-lg font-semibold text-gray-700">{stat.valueSup}</sup>
                    )}
                  </div>
                </div>
                <p className={`text-xs mt-2 ${stat.subColor}`}>{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Small Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {smallStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm col-span-1">
                <p className="text-xs font-semibold text-gray-500 mb-2">{stat.label}</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Course Table */}
          <div className="bg-white rounded-xl shadow-sm border border-amber-400 overflow-hidden">
            {/* Tabs */}
            <div className="flex gap-6 px-6 pt-5 pb-0 border-b border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${
                    activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table */}
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-xs border-b border-gray-100">
                  <th className="text-left px-6 py-3 font-medium">Course</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Student</th>
                  <th className="text-left px-4 py-3 font-medium">Revenue</th>
                  <th className="text-left px-4 py-3 font-medium">Rating</th>
                  <th className="text-left px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-9 bg-amber-400 rounded-md flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">{course.title}</p>
                          <p className="text-xs text-gray-400">{course.lessons}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`font-semibold text-xs ${
                          course.status === "Published"
                            ? "text-green-500"
                            : "text-amber-500"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-700">{course.students}</td>
                    <td className="px-4 py-4 text-gray-700">{course.revenue}</td>
                    <td className="px-4 py-4">
                      <span className="text-gray-700">{course.rating}</span>
                      <span className="text-amber-400 ml-1">⭐</span>
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
    </div>
  );
}