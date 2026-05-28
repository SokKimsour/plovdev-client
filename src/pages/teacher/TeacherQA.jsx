import { useState } from "react";
import {
  LayoutDashboard, BookOpen, GraduationCap, Users, PlusCircle,
  MessageSquare, CreditCard, Wallet, UserCircle, Settings, LogOut,
  Paperclip, Smile, CornerUpLeft
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
      { label: "Q & A", icon: <MessageSquare size={15} />, active: true },
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

const allQuestions = [
  {
    id: 1,
    name: "Heng chupapi",
    course: "Complete Python Bootcamp: Zero to Hero",
    question: "Can you share examples of python loop?",
    time: "1s ago",
    lesson: "Lesson 8 : Loop",
    replies: 1,
    answered: true,
    message: "Can you share examples of python loop?",
    msgTime: "Wed 29 Apr 3:17PM",
  },
  {
    id: 2,
    name: "Dara",
    course: "Complete Python Bootcamp: Zero to Hero",
    question: "Can you share examples of python loop?",
    time: "1s ago",
    lesson: "Lesson 8 : Loop",
    replies: 1,
    answered: false,
    message: "Student2 Question",
    msgTime: "Wed 29 Apr 3:17PM",
  },
];

const tabs = [
  { label: "All Question", count: 4, color: "bg-amber-400" },
  { label: "Unanswered", count: 2, color: "bg-red-400" },
];

export default function TeacherQA() {
  const [activeTab, setActiveTab] = useState("All Question");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");

  const filtered =
    activeTab === "Unanswered"
      ? allQuestions.filter((q) => !q.answered)
      : allQuestions;

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Filter Tabs */}
          <div className="flex gap-3 px-6 pt-6 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => { setActiveTab(tab.label); setSelectedQuestion(null); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  activeTab === tab.label
                    ? "border-gray-300 bg-white shadow-sm text-gray-900"
                    : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                }`}
              >
                {tab.label}
                <span className={`${tab.color} text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Two-panel layout */}
          <div className="flex flex-1 gap-0 px-6 pb-6">
            {/* Left: Question List */}
            <div className="w-80 flex-shrink-0 border border-gray-200 rounded-xl overflow-hidden bg-white mr-4">
              <div className="flex flex-col gap-0">
                {filtered.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestion(q)}
                    className={`w-full text-left p-4 border-b border-gray-100 transition-colors relative ${
                      selectedQuestion?.id === q.id
                        ? "border border-amber-400 rounded-xl bg-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <UserCircle size={22} className="text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm">{q.name}</p>
                        <p className="text-gray-400 text-xs mb-1">{q.course}</p>
                        <p className="text-gray-700 text-sm">{q.question}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-400 text-xs">{q.time}</span>
                          <span className="text-gray-300 text-xs">·</span>
                          <span className="text-gray-400 text-xs">{q.lesson}</span>
                        </div>
                      </div>
                    </div>
                    {/* Reply count badge */}
                    <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 text-[10px] font-bold">{q.replies}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Answer Panel */}
            <div className="flex-1 flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white">
              {selectedQuestion ? (
                <>
                  {/* Header */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <UserCircle size={22} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{selectedQuestion.name}</p>
                      <p className="text-gray-400 text-xs">{selectedQuestion.course}</p>
                    </div>
                  </div>

                  {/* Message area */}
                  <div className="flex-1 p-5 bg-amber-50 overflow-y-auto">
                    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm max-w-xl">
                      <p className="text-gray-800 text-sm">{selectedQuestion.message}</p>
                      <div className="flex items-center justify-end gap-1 mt-2">
                        <CornerUpLeft size={12} className="text-gray-300" />
                        <span className="text-gray-400 text-xs">{selectedQuestion.msgTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Answer input */}
                  <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-100 bg-white">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <UserCircle size={18} className="text-gray-400" />
                    </div>
                    <div className="flex-1 flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 gap-2">
                      <input
                        type="text"
                        placeholder="Write your answer..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                      />
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Paperclip size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Smile size={16} />
                      </button>
                    </div>
                    <button className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors whitespace-nowrap">
                      Post Your Answer
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Empty state header */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <UserCircle size={22} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Heng chupapi</p>
                      <p className="text-gray-400 text-xs">Complete Python Bootcamp: Zero to Hero</p>
                    </div>
                  </div>

                  {/* Empty message area */}
                  <div className="flex-1 bg-amber-50" />

                  {/* Answer input */}
                  <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-100 bg-white">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <UserCircle size={18} className="text-gray-400" />
                    </div>
                    <div className="flex-1 flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 gap-2">
                      <input
                        type="text"
                        placeholder="Write your answer..."
                        className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                      />
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Paperclip size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Smile size={16} />
                      </button>
                    </div>
                    <button className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors whitespace-nowrap">
                      Post Your Answer
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}