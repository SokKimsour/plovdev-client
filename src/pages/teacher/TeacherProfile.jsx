import {
  LayoutDashboard, BookOpen, GraduationCap, Users, PlusCircle,
  MessageSquare, CreditCard, Wallet, UserCircle, Settings, LogOut,
  Pencil, Video, Star, Trophy
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
      { label: "My Profile", icon: <UserCircle size={15} />, active: true },
      { label: "Setting", icon: <Settings size={15} /> },
    ],
  },
];

const stats = [
  { label: "Total Student",      value: "1100", icon: <Users size={28} /> },
  { label: "Total Courses",      value: "8",    icon: <Video size={28} /> },
  { label: "Total Certificate",  value: "7",    icon: <Trophy size={28} /> },
  { label: "Rating",             value: "4.5",  icon: <Star size={28} className="text-amber-400 fill-amber-400" /> },
];

export default function TeacherProfile() {
  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Main Content */}
        <main className="flex-1 p-8 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>

          {/* Profile Card */}
          <div className="relative bg-amber-100 border border-amber-400 rounded-2xl p-6 flex items-center gap-6">
            
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
                <UserCircle size={80} className="text-gray-400" />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1.5">
              <h2 className="text-2xl font-bold text-gray-900">Heng Alexander</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Video size={14} className="text-gray-500" />
                <span>Instructor since Apr 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <Users size={14} className="text-gray-500" />
                <span>1100 Total Student</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-500">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span>5.0 Instructor rating</span>
              </div>
            </div>
          </div>

          {/* About Me Card */}
          <div className="relative bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">About Me</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
              I am a passionate Python teacher dedicated to helping students understand programming in a simple and practical way.
              I focus on building strong fundamentals, problem-solving skills, and real-world applications. My goal is to make
              learning Python easy, engaging, and useful for every student.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-4 mt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500 mb-3">{stat.label}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">{stat.icon}</span>
                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}