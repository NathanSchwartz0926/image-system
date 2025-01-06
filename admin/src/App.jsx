import { Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from 'react'
import { PageContext } from './Context/PageContext'
import Home from "./Pages/Home";

function App() {

  const { setLogin, navigate, login } = useContext(PageContext)


  return (
    <>
      <div className="flex">
        <ToastContainer autoClose={2000} containerId={`containerA`} />
        <div className="flex-1">
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
