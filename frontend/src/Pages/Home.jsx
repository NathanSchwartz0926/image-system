import React, { useContext } from 'react'
import { PageContext } from '../context/PageContext'
import Navbar from '../Components/Navbar'
import ProductsList from './ProductsList'
import Sidebar from '../Components/Sidebar'
import Cart from '../Components/Cart'
import { Routes, Route } from "react-router-dom"
import Orders from './Orders'


const Home = () => {

  const { navigate } = useContext(PageContext)

  return (
    <div>
      <div className=' h-screen'>
        <Navbar />
        <div className='flex justify-center mt-3'>
          <Routes>
            <Route path = "/order" element = {<ProductsList />}/>
            <Route path = "/orders" element = {<Orders />}/>
          </Routes>
          
        </div>
        <div className='flex justify-center'>
          <Cart />
        </div>
        <div className='flex justify-center'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Home