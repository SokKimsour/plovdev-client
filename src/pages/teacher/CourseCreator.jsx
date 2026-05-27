import { useState, useRef } from "react";
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

function AnswerOption({ option, index, onToggleCorrect, onChangeText, onDelete }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <button
        onClick={() => onToggleCorrect(index)}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all ${
          option.isCorrect
            ? "border-yellow-400 bg-yellow-400"
            : "border-gray-300 bg-white"
        }`}
      >
        {option.isCorrect && (
          <svg className="w-3 h-3 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
      <input
        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
        placeholder={`Option ${index + 1}`}
        value={option.text}
        onChange={e => onChangeText(index, e.target.value)}
      />
      <button
        onClick={() => onDelete(index)}
        className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

function QuestionCard({ question, questionIndex, onUpdateQuestion, onDeleteQuestion }) {
  const updateText = (text) => onUpdateQuestion(questionIndex, { ...question, text });

  const toggleCorrect = (optIndex) => {
    const updated = question.options.map((o, i) => ({ ...o, isCorrect: i === optIndex }));
    onUpdateQuestion(questionIndex, { ...question, options: updated });
  };

  const changeOptionText = (optIndex, text) => {
    const updated = question.options.map((o, i) => i === optIndex ? { ...o, text } : o);
    onUpdateQuestion(questionIndex, { ...question, options: updated });
  };

  const deleteOption = (optIndex) => {
    if (question.options.length <= 2) return;
    const updated = question.options.filter((_, i) => i !== optIndex);
    onUpdateQuestion(questionIndex, { ...question, options: updated });
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Question {questionIndex + 1}
        </span>
        <button
          onClick={() => onDeleteQuestion(questionIndex)}
          className="text-gray-300 hover:text-red-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <input
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4 bg-gray-50 placeholder-gray-300"
        placeholder="Enter your question"
        value={question.text}
        onChange={e => updateText(e.target.value)}
      />

      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
        Answer Options{" "}
        <span className="normal-case font-normal text-gray-300">(click to mark correct)</span>
      </p>

      {question.options.map((opt, i) => (
        <AnswerOption
          key={i}
          option={opt}
          index={i}
          onToggleCorrect={toggleCorrect}
          onChangeText={changeOptionText}
          onDelete={deleteOption}
        />
      ))}
    </div>
  );
}

function BuildQuestionsModal({ onClose, onSave }) {
  const [questions, setQuestions] = useState([
    {
      text: "",
      options: [
        { text: "Visual Hierarchy", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    },
  ]);

  const addQuestion = () => {
    setQuestions(prev => [
      ...prev,
      {
        text: "",
        options: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      },
    ]);
  };

  const updateQuestion = (index, updated) => {
    setQuestions(prev => prev.map((q, i) => i === index ? updated : q));
  };

  const deleteQuestion = (index) => {
    if (questions.length === 1) return;
    setQuestions(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xl shadow-2xl flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-xl font-black text-gray-900 tracking-tight">Build Questions</h3>
          <button onClick={onClose} className="text-gray-300 hover:text-gray-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-6 py-4">
          {questions.map((q, i) => (
            <QuestionCard
              key={i}
              question={q}
              questionIndex={i}
              onUpdateQuestion={updateQuestion}
              onDeleteQuestion={deleteQuestion}
            />
          ))}

          <button
            onClick={addQuestion}
            className="w-full border-2 border-dashed border-gray-200 rounded-xl py-4 flex items-center justify-center gap-2 text-gray-400 hover:border-yellow-400 hover:text-yellow-500 transition-all text-sm font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Add New Question
          </button>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 py-4 border-t border-gray-100 flex-shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => { onSave(questions); onClose(); }}
            className="flex-1 py-2.5 rounded-xl bg-gray-900 text-sm font-bold text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Save Questions
          </button>
        </div>
      </div>
    </div>
  );
}

function BasicInfoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [whatYouLearn, setWhatYouLearn] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [thumbnail, setThumbnail] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef();

  const categories = ["Web Design", "Development", "Marketing", "Business", "Photography", "Music"];

  const handleFile = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setThumbnail(url);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="flex-1 px-10 py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-black text-gray-900 tracking-tight">Course Info</h1>
      <p className="text-sm text-gray-500 mt-1 mb-8">Define the core identity of your PlovDev course.</p>

      <div className="max-w-2xl space-y-7">

        {/* Course Title */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            Course Title
          </label>
          <input
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            placeholder="Input course title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Description
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
            placeholder="Input description"
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        {/* What You Will Learn */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            What You Will Learn
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
            placeholder="optional"
            rows={3}
            value={whatYouLearn}
            onChange={e => setWhatYouLearn(e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Category
          </label>
          <div className="relative inline-block">
            <select
              className="appearance-none border border-gray-200 rounded-full px-4 py-2 pr-8 text-sm font-semibold text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer transition-all"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <svg className="w-4 h-4 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Course Thumbnail Image
          </label>
          <div
            onClick={() => fileInputRef.current.click()}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`w-full border-2 rounded-2xl flex flex-col items-center justify-center py-12 cursor-pointer transition-all ${
              dragging
                ? "border-yellow-400 bg-yellow-50"
                : "border-gray-200 bg-gray-50 hover:border-yellow-400 hover:bg-yellow-50"
            }`}
          >
            {thumbnail ? (
              <img src={thumbnail} alt="Thumbnail preview" className="max-h-40 rounded-xl object-cover" />
            ) : (
              <>
                <svg className="w-9 h-9 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <p className="text-sm font-semibold text-gray-500">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB</p>
              </>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={e => handleFile(e.target.files[0])}
          />
        </div>

      </div>
    </div>
  );
}

function PricingForm() {
  const [price, setPrice] = useState("49.99");
  const [mode, setMode] = useState("premium"); // "free" | "premium"

  const handleSetFree = () => {
    setMode("free");
    setPrice("0.00");
  };

  const handleSetPremium = () => {
    setMode("premium");
    if (price === "0.00") setPrice("49.99");
  };

  return (
    <div className="flex-1 px-10 py-8 bg-white min-h-screen relative">
      <h1 className="text-3xl font-black text-gray-900 tracking-tight">Pricing</h1>
      <p className="text-sm text-gray-500 mt-1 mb-8">Value your knowledge and reach your audience.</p>

      {/* Pricing card */}
      <div className="max-w-2xl border border-gray-100 rounded-2xl shadow-sm py-12 flex flex-col items-center gap-6">

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
          <svg className="w-9 h-9 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>

        {/* Label + price input */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Course Enrollment Fee
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-400">$</span>
            <input
              type="number"
              min="0"
              step="0.01"
              disabled={mode === "free"}
              className="text-2xl font-bold text-gray-900 w-28 border-b-2 border-gray-200 focus:border-yellow-400 focus:outline-none text-center bg-transparent transition-colors disabled:text-gray-400 disabled:cursor-not-allowed"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSetFree}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all border-2 ${
              mode === "free"
                ? "border-yellow-400 bg-yellow-50 text-gray-900"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            }`}
          >
            SET FREE
          </button>
          <button
            onClick={handleSetPremium}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
              mode === "premium"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            PREMIUM
          </button>
        </div>
      </div>

      {/* Request Publish */}
      <div className="fixed bottom-8 right-10">
        <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base rounded-2xl shadow-lg transition-colors">
          Request Publish
        </button>
      </div>
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
  const [activeStep, setActiveStep] = useState("Basic Info");
  const [sections, setSections] = useState([{ ...initialSection, id: 1 }]);
  const [nextSectionId, setNextSectionId] = useState(2);
  const [nextLessonId, setNextLessonId] = useState(1);
  const [toast, setToast] = useState(null);

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

  const [quizModal, setQuizModal] = useState(null);

  const handleBuildQuestions = (sectionId) => {
    setQuizModal(sectionId);
  };

  return (
    <div className="min-h-screen w-full m-[auto] p-[auto] mt-28  bg-gray-100 font-sans">
      {/* Navbar */}
      <NavbarAfterLogin/>

      <div className="flex w-full max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <SidebarUser/>

        {/* Step panel */}
        <div className="w-56 bg-white border-r border-gray-100 py-6 px-4 flex-shrink-0">
          <button 
            onClick={() => setActiveStep("Basic Info")}
            className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-colors mb-2 ${
              activeStep === "Basic Info" 
                ? "bg-yellow-400 text-gray-900 font-bold" 
                : "text-gray-500 hover:bg-gray-50 font-semibold"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-sm">Basic Info</span>
            {activeStep === "Basic Info" && <div className="ml-auto w-2 h-2 rounded-full bg-yellow-600"></div>}
          </button>
          
          <button 
            onClick={() => setActiveStep("Curriculum")}
            className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-colors mb-2 ${
              activeStep === "Curriculum" 
                ? "bg-yellow-400 text-gray-900 font-bold" 
                : "text-gray-500 hover:bg-gray-50 font-semibold"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-sm">Curriculum</span>
            {activeStep === "Curriculum" && <div className="ml-auto w-2 h-2 rounded-full bg-yellow-600"></div>}
          </button>

          <button 
            onClick={() => setActiveStep("Pricing")}
            className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-colors ${
              activeStep === "Pricing" 
                ? "bg-yellow-400 text-gray-900 font-bold" 
                : "text-gray-500 hover:bg-gray-50 font-semibold"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">Pricing & SEO</span>
            {activeStep === "Pricing" && <div className="ml-auto w-2 h-2 rounded-full bg-yellow-600"></div>}
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {activeStep === "Basic Info" && <BasicInfoForm />}
          
          {activeStep === "Curriculum" && (
            <main className="px-10 py-8">
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
          )}

          {activeStep === "Pricing" && <PricingForm />}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg z-50 animate-bounce-in">
          {toast}
        </div>
      )}

      {/* Quiz Modal */}
      {quizModal && (
        <BuildQuestionsModal
          onClose={() => setQuizModal(null)}
          onSave={(questions) => {
            setQuizModal(null);
            showToast("Quiz saved!");
          }}
        />
      )}
    </div>
  );
}
