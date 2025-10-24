import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Menuitems = ({ setSideOpen }) => {
  return (
    <div className='px-6 text-gray-600 space-y-1 font-medium'>
      {
        menuItemsData.map((item) => {
          const { to, label, Icon } = item;
          return (
           <NavLink key={to} to={to} end={to==='/'} className={({ isActive }) =>`px-3 py-2 flex items-center gap-3 rounded-xl ${isActive?'bg-amber-600 text-amber-300':'hover:bg-indigo-300'}`} onClick={() => setSideOpen(false)}>
             {Icon && <Icon className='w-5 h-5' />} {label}
           </NavLink>
          )
        })
      }
    
    </div>
  )
}

export default Menuitems