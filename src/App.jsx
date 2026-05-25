
import { BrowserRouter, Route,Routes } from 'react-router-dom'
// import GetUser from './components/users/GetUser'
import Homepage from './pages/public/Homepage'
import CoursesPage from './pages/public/CoursesPage'
import AboutusPage from './pages/public/AboutusPage'
import JobBoardPage from './pages/public/JobBoardPage'
import Navbarhomepage from './components/layout/NavbarHomepage'
import Footer from './components/layout/Footer'
import NavbarLogin from './components/layout/NavbarLogin'
import SidebarUser from './components/layout/SidebarUser'
function App() {

  return (
    <BrowserRouter>
      <div className='bg-gray-100'>
        <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-[1440px] m-[auto] p-[auto]  justify-center bg-white '>
        <Navbarhomepage />

    <Routes >
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/aboutus" element={<AboutusPage />} />
      <Route path="/jobboard" element={<JobBoardPage />} />
    </Routes>

      <Footer />

      <NavbarLogin />

      <SidebarUser />
      
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App