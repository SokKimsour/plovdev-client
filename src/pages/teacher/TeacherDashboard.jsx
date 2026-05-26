import { useState } from "react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";
import { FaGraduationCap } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";
import { PiMoneyWavyBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";


const stats = [
  {
    label: "Total Student",
    value: "1100",
    icon: <FaGraduationCap/>,
    sub: "8↑ Students",
    subColor: "text-gray-400",
  },
  {
    label: "Total Courses",
    value: "8",
    icon: <PiVideoFill/>,
    sub: "2 Pending",
    subColor: "text-amber-500",
  },
  {
    label: "Total Revenue",
    value: "$2,022",
    valueSup: ".99",
    icon: <PiMoneyWavyBold/>,
    sub: "12↑ Last mont",
    subColor: "text-gray-400",
  },
  {
    label: "Rating",
    value: "4.5",
    icon: <FaStar/>,
    sub: "0.1↑ Average Rating",
    subColor: "text-gray-400",
    star: true,
  },
];

const smallStats = [
  { label: "Total Purchased", value: "2", icon: <FaShoppingBag/> },
  { label: "Total Certificate", value: "1", icon: <GrCertificate/>},
];

const courses = [
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
];

const tabs = ["My Course", "Purchased", "Certificate"];

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("My Course");

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <div className=" left-0 pt-[-20px] ">
          <SidebarUser/>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100 ">
          {/* Combined Stats Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-8 shadow-xl">
                <p className="text-lg font-semibold text-gray-500 mb-8">{stat.label}</p>
                <div className="flex items-end gap-3">
                  {stat.star ? (
                    <span className="text-4xl">⭐</span>
                  ) : (
                    <span className="text-4xl">{stat.icon}</span>
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
            {smallStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-8 shadow-xl col-span-1">
                <p className="text-lg font-semibold text-gray-500 mb-8">{stat.label}</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{stat.icon}</span>
                  <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>  

          {/* Course Table */}
          <div className="bg-white rounded-xl mt-20 shadow-sm border border-amber-400 overflow-hidden">
            {/* Tabs */}
            <div className="flex gap-10 px-6 pt-5 pb-0 border-b border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-lg font-semibold transition-colors border-b-2 ${
                    activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table wrapper for horizontal scroll on mobile */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-lg border-b border-gray-100">
                    <th className="text-left px-6 py-6 font-bold">Course</th>
                    <th className="text-left px-4 py-3 font-bold">Status</th>
                    <th className="text-left px-4 py-3 font-bold">Student</th>
                    <th className="text-left px-4 py-3 font-bold">Revenue</th>
                    <th className="text-left px-4 py-3 font-bold">Rating</th>
                    <th className="text-left px-4 py-3 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-12 bg-amber-400 rounded-md flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800">{course.title}</p>
                            <p className="text-md text-gray-400">{course.lessons}</p>
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
          </div>
        </main>
      </div>
    </div>
  );
}