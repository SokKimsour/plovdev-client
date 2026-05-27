import { useState } from "react";
import { Play } from "lucide-react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";

const mockCourses = Array(4).fill(null).map((_, i) => ({
  id: i + 1,
  title: "Complete Python Bootcamp: Zero to Hero",
  upNext: "Lesson 2 - Loop",
  progress: 70,
}));

const completedCourses = [
  { id: 101, title: "Complete Python Bootcamp: Zero to Hero", status: "Done", progress: 100 }
];

const favoriteCourses = [
  { id: 201, title: "Complete Python Bootcamp: Zero to Hero", category: "Python", teacher: "Teacher Name", rating: 5.0, reviews: 20, price: 14.99, oldPrice: 29.99 }
];

const tabs = [
  { label: "In Process", count: 4 },
  { label: "Complete", count: 1 },
  { label: "Favorite", count: 1 },
];

export default function TeacherLearning() {
  const [activeTab, setActiveTab] = useState("In Process");

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Sidebar */}
          <SidebarUser/>

        {/* Main Content */}
        <main className="flex-1 p-8  bg-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-12">My Learning</h1>

          {/* Tabs */}
          <div className="flex gap-8 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`pb-1 text-sm font-semibold transition-colors border-b-2 ${
                  activeTab === tab.label
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}({tab.count})
              </button>
            ))}
          </div>

          {/* In Process Tab */}
          {activeTab === "In Process" && (
            <div className="border border-amber-400 rounded-xl bg-white p-4 flex flex-col gap-4">
              {mockCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="w-32 h-20 bg-cyan-400 rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{course.title}</p>
                    <p className="text-xs text-gray-400 mb-2">Up next: {course.upNext}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${course.progress}%` }} />
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

          {/* Complete Tab */}
          {activeTab === "Complete" && (
            <div className="border border-amber-400 rounded-xl bg-white p-4 flex flex-col gap-4">
              {completedCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="w-32 h-20 bg-cyan-400 rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{course.title}</p>
                    <p className="text-xs text-gray-400 mb-2">{course.status}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-cyan-400 h-2 rounded-full w-full" />
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{course.progress}% complete</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors flex-shrink-0">
                    <Play size={14} className="fill-white" />
                    Rewatch
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Favorite Tab */}
          {activeTab === "Favorite" && (
            <div className="border border-amber-400 rounded-xl bg-white p-6 min-h-96">

              {favoriteCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className="w-28 h-20 bg-cyan-400 rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{course.title}</p>
                    <p className="text-amber-500 text-xs font-semibold mb-1">{course.category}</p>
                    <p className="text-gray-400 text-xs mb-1">{course.teacher}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-400 text-xs font-bold">{course.rating.toFixed(1)}</span>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xs">★</span>
                      ))}
                      <span className="text-gray-400 text-xs ml-1">({course.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-lg font-bold text-gray-900">${course.price}</span>
                    <span className="text-sm text-red-400 line-through">${course.oldPrice}</span>
                    <button className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors">
                      <Play size={14} className="fill-white" />
                      Enroll
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}