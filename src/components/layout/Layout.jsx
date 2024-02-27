import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from  '../footer/Footer'
import ScrollTop from '../scrollTop/ScrollTop'


const Layout = ({children}) => {
  return (
    <div>
    <ScrollTop/>
        <Navbar/>
        <div className='main-content min-h-screen'>
            {children}
        </div>
      <Footer/>
    </div>
  )
}

export default Layout