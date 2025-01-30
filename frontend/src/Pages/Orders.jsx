import React, { useContext } from 'react'
import { PageContext } from '../context/PageContext'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const Orders = () => {

  const { oneBranchOrder, loadOneBranchOrder, getBranchInfo, branchInfo } = useContext(PageContext)

  useEffect(() => {
    getBranchInfo();
  }, [])

  useEffect(() => {
    loadOneBranchOrder();
  }, [branchInfo])

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[90%] py-4'>
        <div>
          {
            oneBranchOrder.reverse().map((item, index) => {
              return (
                <div key={index} className='flex justify-between py-2 pr-8 border-2 border-slate-700 mb-4 rounded-lg items-center relative'>
                  <div className='flex-shrink px-4 text-3xl'>
                    <p className='bg-black h-fit p-2 text-white'>{index + 1}</p>
                  </div>
                  <div className='flex flex-col justify-between mb-2 flex-1'>
                    <img src={item.bankLogo} alt="Bank Logo" className='w-44' />
                    <p className='text-2xl'>{item.address}</p>
                  </div>
                  <div>
                    <Link to={`/orders/${item._id}`} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                      Check
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Orders