import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Plov<span className="text-yellow-400">Dev</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed">
            Structure learning for beginner developers in Cambodia.
            English & Khmer. Free to start.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Above and Beyond School - Team 404
          </p>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-white font-semibold mb-4">COURSES</h2>
          <ul className="space-y-2 text-sm">
            <li>Python</li>
            <li>Javascript</li>
            <li>React</li>
            <li>SQL</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h2 className="text-white font-semibold mb-4">PLATFORM</h2>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Job Board</li>
            <li>Teach on PlovDev</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white font-semibold mb-4">SUPPORT</h2>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>@PlovDevBot</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>@ 2026</p>
        <p>
          <span className="text-yellow-400">Dev</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}