import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { toast } from "react-toastify"
import { PageContext } from '../Context/PageContext';

const LeftSideBar = () => {

    const { navigate } = useContext(PageContext)

    const onLogOutHandler = () => {
        try {
           localStorage.removeItem("login") 
           navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const goToWhatapp = () => {
        window.open("whatsapp://send?abid=6382968373")
    }

  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-slate-300'>
        <div className='fixed w-[18%]'>
            <div className='flex flex-col gap-4 pt-6 text-[15px] items-center'>
                <NavLink to='/'>
                    <img src={logo} alt="Logo" className='w-44 mb-2' />
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white" to="/orders" >
                    <p className='block text-center w-full'>ORDERS</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white" to="/productionTracking" >
                    <p className='block text-center w-full'>PRODUCTION</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='block text-center w-full'>INVOICE</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='block text-center w-full'>COURIOR</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='block text-center w-full'>TRACKING</p>
                </NavLink>
                <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-cyan-700 text-xl text-white">
                    <p className='md:block text-center w-full'>REPORTS</p>
                </NavLink>
                <button onClick={onLogOutHandler} className='flex justify-center items-center gap-2 border border-gray-300 border-r-0 px-3 py-2 rounded w-[90%] bg-[red] text-xl text-white'>
                    Log Out 
                    <IoLogOutOutline className="text-2xl" />
                </button>
                <div className="p-4 flex items-center justify-center w-[90%]" onClick={goToWhatapp}>
                    <FaWhatsappSquare className='text-6xl text-green-700 mr-2' />
                    <p className='text-2xl'>Whatsapp</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar