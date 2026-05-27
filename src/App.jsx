import { BrowserRouter, Route, Routes } from "react-router-dom";
// import GetUser from './components/users/GetUser'
import Homepage from './pages/public/Homepage'
import CoursesPage from './pages/public/CoursesPage'
import AboutusPage from './pages/public/AboutusPage'
import JobBoardPage from './pages/public/JobBoardPage'
import Footer from './components/layout/Footer'
import NavbarBeforeLogin from './components/layout/NavbarBeforeLogin'
import SidebarUser from './components/layout/SidebarUser'
import SidebarAdmin from './components/layout/SidebarAdmin'
import NavbarAfterLogin from './components/layout/NavbarAfterLogin'
import UserDashboard from './route/UserDashboard'

function App() {
  return (
      <div className='bg-gray-100'>
        <div className='max-w-[1440px] m-[auto] p-[auto]  justify-center bg-white '>
          <NavbarAfterLogin />

          <Routes >
            <Route path="/" element={<Homepage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/jobboard" element={<JobBoardPage />} />
            <Route path="/instructor/*" element={<UserDashboard/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
