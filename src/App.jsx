import { BrowserRouter, Route, Routes } from "react-router-dom";
// import GetUser from './components/users/GetUser'
import Homepage from "./pages/public/Homepage";
import CoursesPage from "./pages/public/CoursesPage";
import AboutusPage from "./pages/public/AboutusPage";
import JobBoardPage from "./pages/public/JobBoardPage";
import Footer from "./components/layout/Footer";
import NavbarBeforeLogin from "./components/layout/NavbarBeforeLogin";
import SidebarUser from "./components/layout/SidebarUser";
import SidebarAdmin from "./components/layout/SidebarAdmin";
import NavbarAfterLogin from "./components/layout/NavbarAfterLogin";
import CourseCard from "./components/courses/CourseCard";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <div className="w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-[1440px] m-[auto] p-[auto]  justify-center bg-white ">
          <NavbarBeforeLogin />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/jobboard" element={<JobBoardPage />} />
          </Routes>

          <CourseCard />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
