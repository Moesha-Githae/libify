import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        
          <div className='navbar' id='nav'>
            <Navbar />
          
        </div>
      </div>

      <div className='row'>
        
          <div className='container p-3'>
            <Outlet />
          </div>
        
      </div>

      <div className='row'>
        
          <Footer />
        </div>
      
    </div>
  );
}
