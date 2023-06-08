import React from 'react'
import Navbar from './navbar'
import Footer from "./footer"
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <div className='landing' id='Home' style={{ height: '90px' }}>
          <div className='navbar' id='nav'>
            <Navbar />
          </div>
          </div>

      <div className='container p-10 m-20' style={{"min-height":"90vh"}} >
        <Outlet />
      </div>
          

        <Footer/>
    </div>
  )
}