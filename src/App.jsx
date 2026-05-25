
import { BrowserRouter, Route,Routes } from 'react-router-dom'
// import GetUser from './components/users/GetUser'
// import Homepage from './public/Homepage'
// import Register from './public/Register'
// import React from 'react'
// import Coursespage from './public/Coursespage'
// import AboutUspage from './public/AboutUspage'
// import Jobboardpage from './public/Jobboardpage'
// import Userlist from './components/users/Userlist'
import Navbarhomepage from './components/layout/NavbarHomepage'
import Footer from './components/layout/Footer'
function App() {

  return (
    <BrowserRouter>
      <div className='bg-gray-100'>
        <div className='w-[85%] xl:w-[90%] max-xl:w-[94%] max-w-[1440px] m-[auto] p-[auto]  justify-center bg-white '>
        <Navbarhomepage />

 

      <Footer />
      
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App