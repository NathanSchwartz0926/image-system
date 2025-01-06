import React from 'react'
import { NavLink } from 'react-router-dom'

const LeftSideBar = () => {

  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-slate-300 pb-2'>
        <div className='fixed w-[18%]'>
            <div className='flex flex-col gap-4 text-[15px] items-center h-screen pt-20'>
                <NavLink to="/clients" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white" >
                    <p className='md:block text-center w-full'>CLIENTS</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white" >
                    <p className='md:block text-center w-full'>PRODUCTS</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>COSTINGS</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>SUPPLIERS</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>CORIOUR</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>USERS</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>EMPLOYEES</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>HR REPORTS</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>PAYMENTS</p>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar