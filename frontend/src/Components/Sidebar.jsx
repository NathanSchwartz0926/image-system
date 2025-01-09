import React, { useEffect, useState, useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { PageContext } from '../context/PageContext'
import { toast } from 'react-toastify'

const Sidebar = () => {

    const {  cart, setOrder, newOrder, order, branchInfo,  getBranchInfo } = useContext(PageContext) 

    const [name, setName] = useState("")
    const [empNum, setEmpNum] = useState("")
    const [email, setEmail] = useState("")
    const [phoneno, setPhoneno] = useState("")
    const [remark, setRemark] = useState("")

    const generateBillNumber = () => {
        const generatedBillNumber = `${Date.now()}`;
        return generatedBillNumber
    }
    useEffect(() => {
        getBranchInfo()
      }, []);
    const orderConfirm = async (e, name, empNum, email, phoneno, cart, remark) => {
        // console.log(branchInfo)
        const bill = generateBillNumber()
        e.preventDefault();

        const newOrderData = {
            name,
            empNum,
            email,
            phoneno,
            billNumber : bill,
            cart,
            remark,
            bankIfsc : branchInfo.ifsc,
            bankName: branchInfo.bankName,
            bankLogo : branchInfo.logo,
            address : branchInfo.branchName
        };
  
        setOrder((prevOrder) => ({
            ...prevOrder,
            ...newOrderData
        }));
    };

    useEffect(()=>{
      if(order.billNumber && order.billNumber.trim()!=''){
        if(cart.length>0){
          newOrder()
          setEmpNum("")
          setEmail("")
          setPhoneno("")
          setName("")
          setRemark("")
        }else{
          toast.warning("The Cart is Empty", { hideProgressBar: true, autoClose: 2000 })
        }
      }
  },[order])


  return (
    <div className='w-[90%] mb-10'>
        { 
          <div className="flex justify-end rounded-2xl bg-slate-400 mt-12">
          <form className="flex flex-col border-2 border-slate-900 p-4 rounded-2xl w-full" onSubmit={(e)=>orderConfirm(e, name, empNum, email, phoneno, cart, remark)} >
            <h1 className='mb-4 text-xl'><b>Order Confirmation</b></h1>
            <div className='grid grid-cols-3 gap-3'>
              <div className='flex flex-col'>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Employee Name" className="mb-2 p-2 rounded-lg" required />
                <input type="text" value={empNum} onChange={(e)=>setEmpNum(e.target.value)} placeholder="Employee Number" className="mb-2 p-2 rounded-lg" required/>
              </div>
              <div className='flex flex-col'>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email ID" className="mb-2 p-2 rounded-lg" required />
                <input type="tel" value={phoneno} onChange={e=>setPhoneno(e.target.value)} placeholder="Phone Number" className="mb-2 p-2 rounded-lg" required />
              </div>
              <div>
                <textarea name="remark" id="" className='rounded-lg p-2 w-full resize-none h-full' placeholder='Remark' value={remark} onChange={e=>setRemark(e.target.value)} required></textarea>
              </div>
            </div>
            <button type="submit" className="w-fit self-center py-2 px-10 bg-black text-white text-base flex items-center justify-center mt-6 rounded-lg gap-3">
                <span>Order</span>
                <TiShoppingCart className="text-xl" />
              </button>
          </form>
        </div>
      }
    </div>
  )
}

export default Sidebar