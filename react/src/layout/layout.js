import React from 'react'
import Navbar from './navbar'
import Footer from "./footer"
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
        <Navbar />

      <div className='container p-10' style={{"min-height":"90vh"}} >
        <Outlet />
      </div>
          

        <Footer/>
    </div>
  )
}