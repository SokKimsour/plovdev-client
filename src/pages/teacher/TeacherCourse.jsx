import { useState } from "react";
import { Star, Trash2 } from "lucide-react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";

const mockCourses = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    category: "Python",
    title: "Complete Python Bootcamp: Zero to Hero",
    students: 120,
    rating: 5.0,
    status: i % 2 === 0 ? "Published" : "Pending",
}));

const tabs = ["Published", "Pending"];

export default function TeacherCourse() {
    const [activeTab, setActiveTab] = useState("Published");

    // Filter courses based on active tab
    const filteredCourses = mockCourses.filter(course => course.status === activeTab);

    return (
        <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
            <NavbarAfterLogin />

            <div className="flex w-full max-w-[1440px] mx-auto">
                {/* Sidebar */}
                    <SidebarUser />
                

                {/* Main Content */}
                <main className="flex-1 p-8 bg-gray-100">
                    <h1 className="text-3xl font-bold text-gray-900 mb-12">Manage your course</h1>

                    {/* Tabs */}
                    <div className="flex gap-8 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm font-semibold border-b-2 pb-2 transition-colors ${activeTab === tab
                                        ? "border-gray-900 text-gray-900"
                                        : "border-transparent text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 gap-5">
                        {filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                                {/* Thumbnail */}
                                <div className="relative h-36 bg-blue-500">
                                    <span className={`absolute top-2 right-2 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                        course.status === "Published" ? "bg-green-400" : "bg-orange-400"
                                    }`}>
                                        {course.status}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <p className="text-amber-500 text-xs font-semibold mb-1">{course.category}</p>
                                    <h3 className="text-gray-900 text-sm font-semibold leading-snug mb-2 h-10 line-clamp-2">{course.title}</h3>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-gray-400 text-xs">{course.students} student</span>
                                        <span className="text-xs text-gray-700 flex items-center gap-0.5">
                                            {course.rating.toFixed(1)}
                                            <Star size={11} className="text-amber-400 fill-amber-400 ml-0.5" />
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2">
                                        <button className="flex-1 bg-gray-900 text-white text-xs font-semibold py-2 rounded-lg hover:bg-gray-700 transition-colors">
                                            Edit
                                        </button>
                                        <button className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-red-50 transition-colors group">
                                            <Trash2 size={14} className="text-red-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            No {activeTab.toLowerCase()} courses found.
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}