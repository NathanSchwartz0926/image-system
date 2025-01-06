import React from 'react'
import logo from "../assets/logo.png"
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({title}) => {
  return (
    <div className='flex justify-between items-center mb-5'>
        <h1 className='text-6xl w-full border-b-2 border-black mb-8'>{title}</h1>
    </div>
  )
}

export default Navbar