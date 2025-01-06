import React, { useContext } from 'react'
import { PageContext } from '../Context/PageContext'
import Navbar from '../Components/Navbar'

const ProductionTracking = () => {

    const { production } = useContext(PageContext)

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-[90%] py-4'>
            <Navbar title={"Production Tracking"} />
            <div>
                {
                    production.map((production, index) => {
                        return (
                            <div key={index} className='flex justify-between py-2 pr-8 border-2 border-slate-700 mb-4 gap-4 rounded-lg'>
                                <div className='flex-shrink pl-4 text-3xl self-center'>
                                    <p className='bg-black h-fit p-2 text-white'>{index+1}</p>
                                </div>
                                <div className='flex flex-col justify-between mb-2'>
                                    <img src={production.order.bankLogo} alt="Bank Logo" className='w-44' />
                                    <p className='text-2xl'>{production.order.bankName}</p>
                                </div>
                                <div className='flex-1 flex flex-col justify-between'>
                                    <div className='flex items-center'>
                                        <progress value={production.level} max="100" className='w-full mr-2' />
                                        <p>{production.level}%</p>
                                    </div>
                                    <p className='text-right'><b>Designer : {production.designer}</b></p>
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

export default ProductionTracking