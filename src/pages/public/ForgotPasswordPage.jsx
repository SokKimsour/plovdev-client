import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const ForgotPasswordPage = ({ onNavigate }) => {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendCode = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const response = await requestPasswordReset(email);
      setSuccessMsg(response.message || "Verification code sent successfully!");
      
      // Delay navigation slightly so user sees the success message
      setTimeout(() => {
        onNavigate("otp", { email, userId: response?.userId, fromForgotPassword: true });
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to send verification code. Please try again.");
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
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Forgot Password?</h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Enter the email address associated with your account, and we'll send you a 4-digit verification code to reset your password.
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

        {/* Form */}
        <form onSubmit={handleSendCode} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/40 bg-white/20 px-4 py-2.5 text-sm text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl transition placeholder:text-slate-500 focus:border-yellow-200/90 focus:ring-2 focus:ring-yellow-200/70"
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 to-yellow-300 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-amber-500/20 transition-all duration-300 ease-out hover:from-amber-400 hover:to-yellow-400 active:from-amber-500 active:to-yellow-500 disabled:opacity-50"
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <span>Send Code</span>
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

export default ForgotPasswordPage;
