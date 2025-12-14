import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className='min-h-[85vh] mt-19' >
        <Outlet></Outlet>
      </div>
      <Footer />
    </main>
  );  
}
