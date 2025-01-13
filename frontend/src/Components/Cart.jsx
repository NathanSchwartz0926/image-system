import React,{ useContext } from 'react'
import { PageContext } from '../context/PageContext';

const Cart = () => {

    const { cart, currency, removeFromCart } = useContext(PageContext);
    const totalAmt = cart.reduce((acc, item) => acc + item.totalAmt, 0);
  return (
    <div className='w-[90%]'>
        <h2 className="text-2xl font-bold text-gray-800">Cart(Total Amount: ₹{totalAmt})</h2>
        <ul className="mt-4 grid grid-cols-6 gap-5" style = {{rowGap: "2rem"}}>
            {cart.length > 0 ? cart.map((item, index) => (
            <li
                key={index}
                className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-2 justify-between"
            >
                <div>
                <h2 className="text-lg font-medium text-gray-700">{item.name}</h2>
                <p className="text-sm text-gray-500">
                    Price: {currency}{item.price}
                </p>
                <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                <p className="text-sm text-gray-500">
                    Total: {currency}{item.totalAmt}
                </p>
                </div>
                <button
                onClick={() => removeFromCart(item.name)}
                className="px-4 py-2 mt-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                Remove
                </button>
            </li>
            )) : 
                <div className='mb-3 flex-1 flex flex-col justify-center items-center bg-white shadow-md rounded-lg h-44' style = {{width: "89vw"}}>
                    <p className='text-xl'>Your Cart Is Empty</p>
                </div>
            }
        </ul>
    </div>
  )
}

export default Cart