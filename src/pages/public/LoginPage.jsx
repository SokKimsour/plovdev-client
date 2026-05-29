import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-full h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

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

const LoginPage = ({ onNavigate }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const user = await login(email, password);
      setSuccessMsg("Logged in successfully! Redirecting...");
      setTimeout(() => {
        if (user.role === "admin") {
          onNavigate("admin");
        } else if (user.role === "teacher") {
          onNavigate("instructor");
        } else {
          onNavigate("home");
        }
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Invalid credentials.");
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

        {/* Headings */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome back</h1>
          <p className="mt-1.5 text-sm text-slate-600">
            Sign in to continue your learning journey.
          </p>
        </div>

        {/* Notification Toast */}
        {error && (
          <div className="rounded-xl border border-red-200/50 bg-red-50/50 px-4 py-2.5 text-xs font-semibold text-red-600 backdrop-blur-md">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="rounded-xl border border-green-200/50 bg-green-50/50 px-4 py-2.5 text-xs font-semibold text-green-600 backdrop-blur-md">
            {successMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/40 bg-white/20 px-4 py-2.5 text-sm text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl transition placeholder:text-slate-500 focus:border-yellow-200/90 focus:ring-2 focus:ring-yellow-200/70"
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-800">
                Password
              </label>
              <button
                type="button"
                onClick={() => onNavigate("forgot-password", { email })}
                className="text-xs font-semibold text-amber-600 transition hover:text-amber-700 bg-transparent border-none cursor-pointer"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          <div className="flex items-center gap-3 py-2">
            <div className="h-px flex-1 bg-white/40" />
            <span className="text-xs text-slate-600">or sign in with</span>
            <div className="h-px flex-1 bg-white/40" />
          </div>

          {/* Social Sign In */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-white/45 bg-white/22 py-3 text-sm font-semibold text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-300 ease-out hover:border-white/70 hover:bg-white/30"
          >
            <span className="h-5 w-5"><GoogleIcon /></span>
            <span>Continue with Google</span>
          </button>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 to-yellow-300 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-amber-500/20 transition-all duration-300 ease-out hover:from-amber-400 hover:to-yellow-400 active:from-amber-500 active:to-yellow-500 disabled:opacity-50"
          >
            {loading ? (
              <span>Signing In...</span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <span>Sign In</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            )}
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center text-xs text-slate-600">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => onNavigate("signup")}
            className="font-bold text-amber-600 transition hover:text-amber-700 bg-transparent border-none cursor-pointer"
          >
            Sign up free
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;