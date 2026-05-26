import { useState } from "react";
import NavbarAfterLogin from "../../components/layout/NavbarAfterLogin";
import SidebarUser from "../../components/layout/SidebarUser";

const initialSection = {
  id: 1,
  title: "",
  lessons: [],
  quiz: { title: "Quiz Title" },
};

function VideoLesson({ lesson, onDelete, onToggleAccess }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl border-2 border-yellow-400 bg-white mb-2">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Video Lesson &bull; {lesson.duration}
          </p>
          <p className="text-sm font-semibold text-gray-800">{lesson.title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggleAccess(lesson.id)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-sm font-medium transition-all ${
            lesson.access === "Preview"
              ? "border-yellow-400 text-gray-700"
              : "border-gray-300 text-gray-600"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={lesson.access === "Preview"
                ? "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                : "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              }
            />
          </svg>
          {lesson.access}
        </button>
        <button onClick={() => onDelete(lesson.id)} className="text-gray-300 hover:text-red-400 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function AddLessonModal({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("08:45");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAdd({ title: title.trim(), duration });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Add New Video Lesson</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">Lesson Title</label>
            <input
              autoFocus
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g. Introduction to Visual Hierarchy"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 mb-1 block">Duration (mm:ss)</label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={duration}
              onChange={e => setDuration(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button onClick={handleSubmit} className="flex-1 py-2 rounded-lg bg-yellow-400 text-sm font-bold text-gray-900 hover:bg-yellow-500 transition-colors">
            Add Lesson
          </button>
        </div>
      </div>
    </div>
  );
}

function QuizSection({ quiz, onBuildQuestions }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 rounded-xl bg-gray-900 text-white mt-2">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Interactive Quiz</p>
          <p className="text-sm font-semibold">{quiz.title}</p>
        </div>
      </div>
      <button
        onClick={onBuildQuestions}
        className="flex items-center gap-2 px-5 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors"
      >
        Build Questions
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function Section({ section, onUpdateTitle, onAddLesson, onDeleteLesson, onToggleAccess, onDelete, onBuildQuestions }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mb-6">
      {showModal && (
        <AddLessonModal
          onClose={() => setShowModal(false)}
          onAdd={(lesson) => onAddLesson(section.id, lesson)}
        />
      )}
      <div className="flex items-center gap-3 mb-3">
        <svg className="w-4 h-4 text-gray-300 cursor-grab" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 2a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zM7 8a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zM7 14a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4z" />
        </svg>
        <span className="text-sm font-bold text-gray-400">
          {String(section.id).padStart(2, "0")}
        </span>
        <input
          className="flex-1 text-sm font-semibold text-gray-800 bg-transparent border-b border-transparent focus:border-yellow-400 focus:outline-none pb-0.5 transition-colors placeholder-gray-300"
          placeholder="Enter section title"
          value={section.title}
          onChange={e => onUpdateTitle(section.id, e.target.value)}
        />
        <button onClick={() => onDelete(section.id)} className="text-gray-300 hover:text-red-400 transition-colors ml-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        {section.lessons.map(lesson => (
          <VideoLesson
            key={lesson.id}
            lesson={lesson}
            onDelete={(id) => onDeleteLesson(section.id, id)}
            onToggleAccess={(id) => onToggleAccess(section.id, id)}
          />
        ))}

        <button
          onClick={() => setShowModal(true)}
          className="w-full border-2 border-dashed border-gray-200 rounded-xl py-8 flex flex-col items-center gap-2 text-gray-400 hover:border-yellow-400 hover:text-yellow-500 transition-all group my-2"
        >
          <div className="w-10 h-10 border-2 border-gray-200 group-hover:border-yellow-400 rounded-full flex items-center justify-center transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.628v6.744a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest">New Video Lesson</span>
        </button>

        <QuizSection quiz={section.quiz} onBuildQuestions={() => onBuildQuestions(section.id)} />
      </div>
    </div>
  );
}

export default function CourseCreator() {
  const [sections, setSections] = useState([{ ...initialSection, id: 1 }]);
  const [nextSectionId, setNextSectionId] = useState(2);
  const [nextLessonId, setNextLessonId] = useState(1);
  const [toast, setToast] = useState(null);
  const [activeSideNav, setActiveSideNav] = useState("Create course");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const addSection = () => {
    setSections(prev => [...prev, {
      id: nextSectionId,
      title: "",
      lessons: [],
      quiz: { title: "Quiz Title" },
    }]);
    setNextSectionId(n => n + 1);
    showToast("New section added!");
  };

  const updateSectionTitle = (id, title) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, title } : s));
  };

  const deleteSection = (id) => {
    if (sections.length === 1) return showToast("You need at least one section.");
    setSections(prev => prev.filter(s => s.id !== id));
    showToast("Section removed.");
  };

  const addLesson = (sectionId, lesson) => {
    const newLesson = { id: nextLessonId, ...lesson, access: "Paid" };
    setNextLessonId(n => n + 1);
    setSections(prev => prev.map(s =>
      s.id === sectionId ? { ...s, lessons: [...s.lessons, newLesson] } : s
    ));
    showToast("Lesson added!");
  };

  const deleteLesson = (sectionId, lessonId) => {
    setSections(prev => prev.map(s =>
      s.id === sectionId ? { ...s, lessons: s.lessons.filter(l => l.id !== lessonId) } : s
    ));
  };

  const toggleAccess = (sectionId, lessonId) => {
    setSections(prev => prev.map(s =>
      s.id === sectionId
        ? {
            ...s,
            lessons: s.lessons.map(l =>
              l.id === lessonId
                ? { ...l, access: l.access === "Paid" ? "Preview" : "Paid" }
                : l
            )
          }
        : s
    ));
  };

  const handleBuildQuestions = (sectionId) => {
    showToast("Quiz builder coming soon!");
  };

  const sideNavItems = [
    { label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { label: "My course", icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" },
    { label: "My learning", icon: "M12 14l9-5-9-5-9 5 9 5z" },
    { label: "Student", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
  ];

  const contentItems = [
    { label: "Create course", icon: "M12 4v16m8-8H4", isAccent: true },
    { label: "Q & A", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Payments", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { label: "Payouts", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
  ];

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Step panel */}
        <div className="w-56 bg-white border-r border-gray-100 py-6 px-4 flex-shrink-0">
          <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="font-semibold text-sm text-gray-600">Basic Info</span>
          </button>
          <div className="flex items-center gap-3 w-full px-3 py-3 rounded-xl bg-yellow-400 mb-2 cursor-default">
            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="font-bold text-sm text-gray-900">Curriculum</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-yellow-600"></div>
          </div>
          <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold text-sm text-gray-600">Pricing & SEO</span>
          </button>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto px-10 py-8">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">Curriculum</h1>
              <p className="text-sm text-gray-500 mt-1">Add lessons and quizzes to your sections.</p>
            </div>
            <button
              onClick={addSection}
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-yellow-400 rounded-full text-sm font-bold text-gray-800 hover:bg-yellow-400 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              Add New Section
            </button>
          </div>

          <div className="mt-6">
            {sections.map(section => (
              <Section
                key={section.id}
                section={section}
                onUpdateTitle={updateSectionTitle}
                onAddLesson={addLesson}
                onDeleteLesson={deleteLesson}
                onToggleAccess={toggleAccess}
                onDelete={deleteSection}
                onBuildQuestions={handleBuildQuestions}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg z-50 animate-bounce-in">
          {toast}
        </div>
      )}
    </div>
  );
}