import React, { useEffect, useState, useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { PageContext } from '../context/PageContext'
import { toast } from 'react-toastify'
import jsPDF from "jspdf";
import "jspdf-autotable";

const Sidebar = () => {

  const { cart, setOrder, newOrder, order, branchInfo, getBranchInfo, managerData } = useContext(PageContext)

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
      address: branchInfo.branchName,
      location: branchInfo.address,
      managerData: managerData,
      state: 0
    };
    console.log(newOrderData)
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

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;

    // Function to add text with handling for page breaks
    const addTextWithPageBreak = (textLines, x, y) => {
      for (let i = 0; i < textLines.length; i++) {
        // Check if we need to add a new page
        if (y + 5 > pageHeight - margin) {
          doc.addPage();
          y = 20; // Reset the y position for new page
        }
        doc.text(textLines[i], x, y);
        y += 5; // Move down for the next line
      }
      return y; // Return the new Y position
    };


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
    currentY = addTextWithPageBreak(["Total Price: Rs." + totalPrice.toFixed(2)], 15, currentY)
    currentY = addTextWithPageBreak(["Total Purchase Order Value: Rs." + totalPrice.toFixed(2) + "  (" + numberToWords(totalPrice) + " Only)"], 15, currentY)

    // doc.text("Total Price: Rs." + totalPrice.toFixed(2), 15, currentY);
    // currentY += 5
    // doc.text("Total Purchase Order Value: Rs." + totalPrice.toFixed(2) + "  (" + numberToWords(totalPrice) + " Only)", 15, currentY);


    currentY += 5
    doc.setFontSize(18);
    currentY = addTextWithPageBreak(["SHIPMENT DETAILS"], 10, currentY)

    // doc.text("SHIPMENT DETAILS", 10, currentY);

    doc.setFontSize(12);
    const tableColumn2 = ["SI.No.", "Billing Address", "Delivery Address", "Item Code", "Item Specification", "Quantity"];
    const tableRows2 = [];
    let billingAddress = "ESAF SMALL FINANCE BANK\nBUILDING NO.VII/83/8 ESAF BHAVAN MANNUTHY P.O THRISSUR Mannuthy Thrissur KL 80651\nGSTIN:32AAECE2619Q1ZH"
    let deliveryAddress = `Office Code:${branchInfo.password}\nOffice Name:${branchInfo.branchName}\n${branchInfo.address}\nContact Person:${name}\nContact Number:${phoneno}\nGSTIN:32AAECE2619Q1ZH`

    cart.forEach((item, index) => {
      tableRows2.push([
        index + 1,
        billingAddress,
        deliveryAddress,
        387,
        item.name,
        item.qty,
      ]);
    });

    currentY += 5;
    doc.autoTable({
      head: [tableColumn2],
      body: tableRows2,
      startY: currentY,
    });


    currentY = doc.autoTable.previous.finalY + 10
    doc.setFontSize(18);
    // doc.text("PAYMENT SCHEDULE", 10, currentY);
    currentY = addTextWithPageBreak(["PAYMENT SCHEDULE"], 10, currentY)
    
    doc.setFontSize(12);
    const tableColumn3 = ["Item Code", "Item Specification", "Payment Term", "Percentage", "Amount", "Payment Type"];
    const tableRows3 = [];


    cart.forEach((item, index) => {
      tableRows3.push([
        387,
        item.name,
        "After delivery, against invoice",
        "100%",
        "Rs." + (item.price * item.qty).toFixed(2),
        "Non-Recurring"

      ]);
    });

    doc.autoTable({
      head: [tableColumn3],
      body: tableRows3,
      startY: currentY,
    });

    currentY = doc.autoTable.previous.finalY + 10
    doc.setFontSize(18);
    currentY = addTextWithPageBreak(["TERMS AND CONDITIONS"], 10, currentY)

    doc.setFontSize(10);

    let terms = ["In case of any damages found at the time of delivery vendor shall replace the material at free of cost.",
      "The specification mentioned in the PO should be strictly ensured and any deviation in this regard will lead to non-payment or attract penalty without prior permission.",
      "Delivery Time - Within 10 days from the date of issue of Purchase order.",
      "Payment Term - 100% Payment shall be released within 30 days after successful completion of delivery and submission of invoice along with delivery confirmation from user.",
      "Vendor shall provide the branch details and branch code specifically in the invoice.",
      "The above purchase order prices are exclusive of government taxes which will be paid extra.",
      "The expected delivery date for the consignment is 18-01-2025.",
      "Before initiating the dispatch, vendor shall coordinate with the person in charge to ensure the readiness of the sites.",
      "The vendor to ensure that the above-mentioned TAT is followed and any deviation from the TAT will lead to non-payment or attract penalty without prior permission.",
      "ESAF Bank reserve the right to terminate this Order and recover the losses arise upon discovery of any unethical practices, including but not limited to fraud, misrepresentation, or any actions that violate applicable laws or ethical standards."]

    const bullet = "• "; // Bullet character
    let bulletListLines = [];

    terms.forEach(item => {
      const formattedItem = bullet + item;
      const lines = doc.splitTextToSize(formattedItem, pageWidth - margin * 2 - 20);
      bulletListLines.push(...lines);
    });


    currentY += 10;
    currentY = addTextWithPageBreak(bulletListLines, 20, currentY);

    doc.setFontSize(14);
    currentY += 10;
    currentY = addTextWithPageBreak(["Documents to be submitted for Payment Process:"], 30, currentY);
    doc.setFontSize(10);
    terms = ["Original Tax Invoice",
      "End of Life (EOL) and End of Support (EOS) details against the model, if applicable to be specified in theinvoices",
      "Test Certificates of Goods/Services supplied, wherever asked for",
      "Certificate of Warranty /Guarantee, wherever asked for ",
      "Insurance cover note/insurance policy (applicable when onus of arranging insurance is on the vendor /transporter)",
      "Work completion certificate if applicable, proof of goods/service delivery as desired by ESFB.",
      "Acknowledged PO/WO/DO issued from ESFB"]
    bulletListLines = [];
    terms.forEach(item => {
      const formattedItem = bullet + item;
      const lines = doc.splitTextToSize(formattedItem, pageWidth - margin * 2 - 20);
      bulletListLines.push(...lines);
    });
    currentY += 5;
    currentY = addTextWithPageBreak(bulletListLines, 20, currentY);


    doc.setFontSize(14);
    currentY += 10;
    currentY = addTextWithPageBreak(["Invoice must bear:"], 30, currentY);
    doc.setFontSize(10);
    terms = ["Vendor name, address, GST No and PAN No",
      "The branch name and code of each shipping branch should be specifically mentioned in the invoice",
      "Full Name, address of recipients of goods or services as per billing address mentioned on PO/WO number with GSTIN",
      "HSN code for supply of goods or services should be mentioned on the invoice.",
      "There should be no overwriting /scribbling on the invoice",
      "The place of supply",
      "Invoice should contain ESFB PO/WO number and ESFB GST registration number as communicated.",
      "The manufacturer's serial number(s) must be listed on invoice for equipment.",
      "Payment to the vendor would be blocked and no payment would be processed in case the vendor is black listed on GST network. Payment would be made once the rating of the vendor improves.",
      "TDS deduction: ESFB shall deduct Income taxes applicable from time to time for the payments to be made to the vendor.",
      "GST TDS: ESFB would deduct GST TDS in case supply made by the vendor are liable to TDS under GST law."]
    bulletListLines = [];
    terms.forEach(item => {
      const formattedItem = bullet + item;
      const lines = doc.splitTextToSize(formattedItem, pageWidth - margin * 2 - 20);
      bulletListLines.push(...lines);
    });
    currentY += 5;
    currentY = addTextWithPageBreak(bulletListLines, 20, currentY);

    terms = ["Vendor shall ensure to submit the hard copy or digitally signed invoices within 30 days after delivery/work completion with all supporting documents to ESAF HEAD OFFICE address (address provided below) for payment procedure and digitally signed invoice must be submitted to invoice@esafbank.com for payment.", 
      "ESAF SMALL FINANCE BANK LTD", 
      "Building No.VII/83/8, ESAF Bhavan, Thrissur - Palakkad National Highway,", 
      "Mannuthy, Thrissur,", 
      "Kerala, 680651", 
      "(Kind Attention ? Invoice Team/Admin Dept.)"]

    bulletListLines = [];
    terms.forEach(item => {
      const lines = doc.splitTextToSize(item, pageWidth - margin * 2 - 40);
      bulletListLines.push(...lines);
    });
    currentY = addTextWithPageBreak(bulletListLines, 50, currentY);


    terms = ["Any disputes in invoices during current financial year should be rectified on or before 30th September of following financial year. If not ESFB will not liable to pay the GST part of the invoice to the vendors at any cost."]
    bulletListLines = [];
    terms.forEach(item => {
      const lines = doc.splitTextToSize(item, pageWidth - margin * 2 - 30);
      bulletListLines.push(...lines);
    });
    currentY = addTextWithPageBreak(bulletListLines, 40, currentY);

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