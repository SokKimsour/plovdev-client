import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { SignUp, LogIn } from "../../api/authAPI";


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

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="#1877F2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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

const handleGoogleLoginOrSignup = () => {
  console.log("Google Auth clicked");
};

const SocialButtons = () => (
  <div>
    {[{ icon: <GoogleIcon />, label: "Continue with Google" }].map(
      ({ icon, label }) => (
        <button
          onClick={handleGoogleLoginOrSignup}
          key={label}
          type="button"
          aria-label={label}
          className="flex w-full items-center justify-center gap-3 rounded-full border border-white/45 bg-white/22 py-3 text-sm font-semibold text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-300 ease-out hover:border-white/70 hover:bg-white/30"
        >
          <span className="h-5 w-5">{icon}</span>
          <span>{label}</span>
        </button>
      )
    )}
  </div>
);

export default function AuthsForm() {
  const [tab, setTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const isSignin = tab === "signin";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useAuth();

  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSingIn] = useState("");

  const handleSignup = async () => {
    try {
      const user = await SignUp({ fullName, email, password });
      navigate("otppage", { state: { userId: user?.userId } });
    } catch (error) {
      setError(error.message || "Sign up failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    const data = await LogIn({ email: emailSignIn, password: passwordSignIn });
    setAccessToken(data.accessToken);

    setTimeout(() => {
      navigate("/homepage");
    }, 2000);
  };

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-6 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.85),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.28),_transparent_30%),linear-gradient(135deg,_rgba(252,231,243,0.65),_rgba(219,234,254,0.7)_55%,_rgba(254,249,195,0.72))]" />
      <div className="relative w-full max-w-[28rem] space-y-5 rounded-3xl border border-white/35 bg-white/14 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_25px_70px_rgba(15,23,42,0.18)] backdrop-blur-[28px] md:p-7">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/60" />
        <div className="relative flex rounded-full border border-white/35 bg-white/18 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div
            className={`absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full border border-white/70 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_20px_rgba(15,23,42,0.08)] backdrop-blur-md transition-transform duration-300 ease-out ${
              isSignin ? "translate-x-0" : "translate-x-full"
            }`}
          />
          <button
            type="button"
            onClick={() => setTab("signin")}
            className={`relative z-10 flex-1 rounded-full py-1.5 text-sm font-semibold transition-colors duration-300 ${
              isSignin
                ? "text-slate-900"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setTab("signup")}
            className={`relative z-10 flex-1 rounded-full py-1.5 text-sm font-semibold transition-colors duration-300 ${
              isSignin
                ? "text-slate-500 hover:text-slate-700"
                : "text-slate-900"
            }`}
          >
            Sign Up Free
          </button>
        </div>

        <div className="relative min-h-[32rem]">
          <section
            className={`absolute inset-0 space-y-4 transition-all duration-400 ease-out ${
              isSignin
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0 pointer-events-none"
            }`}
          >
            <div>
              <h1 className="text-xl font-bold text-gray-900">Welcome back</h1>
              <p className="mt-1 text-xs text-slate-600">
                Sign in to continue your learning journey.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={emailSignIn}
                  onChange={(e) => setEmailSignIn(e.target.value)}
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
                    className="text-xs font-medium text-amber-600 transition hover:text-amber-700"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={passwordSignIn}
                    onChange={(e) => setPasswordSingIn(e.target.value)}
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
            </div>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/40" />
              <span className="text-xs text-slate-600">or sign in with</span>
              <div className="h-px flex-1 bg-white/40" />
            </div>

            <SocialButtons />

            <button
              onClick={handleSignIn}
              className="group w-full rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 to-yellow-300 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-amber-500/20 transition-colors duration-300 ease-out hover:from-amber-400 hover:to-yellow-400 active:from-amber-500 active:to-yellow-500"
            >
              <span className="inline-flex items-center gap-2">
                <span>Sign In</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            </button>

            <p className="text-center text-xs text-slate-600">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setTab("signup")}
                className="font-semibold text-amber-600 transition hover:text-amber-700"
              >
                Sign up free
              </button>
            </p>
          </section>

          <section
            className={`absolute inset-0 space-y-4 transition-all duration-400 ease-out ${
              isSignin
                ? "translate-x-8 opacity-0 pointer-events-none"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Create Your Account
              </h1>
              <p className="mt-1 text-xs text-slate-600">
                Fill in your details to get started.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-800">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-white/40 bg-white/20 px-4 py-2.5 text-sm text-slate-800 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl transition placeholder:text-slate-500 focus:border-yellow-200/90 focus:ring-2 focus:ring-yellow-200/70"
                />
              </div>
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
                <label className="mb-1 block text-sm font-semibold text-gray-800">
                  Password
                </label>
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
            </div>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/40" />
              <span className="text-xs text-slate-600">or sign in with</span>
              <div className="h-px flex-1 bg-white/40" />
            </div>

            <SocialButtons />

            <button
              onClick={handleSignup}
              className="group w-full rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-300 to-yellow-300 py-3 text-sm font-bold text-slate-900 shadow-sm shadow-amber-500/20 transition-colors duration-300 ease-out hover:from-amber-400 hover:to-yellow-400 active:from-amber-500 active:to-yellow-500"
            >
              <span className="inline-flex items-center gap-2">
                <span>Sign up</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            </button>

            <p className="text-center text-xs text-slate-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setTab("signin")}
                className="font-semibold text-amber-600 transition hover:text-amber-700"
              >
                Sign in
              </button>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
