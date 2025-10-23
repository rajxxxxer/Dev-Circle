import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Layout = () => {
  const [sideopen,setSideopen]=useState(false)
  return (
    <div className='w-full flex h-screen' >
      <Sidebar />
      <div className='flex-1 bg-slate-50'>
        <Outlet></Outlet>
      </div>
      {
        sideopen? <X className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={() => setSideopen(false)}></X>:<Menu className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={() => setSideopen(true)}></Menu>  
      }
      
    </div>
  )
}

export default Layout