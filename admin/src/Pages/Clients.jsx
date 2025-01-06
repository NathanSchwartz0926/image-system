import React, { useContext } from 'react'
import { PageContext } from '../Context/PageContext'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Clients = () => {

    const { clients } = useContext(PageContext)

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[90%] py-4'>
            <Navbar title={"Clients"}/>
                <div>
                    {
                        clients.map((client, index) => {
                            return (
                                <div key={index} className='flex justify-between py-2 pr-8 border-2 border-slate-700 mb-4 rounded-lg items-center relative'>
                                    <div className='flex-shrink px-4 text-3xl'>
                                        <p className='bg-black h-fit p-2 text-white'>{index+1}</p>
                                    </div>
                                    <div className='flex flex-col justify-between mb-2 flex-1'>
                                        <img src={client.logo} alt="Bank Logo" className='w-44 ' />
                                        <p className='text-2xl'>{client.name}<span className='text-base'>({client.ifsc})</span></p>
                                        <p className='text-2xl'>{client.address}</p>
                                    </div>
                                    <div>
                                        <Link to={`/clients/${client._id}`} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                            Details
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

export default Clients