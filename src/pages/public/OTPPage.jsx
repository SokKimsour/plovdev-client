import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const OTPPage = ({ onNavigate, navigationState }) => {
  const { verifyOTP, requestPasswordReset } = useAuth();
  // Retrieve email and state parameters from props instead of router location
  const email = navigationState?.email || "your email";
  const userId = navigationState?.userId;
  const fromSignup = navigationState?.fromSignup || false;
  const fromForgotPassword = navigationState?.fromForgotPassword || false;

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Timer for Resend Code
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // References for the 4 input elements to auto-focus them
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Countdown effect
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Handle value change for each individual OTP input box
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto focus next field if value is entered
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Handle keyboard events (specifically Backspace)
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs[index - 1].current.focus();
      }
    }
  };

  // Handle clipboard paste of a 4-digit code
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (pasteData.length === 4 && /^\d+$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs[3].current.focus();
    }
  };

  // Resend OTP code action
  const handleResend = async () => {
    if (!canResend) return;
    setError("");
    setSuccessMsg("");
    setLoading(true);
    
    try {
      await requestPasswordReset(email);
      setSuccessMsg("A new 4-digit code has been sent!");
      setTimer(30);
      setCanResend(false);
      setOtp(["", "", "", ""]);
      inputRefs[0].current.focus();
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to resend code.");
    } finally {
      setLoading(false);
    }
  };

  // Submit and verify OTP code
  const handleVerify = async (e) => {
    if (e) e.preventDefault();
    const otpCode = otp.join("");
    
    if (otpCode.length < 4) {
      setError("Please enter the full 4-digit code.");
      return;
    }

    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const response = await verifyOTP(userId, otpCode, fromForgotPassword);
      setSuccessMsg(response.message || "Verified successfully!");

      setTimeout(() => {
        if (fromForgotPassword) {
          onNavigate("reset-password", { email });
        } else {
          onNavigate("login", { registered: true });
        }
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Invalid verification code. Please check and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-submit when all 4 digits are completed
  useEffect(() => {
    if (otp.join("").length === 4) {
      handleVerify();
    }
  }, [otp]);

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
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Verify Your Email</h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We've sent a 4-digit verification code to <span className="font-semibold text-slate-800">{email}</span>. Please enter it below.
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

        {/* OTP Input Fields */}
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between items-center gap-3 px-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="h-14 w-14 rounded-2xl border border-white/40 bg-white/20 text-center text-xl font-bold text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl transition focus:border-yellow-200/90 focus:ring-2 focus:ring-yellow-200/70"
              />
            ))}
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 to-yellow-300 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-amber-500/20 transition-all duration-300 ease-out hover:from-amber-400 hover:to-yellow-400 active:from-amber-500 active:to-yellow-500 disabled:opacity-50"
          >
            {loading ? (
              <span>Verifying...</span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <span>Verify Code</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            )}
          </button>
        </form>

        {/* Resend Timer section */}
        <div className="text-center text-xs">
          {canResend ? (
            <button
              onClick={handleResend}
              type="button"
              className="font-bold text-amber-600 transition hover:text-amber-700 bg-transparent border-none cursor-pointer"
            >
              Resend verification code
            </button>
          ) : (
            <span className="text-slate-500">
              Resend code in <span className="font-semibold text-slate-700">{timer}s</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
