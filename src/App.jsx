import React from 'react'
import AuthsForm from './components/layout/AuthsForm'

export default function App() {
  return (
    <BrowserRouter>
      <div className='bg-gray-100'>
        <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-[1440px] m-[auto] p-[auto]  justify-center bg-white '>
        <NavbarBeforeLogin />
        {/* <NavbarAfterLogin /> */}

    <Routes >
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/aboutus" element={<AboutusPage />} />
      <Route path="/jobboard" element={<JobBoardPage />} />
    </Routes>
       
       <SidebarAdmin />
       <SidebarUser />
      <Footer />


      </div>
      </div>
    </BrowserRouter>
  )
}
