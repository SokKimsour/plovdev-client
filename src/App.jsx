import React from 'react'
import { BrowserRouter, Route, Routes, Outlet, useNavigate, useLocation } from 'react-router-dom'
import Homepage from './pages/public/HomePage'
import CoursesPage from './pages/public/CoursesPage'
import AboutusPage from './pages/public/AboutusPage'
import JobBoardPage from './pages/public/JobBoardPage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'
import ForgotPasswordPage from './pages/public/ForgotPasswordPage'
import OTPPage from './pages/public/OTPPage'
import ResetPasswordPage from './pages/public/ResetPasswordPage'
import Footer from './components/layout/Footer'
import NavbarBeforeLogin from './components/layout/NavbarBeforeLogin'
import UserDashboard from './route/userdashboard'

// Admin layout & pages
import AdminLayout from './components/layout/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminCoursesPage from './pages/admin/AdminCoursesPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminPaymentsPage from './pages/admin/AdminPaymentsPage'
import AdminPayoutsPage from './pages/admin/AdminPayoutsPage'
import AdminJobsPage from './pages/admin/AdminJobsPage'
import AdminProfilePage from './pages/admin/AdminProfilePage'
import AdminSettingsPage from './pages/admin/AdminSettingsPage'

// Public layout wrapper
const PublicLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-[1440px] m-auto bg-white min-h-screen flex flex-col justify-between">
        <NavbarBeforeLogin />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

// Wrappers for authentication wizard pages to map onNavigate callback to react-router-dom
const LoginPageWrapper = () => {
  const navigate = useNavigate();
  const handleNavigate = (path, state) => {
    if (path === 'home') navigate('/');
    else if (path === 'signup') navigate('/signup');
    else if (path === 'forgot-password') navigate('/forgotpassword', { state });
    else navigate(`/${path}`, { state });
  };
  return <LoginPage onNavigate={handleNavigate} />;
};

const RegisterPageWrapper = () => {
  const navigate = useNavigate();
  const handleNavigate = (path, state) => {
    if (path === 'login') navigate('/login');
    else if (path === 'otp') navigate('/otp', { state });
    else navigate(`/${path}`, { state });
  };
  return <RegisterPage onNavigate={handleNavigate} />;
};

const ForgotPasswordPageWrapper = () => {
  const navigate = useNavigate();
  const handleNavigate = (path, state) => {
    if (path === 'login') navigate('/login');
    else if (path === 'otp') navigate('/otp', { state });
    else navigate(`/${path}`, { state });
  };
  return <ForgotPasswordPage onNavigate={handleNavigate} />;
};

const OTPPageWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path, state) => {
    if (path === 'login') navigate('/login');
    else if (path === 'reset-password') navigate('/resetpassword', { state });
    else navigate(`/${path}`, { state });
  };
  return <OTPPage onNavigate={handleNavigate} navigationState={location.state} />;
};

const ResetPasswordPageWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path, state) => {
    if (path === 'login') navigate('/login');
    else navigate(`/${path}`, { state });
  };
  return <ResetPasswordPage onNavigate={handleNavigate} navigationState={location.state} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with standard Layout */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Homepage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="aboutus" element={<AboutusPage />} />
          <Route path="jobboard" element={<JobBoardPage />} />
          <Route path="login" element={<LoginPageWrapper />} />
          <Route path="signup" element={<RegisterPageWrapper />} />
          <Route path="forgotpassword" element={<ForgotPasswordPageWrapper />} />
          <Route path="otp" element={<OTPPageWrapper />} />
          <Route path="resetpassword" element={<ResetPasswordPageWrapper />} />
        </Route>

        {/* Admin Routes with nested Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCoursesPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="payments" element={<AdminPaymentsPage />} />
          <Route path="payouts" element={<AdminPayoutsPage />} />
          <Route path="jobs" element={<AdminJobsPage />} />
          <Route path="profile" element={<AdminProfilePage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        {/* Instructor/Teacher Routes */}
        <Route path="/instructor/*" 
        
        
        
        
        
        element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
