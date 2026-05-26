import { useState } from "react";
import {
  LayoutDashboard, BookOpen, GraduationCap, Users, PlusCircle,
  MessageSquare, CreditCard, Wallet, UserCircle, Settings, LogOut,
  SlidersHorizontal, ChevronRight, ChevronLeft
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
      { label: "Student", icon: <Users size={15} />, active: true },
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
      { label: "Setting", icon: <Settings size={15} /> },
    ],
  },
];

const mockStudents = [
  { id: 1, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 2, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 3, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 4, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 5, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "2/100",   enrolled: "Tue 28 Apr 2026", status: "Inactive" },
  { id: 6, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 7, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 8, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 9, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "100/100", enrolled: "Tue 28 Apr 2026", status: "Active" },
  { id: 10, name: "Heng chupapi", email: "hengheng168@gmail.com", course: "Complete Python Bootcamp: Zero to Hero", score: "2/100",  enrolled: "Tue 28 Apr 2026", status: "Inactive" },
];

const ITEMS_PER_PAGE = 10;
const TOTAL_PAGES = 3;

export default function StudentList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = mockStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <div className="fixed left-0 pt-[-20px] z-50">
          <SidebarUser/>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8 ml-[250px] bg-gray-100">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Student List</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 gap-2 w-56">
                <span className="text-gray-400 text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Search student..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent text-sm text-gray-700 outline-none w-full placeholder-gray-400"
                />
              </div>
              <button className="w-9 h-9 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors">
                <SlidersHorizontal size={16} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-xs w-12">No</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Student</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Course</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Score</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Enrolled</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium text-xs">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((student) => (
                  <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    {/* No */}
                    <td className="px-6 py-4 text-gray-400 text-sm">{student.id}</td>

                    {/* Student */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <UserCircle size={22} className="text-gray-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{student.name}</p>
                          <p className="text-gray-400 text-xs">{student.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* Course */}
                    <td className="px-4 py-4 text-gray-600 text-sm">{student.course}</td>

                    {/* Score */}
                    <td className="px-4 py-4 text-gray-600 text-sm">{student.score}</td>

                    {/* Enrolled */}
                    <td className="px-4 py-4 text-gray-600 text-sm font-medium">{student.enrolled}</td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <span className={`text-sm font-semibold ${
                        student.status === "Active" ? "text-green-500" : "text-red-500"
                      }`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-1 px-6 py-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400"
              >
                <ChevronLeft size={15} />
              </button>

              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}

              <span className="text-gray-400 text-sm px-1">...</span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}