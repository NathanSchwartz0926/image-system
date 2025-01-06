import React, { useContext, useState, useEffect } from 'react'
import {PageContext} from "../Context/PageContext"
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Client = () => {

    const { clients } = useContext(PageContext)
    const { clientId } = useParams();
    const [client, setClient] = useState(false)

    const fetchClient = () => {
        clients.map(client => {
          if (client._id === clientId) {
            setClient(client);
            return null;
          }
        })
      }

      useEffect(() => {
        fetchClient();
      }, [client, clientId])
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[90%] py-4'>
            <Navbar title={"Client"} />
            {
                <div className='border-2 border-slate-800 rounded-lg p-4'>
                    <div className='mb-4'>
                        <img src={client.logo} alt="logo" className='w-full' />
                    </div>
                    <div>
                        <div className='flex justify-between mb-2 mt-3 p-2'>
                            <p className='mb-1 text-2xl'><b>Bank Name : {client.name}</b></p>
                            <p className='mb-1 text-2xl'><b>Bank IFSC : {client.ifsc}</b></p>
                        </div>
                        <p className='mb-2 text-2xl p-2'>Address : {client.address}</p>
                        <div className='border-2 border-slate-900 rounded-lg p-4 my-2 grid grid-cols-4'>
                            {
                                client.products &&
                                client.products.map((item, index) => {
                                  return (
                                    <input className='mb-2 border border-black mx-2 py-2 bg-white text-center' type="text" name="item" key={index} defaultValue={item} />
                                  )
                                })
                            }
                            <div className='mx-3 my-3 col-span-4 flex justify-between'>
                              <button className='bg-orange-500 p-2 rounded-lg text-white'>Change Product</button>
                              <button className='bg-green-500 p-2 rounded-lg text-white'>Add Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Client