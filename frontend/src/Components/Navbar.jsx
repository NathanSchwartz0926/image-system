import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoLogOut } from "react-icons/io5";
import { PageContext } from '../context/PageContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const { setLogin, navigate, login, branchInfo, role } = useContext(PageContext)
  const location = useLocation()
  const [previous, setPrevious] = useState("Previous Orders")
  const onClickHandler = () => {
    setLogin(false);
    localStorage.removeItem("login");
    localStorage.removeItem("branchName");
    localStorage.removeItem("role");
    navigate("/login")
  }

  const onClickLogo = () => {
    if (location.pathname === "/cart") {
      navigate("/")
    }
  }

  const onOrderHandler = () => {
    if(location.pathname != "/order")
      navigate('/order')
  }

  const onHistoryHandler = () => {
    if(location.pathname != '/orders')
      navigate('/orders')
  }

  const roles = ["Employee",  "Head of Department", "Procurement Head"]

  return (
    <div className='flex justify-between px-3 py-1 items-center border-b-2 border-slate-950 mb-2'>
      <img src={logo} alt="logo" className='w-56' onClick={onClickLogo} />
      <div className="flex flex-col" style={{ alignItems: "center" }}>
        <img src={branchInfo.logo} alt="bank logo" className='w-56' />
        <p style={{ fontFamily: "Roboto", fontSize: "23px" }}>({roles[localStorage.getItem("role")]})</p>
      </div>
      <div className='flex justify-between gap-2 items-center'>
        { role == '0' ?
        <button className='flex items-center gap-2 text-2xl bg-blue-600 text-white p-2 rounded-lg'
          onClick={onOrderHandler}>
          <span style = {{fontSize: "20px"}}>Order</span>
        </button>
        :""}
        <button className='flex items-center gap-2 text-2xl bg-blue-600 text-white p-2 rounded-lg'
          onClick={onHistoryHandler}>
          <span style = {{fontSize: "20px"}}>History</span>
        </button>
        <button className='flex items-center gap-2 text-2xl bg-red-600 text-white p-2 rounded-lg'
          onClick={onClickHandler}>
          <span>LogOut</span>
          <IoLogOut />
        </button>
      </div>
    </div>
  )
}

export default Navbar