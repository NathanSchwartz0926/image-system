import React, { useEffect, useState, useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { PageContext } from '../context/PageContext'
import { toast } from 'react-toastify'
import jsPDF from "jspdf";
import "jspdf-autotable";

const Sidebar = () => {

  const { cart, setOrder, newOrder, order, branchInfo, getBranchInfo } = useContext(PageContext)

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
      billNumber: bill,
      cart,
      remark,
      bankIfsc: branchInfo.ifsc,
      bankName: branchInfo.bankName,
      bankLogo: branchInfo.logo,
      address: branchInfo.branchName
    };

    setOrder((prevOrder) => ({
      ...prevOrder,
      ...newOrderData
    }));

    generatePDF()
  };

  useEffect(() => {
    if (order.billNumber && order.billNumber.trim() != '') {
      if (cart.length > 0) {
        newOrder()
        setEmpNum("")
        setEmail("")
        setPhoneno("")
        setName("")
        setRemark("")
      } else {
        toast.warning("The Cart is Empty", { hideProgressBar: true, autoClose: 2000 })
      }
    }
  }, [order])

  const capitalizeWords = (str) => {
    return str
      .split(' ') // Split the string into words
      .map(word => {
        if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter and lowercase the rest
        }
        return word; // Return the word as is if it's an empty string
      })
      .join(' '); // Join the words back into a single string
  }

  const numberToWords = (n) => {
    if (n === 0) return 'zero';

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const thousands = ['', 'thousand', 'million', 'billion'];

    const convertThreeDigits = (n) => {
      if (n < 10) return ones[n];
      if (n < 20) return teens[n - 10];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
      if (n < 1000) return hundreds[Math.floor(n / 100)] + (n % 100 !== 0 ? ' and ' + convertThreeDigits(n % 100) : '');
    };

    let result = '';
    let i = 0;
    while (n > 0) {
      if (n % 1000 !== 0) {
        result = convertThreeDigits(n % 1000) + ' ' + thousands[i] + (result !== '' ? ' ' : '') + result;
      }
      n = Math.floor(n / 1000);
      i++;
    }

    return capitalizeWords(result.trim());
  }


  const generatePDF = async () => {
    const doc = new jsPDF();

    let currentY = 20;

    doc.setFontSize(25);
    doc.text("PURCHASE ORDER", 65, currentY);

    currentY = 39;
    doc.setFontSize(18);
    doc.text("ORDER DETAILS", 10, currentY);

    doc.setFontSize(12);
    const tableColumn = ["SI.No.", "Item Code", "Item Name", "Item Specification", "Quantity", "UoM", "Unit Rate", "Cost"];
    const tableRows = [];
    let totalPrice = 0;
    console.log(order.products)
    cart.forEach((item, index) => {
      tableRows.push([
        index + 1,
        387,
        "OFFICE STAMP",
        item.name,
        item.qty,
        "NUMBER",
        "Rs." + item.price.toFixed(1),
        "Rs." + (item.qty * item.price).toFixed(2)
      ]);
      totalPrice += item.qty * item.price;
    });

    currentY = 45;
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: currentY,
    });
    doc.setFontSize(12);

    currentY = doc.autoTable.previous.finalY + 10
    doc.text("Total Price: Rs." + totalPrice.toFixed(2), 15, currentY);
    currentY += 5
    doc.text("Total Purchase Order Value: Rs." + totalPrice.toFixed(2) + "  (" + numberToWords(totalPrice) + " Only)", 15, currentY);


    currentY += 10
    doc.setFontSize(18);
    doc.text("SHIPMENT DETAILS", 10, currentY);

    doc.setFontSize(12);
    const tableColumn2 = ["SI.No.", "Billing Address", "Delivery Address", "Item Code", "Item Specification", "Quantity"];
    const tableRows2 = [];

    doc.save("purchase_order" + new Date().toLocaleString() + ".pdf");
  }

  return (
    <div className='w-[90%] mb-10'>
      {
        <div className="flex justify-end rounded-2xl bg-slate-400 mt-12">
          <form className="flex flex-col border-2 border-slate-900 p-4 rounded-2xl w-full" onSubmit={(e) => orderConfirm(e, name, empNum, email, phoneno, cart, remark)} >
            <h1 className='mb-4 text-xl'><b>Order Confirmation</b></h1>
            <div className='grid grid-cols-3 gap-3'>
              <div className='flex flex-col'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Employee Name" className="mb-2 p-2 rounded-lg" required />
                <input type="text" value={empNum} onChange={(e) => setEmpNum(e.target.value)} placeholder="Employee Number" className="mb-2 p-2 rounded-lg" required />
              </div>
              <div className='flex flex-col'>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email ID" className="mb-2 p-2 rounded-lg" required />
                <input type="tel" value={phoneno} onChange={e => setPhoneno(e.target.value)} placeholder="Phone Number" className="mb-2 p-2 rounded-lg" required />
              </div>
              <div>
                <textarea name="remark" id="" className='rounded-lg p-2 w-full resize-none h-full' placeholder='Remark' value={remark} onChange={e => setRemark(e.target.value)} required></textarea>
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