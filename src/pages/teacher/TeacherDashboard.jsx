import { useState } from "react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";
import { FaGraduationCap } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";
import { PiMoneyWavyBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { Play } from 'lucide-react';


const stats = [
  {
    label: "Total Student",
    value: "1100",
    icon: <FaGraduationCap />,
    sub: "8↑ Students",
    subColor: "text-gray-400",
  },
  {
    label: "Total Courses",
    value: "8",
    icon: <PiVideoFill />,
    sub: "2 Pending",
    subColor: "text-amber-500",
  },
  {
    label: "Total Revenue",
    value: "$2,022",
    icon: <PiMoneyWavyBold />,
    sub: "12↑ Last mont",
    subColor: "text-gray-400",
  },
  {
    label: "Rating",
    value: "4.5",
    icon: <FaStar />,
    sub: "0.1↑ Average Rating",
    subColor: "text-gray-400",
    star: true,
  },
];

const smallStats = [
  { label: "Total Purchased", value: "2", icon: <FaShoppingBag /> },
  { label: "Total Certificate", value: "1", icon: <GrCertificate /> },
];

const courses = [
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Published", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
  { title: "Complete Python Bootcamp: Zero to Hero", lessons: "12 Lesson", status: "Pending Review", students: 120, revenue: "$1200", rating: 4.8 },
];

const purchasedCourses = [
  { id: 1, title: "Modern React with Redux", upNext: "Section 5: State in React", progress: 45 },
  { id: 2, title: "The Web Developer Bootcamp 2024", upNext: "Section 12: CSS Flexbox", progress: 12 },
];

const tabs = ["My Course", "Purchased", "Certificate"];

function Certificate({
  studentName = "JOHN DOE",
  courseName = "Web Development Immersive",
  courseDescription = "An intensive, comprehensive program covering advanced frontend development, backend API design, database modeling, and production deployment practices.",
  issuedOn = "May 26, 2026",
  credentialId = "PD-20260526-992",
  verifyUrl = "plovdev.com/verify/PD-20260526-992",
  signatoryName = "Chhorn Crymonyvann",
  signatoryTitle = "Founder, PlovDev",
}) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Inner border */}
      <div className="border border-gray-200 rounded-md m-6 px-14 py-12 flex flex-col min-h-[560px]">

        {/* Top row: logo + issued date */}
        <div className="flex items-start justify-between mb-20">
          <div className="text-2xl font-bold">
            <span className="text-blue-600">Plov</span>
            <span className="text-gray-900">Dev</span>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Issued On</p>
            <p className="text-sm font-semibold text-gray-800 mt-0.5">{issuedOn}</p>
          </div>
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center text-center">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.25em] mb-5">
            Certificate of Completion
          </p>
          <p className="text-sm text-gray-500 mb-3">This is to certify that</p>
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">{studentName}</h1>
          <p className="text-sm text-gray-500 mb-3">has successfully completed the course</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{courseName}</h2>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">{courseDescription}</p>
        </div>

        {/* Bottom row: credential + signature */}
        <div className="flex items-end justify-between mt-20">
          <div>
            <p className="text-xs text-gray-700">
              <span className="font-semibold">Credential ID:</span> {credentialId}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Verify at:{" "}
              <a href={`https://${verifyUrl}`} className="text-blue-600 hover:underline">
                {verifyUrl}
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-3 max-w-sm">
              PlovDev Academy has confirmed the identity of this individual and their participation in the course.
            </p>
          </div>

          <div className="flex flex-col items-end">
            {/* Cursive signature */}
            <p
              className="text-3xl text-blue-800 mb-1"
              style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
            >
              {signatoryName}
            </p>
            <div className="w-44 border-t border-gray-300 mb-2" />
            <p className="text-xs font-semibold text-gray-700">{signatoryName}</p>
            <p className="text-xs text-gray-400">{signatoryTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("My Course");

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      <NavbarAfterLogin />

      <div className="flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <div className="fixed left-0 pt-[-20px] z-50">
          <SidebarUser />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100 ml-[250px]">
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

          {/* Content Section */}
          <div className="bg-white rounded-xl mt-20 shadow-sm border border-amber-400 overflow-hidden">
            {/* Tabs */}
            <div className="flex gap-10 px-6 pt-5 pb-0 border-b border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-lg font-semibold transition-colors border-b-2 ${activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
              {activeTab === "My Course" && (
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
                        <tr key={i} className="border-b border-gray-50">
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
                              className={`font-semibold text-xs ${course.status === "Published"
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
              )}

              {activeTab === "Purchased" && (
                <div className="flex flex-col gap-4">
                  {purchasedCourses.map((course) => (
                    <div key={course.id} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <div className="w-32 h-20 bg-cyan-400 rounded-lg flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm mb-1">{course.title}</p>
                        <p className="text-xs text-gray-400 mb-2">Up next: {course.upNext}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-amber-400 h-2 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{course.progress}% complete</span>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors flex-shrink-0">
                        <Play size={14} className="fill-white" />
                        Resume Video
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Certificate" && (
                <div className="p-6 flex flex-wrap gap-4">
                  <Certificate />

                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}