import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from 'react'
import ProductionTracking from "./ProductionTracking";
import Client from "../Components/Client";
import Clients from "./Clients";
import Orders from "./Orders";
import Order from "../Components/Order";
import LeftSideBar from "../Components/LeftSideBar";
import RightSideBar from "../Components/RightSideBar"
import { PageContext } from "../Context/PageContext";

function Home() {

  const { setLogin, navigate, login } = useContext(PageContext)

  const onClickHandler = () => {
    setLogin(false);
    localStorage.removeItem("login");
    navigate("/login")
  }

  return (
    <>
      <div className="flex">
        <ToastContainer autoClose={2000} />
        <LeftSideBar />
        <div className="flex-1">
          <Routes>
            <Route path="/productionTracking" element={<ProductionTracking />} />
            <Route path="orders/:orderId" element={<Order />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="clients/:clientId" element={<Client />} />
          </Routes>
        </div>
        <RightSideBar />
      </div>
    </>
  )
}

export default Home
