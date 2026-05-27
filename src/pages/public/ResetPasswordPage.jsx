import React, { useState } from "react";
import { ResetPassword } from "../../api/authAPI";

const EyeIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

const ResetPasswordPage = ({ onNavigate, navigationState }) => {
  // Retrieve email passed from previous screen or default
  const email = navigationState?.email || "your email";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const response = await ResetPassword({ email, password });
      setSuccessMsg(response.message || "Password updated successfully!");

      // Wait a bit, then redirect to login page
      setTimeout(() => {
        onNavigate("login", { resetCompleted: true });
      }, 2000);
    } catch (err) {
      setError(err.message || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-28 pb-16 font-mono">
      {/* Background Gradients */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.85),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.28),_transparent_30%),linear-gradient(135deg,_rgba(252,231,243,0.65),_rgba(219,234,254,0.7)_55%,_rgba(254,249,195,0.72))]" />

      <div className="relative w-full max-w-[28rem] space-y-6 rounded-3xl border border-white/35 bg-white/14 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_25px_70px_rgba(15,23,42,0.18)] backdrop-blur-[28px] md:p-8 animate-entrance">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/60" />

        {/* Back Link */}
        <button
          onClick={() => onNavigate("login")}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition hover:text-slate-900 bg-transparent border-none cursor-pointer p-0"
        >
          <span>&larr;</span> Back to Sign In
        </button>

        {/* Headings */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Reset Password</h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Create a secure new password for your account linked to <span className="font-semibold text-slate-800">{email}</span>.
          </p>
        </div>

        {/* Notification Toast */}
        {error && (
          <div className="rounded-xl border border-red-200/50 bg-red-50/50 px-4 py-2.5 text-xs font-semibold text-red-600 backdrop-blur-md animate-fadeIn">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="rounded-xl border border-green-200/50 bg-green-50/50 px-4 py-2.5 text-xs font-semibold text-green-600 backdrop-blur-md animate-fadeIn">
            {successMsg}
          </div>
        )}

        {/* Reset Form */}
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-800">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Must be at least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/40 bg-white/20 px-4 py-2.5 pr-11 text-sm text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl transition placeholder:text-slate-500 focus:border-yellow-200/90 focus:ring-2 focus:ring-yellow-200/70"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 hover:text-gray-600"
              >
                <EyeIcon open={showPassword} />
              </button>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-800">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-white/40 bg-white/20 px-4 py-2.5 pr-11 text-sm text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl transition placeholder:text-slate-500 focus:border-yellow-200/90 focus:ring-2 focus:ring-yellow-200/70"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 hover:text-gray-600"
              >
                <EyeIcon open={showConfirmPassword} />
              </button>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 to-yellow-300 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-amber-500/20 transition-all duration-300 ease-out hover:from-amber-400 hover:to-yellow-400 active:from-amber-500 active:to-yellow-500 disabled:opacity-50"
          >
            {loading ? (
              <span>Resetting...</span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <span>Reset Password</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
