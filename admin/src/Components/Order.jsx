import React, { useContext, useEffect, useState, setState } from "react";
import { PageContext } from "../Context/PageContext";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import role_states from "../assets/roleStates";


import Seal1 from '../Components/Seal/Seal1';
import Seal2 from '../Components/Seal/Seal2';
import Seal3 from '../Components/Seal/Seal3';
import Seal4 from '../Components/Seal/Seal4';
import Seal5 from '../Components/Seal/Seal5';
import Seal6 from '../Components/Seal/Seal6';
import Seal7 from '../Components/Seal/Seal7';
import Seal8 from '../Components/Seal/Seal8';
import Seal9 from '../Components/Seal/Seal9';
import Seal10 from '../Components/Seal/Seal10';
import Seal11 from '../Components/Seal/Seal11';
import Seal12 from '../Components/Seal/Seal12';
import Seal13 from '../Components/Seal/Seal13';
import Seal14 from '../Components/Seal/Seal14';
import Seal15 from '../Components/Seal/Seal15';
import Seal16 from '../Components/Seal/Seal16';
import Seal17 from '../Components/Seal/Seal17';
import Seal18 from '../Components/Seal/Seal18';
import Seal19 from '../Components/Seal/Seal19';
import Seal20 from '../Components/Seal/Seal20';
import Seal21 from '../Components/Seal/Seal21';
import Seal22 from '../Components/Seal/Seal22';
import Seal23 from '../Components/Seal/Seal23';
import Seal24 from '../Components/Seal/Seal24';
import Seal25 from '../Components/Seal/Seal25';
import Seal26 from '../Components/Seal/Seal26';
import Seal27 from '../Components/Seal/Seal27';
import Seal28 from '../Components/Seal/Seal28';
import Seal29 from '../Components/Seal/Seal29';
import Seal30 from '../Components/Seal/Seal30';

import CSBSeal1 from '../Components/CSBSeal/Seal1';
import CSBSeal2 from '../Components/CSBSeal/Seal2';
import CSBSeal3 from '../Components/CSBSeal/Seal3';
import CSBSeal4 from '../Components/CSBSeal/Seal4';
import CSBSeal5 from '../Components/CSBSeal/Seal5';
import CSBSeal6 from '../Components/CSBSeal/Seal6';
import CSBSeal7 from '../Components/CSBSeal/Seal7';
import CSBSeal8 from '../Components/CSBSeal/Seal8';
import CSBSeal9 from '../Components/CSBSeal/Seal9';
import CSBSeal10 from '../Components/CSBSeal/Seal10';
import CSBSeal11 from '../Components/CSBSeal/Seal11';

import FederalSeal1 from '../Components/FederalSeal/Seal1'
import FederalSeal2 from '../Components/FederalSeal/Seal2'
import FederalSeal3 from '../Components/FederalSeal/Seal3'
import FederalSeal4 from '../Components/FederalSeal/Seal4'
import FederalSeal5 from '../Components/FederalSeal/Seal5'
import FederalSeal6 from '../Components/FederalSeal/Seal6'
import FederalSeal7 from '../Components/FederalSeal/Seal7'


const Order = () => {
  const { orderId } = useParams();
  const { orders, setOrders, designers, production, setProduction, discount } =
    useContext(PageContext);
  const [order, setOrder] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [designer, setDesigner] = useState([]);


  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const fetchOrder = () => {
    const orderData = orders.find((item) => item._id === orderId);
    if (orderData) setOrder(orderData);
  };

  const updateOrder = (newSelectedProducts) => {
    setOrder((prevOrder) => {
      const updatedOrder = {
        ...prevOrder,
        selectedProducts: [...newSelectedProducts],
      };

      updateOrders(updatedOrder);
      return updatedOrder;
    });
  };

  const updateOrders = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === updatedOrder._id ? updatedOrder : order
      )
    );
  };

  const onCheckHandler = (item, isChecked) => {
    if (isChecked) {
      setSelectedProducts((prevSelected) => {
        if (prevSelected.name === item.name) {
          return [...prevSelected];
        } else {
          return [...prevSelected, item];
        }
      });
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((product) => product.name !== item.name)
      );
    }
  };

  const selectAllProducts = () => {
    if (selectedProducts.length === order.products.length) {
      // If all products are already selected, clear the selection
      setSelectedProducts([]);
    } else {
      // Otherwise, select all products
      setSelectedProducts(order.products.map((item) => item));
    }
  };

  const onClickAccept = async () => {
    setOpen(true);
    updateOrder(selectedProducts);
  };

  const selectDesigner = (designer, isChecked) => {
    if (isChecked) {
      setDesigner((prevDesigner) => {
        if (prevDesigner === designer) {
          return [...prevDesigner];
        } else {
          return [...prevDesigner, designer];
        }
      });
    } else {
      setDesigner((prevDesigner) =>
        prevDesigner.filter((designerName) => designerName !== designer)
      );
    }
  };

  const assignDesigners = () => {
    setProduction((preProduction) => {
      return [...preProduction, { order: order, designer: designer, level: 0 }];
    });
    setOpen(false);
    toast.success("Production Started", {
      hideProgressBar: true,
      autoClose: 2000,
    });
    generatePDF();
  };

  const printHandler = () => {
    const printWindow = window.open("", "", "width=800,height=600");

    const products = order.selectedProducts;

    let Amount = 0;
    products.map((item) => (Amount += item.totalAmt));

    console.log(products);
    const prod = products
      .map((item, index) => {
        return `
          <tr>
            <td style="text-align:center;">${index + 1}</td>
            <td>${item.name}</td>
            <td style="text-align:center;">${item.qty}</td>
            <td style="text-align:center;">${item.totalAmt}</td>
            <td style="text-align:center;">${discount}</td>
            <td style="text-align:center;">${item.totalAmt - item.totalAmt * (discount / 100)
          }</td>
          </tr>
        `;
      })
      .join("");

    printWindow.document.write(`
      <html>
        <head>
          <title>Bill</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { border-collapse: collapse; width:100% }
            td { border:2px solid black; padding : 5px }
          </style>
        </head>
        <body>
          <h1 style="text-align:center;">ORDER FROM</h1>
          <br />
          <div style="width:100%; display: grid; grid-template-columns: 1fr 1fr;">
            <p>EMPLOYEE NUM : ${order.EmpNum}</p>
            <p>ORDER : ${order.orderNumber}</p>
          </div>
          <div style="width:100%; display: grid; grid-template-columns: 1fr 1fr;">
            <p>BANK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${order.bankName}</p>
            <p>DATE &nbsp;&nbsp;&nbsp;: ${order.Date}</p>
          </div>
          <div style="width:100%; display: grid; grid-template-columns: 1fr 1fr;">
            <p>PHONE NO. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${order.phoneno}</p>
            <p>EMAIL &nbsp;&nbsp;: ${order.email}</p>
          </div>
          <div style="width:100%">
            <p>ADDRESS : ${order.address}</p>
          </div>
          <h3>ORDER DETAILS</h3>
          <table style="font-size: 10px;">
            <thead>
              <tr>
                <td style="text-align:center;"><b>NO.</b></td>
                <td style="text-align:center;"><b>ITEM DESCRIPTION</b></td>
                <td style="text-align:center;"><b>QTY</b></td>
                <td style="text-align:center;"><b>PRICE</b></td>
                <td style="text-align:center;"><b>DISCOUNT</b></td>
                <td style="text-align:center;"><b>TOTAL</b></td>
              </tr>
            </thead>
            <tbody>
              ${prod}
            </tbody>
            <tfoot>
              <tr>
                <td>METHOD</td><td colspan="3"></td><td>TAX</td><td></td>
              </tr>
              <tr>
                <td>DATE</td><td colspan="3"></td><td>SHIPPING</td><td></td>
              </tr>
              <tr>
                <td>DATE RECEIVED</td><td colspan="3"></td><td>TOTAL</td><td style="text-align:center;">${Amount}</td>
              </tr>
              <tr>
                <td>DESIGNER</td><td colspan="5">${designer[0]}</td>
              </tr>
            </tfoot>
          </table>
          <h4>NOTES</h4>
          <textarea style="width:100%; height: 100px; resize:none;"></textarea>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  const detailTextPerSeal = (bankName, index, qty, price) => {
    switch (bankName) {
      case "ESAF Bank":
        return esafDetailTextPerSeal(index, qty);
      case "CSB Bank":
        return csbDetailTextPerSeal(index, qty, price);
      default:
        return ""
    }
  }

  const csbDetailTextPerSeal = (index, qty, price) => {
    if (qty == 1)
      switch (index) {
        case 2:
        case 9:
          return `     Rubber Stamp with Date\n            (Polimer Stamp)\n                  RS.${price}/-`
        default:
          return `              Rubber Stamp\n            (Polimer  Stamp)\n                    RS.${price}/-`
      }
    else
      switch (index) {
        case 2:
        case 9:
          return ` Rubber Stamp with Date × ${qty}\n            (Polimer Stamp)\n                  RS.${price}/-`
        default:
          return `          Rubber Stamp × ${qty}\n            (Polimer  Stamp)\n                    RS.${price}/-`
      }
  }

  const esafDetailTextPerSeal = (index, qty) => {
    if (qty == 1)
      switch (index) {
        case 4:
        case 5:
        case 6:
        case 7:
        case 9:
        case 10:
          return "     Rubber Stamp with Date\n            (Polimer Stamp)\n                  RS.260/-"
        case 22:
          return "      Special Crossing stamp\n             Rubber Stamp\n             35mm × 4mm"
        default:
          return "              Rubber Stamp\n            (Polimer  Stamp)\n                    RS.70/-"
      }
    else
      switch (index) {
        case 4:
        case 5:
        case 6:
        case 7:
        case 9:
        case 10:
          return ` Rubber Stamp with Date × ${qty}\n            (Polimer Stamp)\n                  RS.260/-`
        case 22:
          return `  Special Crossing stamp × ${qty}\n             Rubber Stamp\n             35mm × 4mm`
        default:
          return `          Rubber Stamp × ${qty}\n            (Polimer  Stamp)\n                    RS.70/-`
      }
  }


  const generatePDF = async () => {
    const doc = new jsPDF();

    // First page content
    doc.setFontSize(25);
    doc.text("IMAGE SYSTEMS", 70, 20);
    doc.setFontSize(20);
    doc.text("ORDER FORM", 83, 30);
    doc.setFontSize(12);
    doc.text("EMPLOYEE NUM:" + order.EmpNum, 10, 50);
    doc.text("ORDER:" + order.orderNumber, 120, 50);
    doc.text("BANK:" + order.bankName, 10, 60);
    doc.text("DATE:" + order.Date, 120, 60);
    doc.text("PHONE NO:" + order.phoneno, 10, 70);
    doc.text("EMAIL:" + order.email, 120, 70);
    doc.text("ADDRESS:" + order.address, 10, 80);

    doc.text("ORDER DETAILS", 10, 95);


    // Create table
    const tableColumn = ["NO.", "ITEM DESCRIPTION", "QTY", "PRICE", "DISCOUNT", "TOTAL"];
    const tableRows = [];
    let totalPrice = 0;

    order.selectedProducts.forEach((item, index) => {
      tableRows.push([
        index + 1,
        item.name,
        item.qty,
        item.totalAmt,
        discount,
        item.totalAmt - item.totalAmt * (discount / 100),
      ]);
      totalPrice += item.totalAmt - item.totalAmt * (discount / 100);
    });

    tableRows.push(["METHOD", { content: "", colSpan: 3 }, "TAX", ""])
    tableRows.push(["DATE", { content: "", colSpan: 3 }, "SHIPPING", ""])
    tableRows.push(["DATE RECEIVED", { content: "", colSpan: 3 }, "TOTAL", totalPrice])
    tableRows.push(["Designer", { content: "", colSpan: 5 }])

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 100,
    });

    // Second page: Render images of components
    doc.setFontSize(10);

    const renderComponentToImage = async (component, index) => {
      const container = document.getElementById("seal" + index + "component");

      const canvas = await html2canvas(container, {
        scale: 2, // Higher scale for better resolution
        useCORS: true, // Ensures cross-origin images load correctly
        allowTaint: false, // Prevents tainted canvas issues
        backgroundColor: null, // Captures transparent backgrounds
        width: container.offsetWidth + 10, // Ensures correct width
        height: container.offsetHeight + 10, // Ensures correct height
      });
      return canvas.toDataURL("image/png");
    };


    const componentImages = await Promise.all(
      selectedSeals.map(async (component, index) => await renderComponentToImage(component, index))
    );

    const cols = 3; // Number of columns
    const rows = 5; // Number of rows
    const cellWidth = 50; // Width of each grid cell
    const cellHeight = 40; // Height of each grid cell
    const margin = 10; // Margin between cells
    const perPage = cols * rows;

    const arrangeComponentsOnPage = async (images, startIndex, endIndex) => {
      for (let i = startIndex; i < endIndex; i++) {
        const src = images[i];
        const img = new Image();
        img.src = src;

        await new Promise((resolve) => {
          img.onload = async () => {
            const aspectRatio = img.width / img.height;

            let drawWidth, drawHeight;

            if (aspectRatio > 1) {
              // Landscape image
              drawWidth = Math.min(cellWidth, img.width);
              drawHeight = drawWidth / aspectRatio;
            } else {
              // Portrait or square image
              drawHeight = Math.min(cellHeight, img.height);
              drawWidth = drawHeight * aspectRatio;
            }

            // Center the image within the cell
            const cellX = (i % cols) * (cellWidth + margin) + 20;
            const cellY = Math.floor((i % perPage) / cols) * (cellHeight + margin) + 20;

            const xPosition = cellX + (cellWidth - drawWidth) / 2; // Center horizontally
            const yPosition = cellY + (cellHeight - drawHeight) / 2; // Center vertically

            await doc.addImage(src, "PNG", xPosition, yPosition, drawWidth, drawHeight);
            doc.text(detailTextPerSeal(order.bankName, i, selectedProducts[i].qty, selectedProducts[i].price), cellX, cellY + cellHeight + 1)
            resolve();
          };
        });
      }
    };

    for (let i = 0; i < componentImages.length; i += cols * rows) {
      doc.addPage();
      const end = Math.min(i + cols * rows, componentImages.length);
      await arrangeComponentsOnPage(componentImages, i, end);
    }

    doc.save("order.pdf");
  };


  useEffect(() => {
    fetchOrder();
  }, [orderId, orders]);

  const [images, setImages] = useState({});

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const branchName = order.address
  //       const fetchedImages = {};

  //       if(order)
  //         await Promise.all(
  //           order.products.map(async (product) => {
  //             const params = new URLSearchParams({ branchName, imageName: product.img });
  //             const response = await fetch(`${backendUrl}/api/genImage/get-image-with-date?${params.toString()}`);
  //             if (!response.ok) {
  //               throw new Error("Failed to fetch image for " + product.name);
  //             }
  //             const blob = await response.blob();
  //             const objectURL = URL.createObjectURL(blob);
  //             fetchedImages[product.name] = objectURL;
  //           })
  //         );

  //       setImages(fetchedImages);
  //     } catch (error) {
  //       console.error("Error fetching images:", error);
  //     }
  //   };

  //   fetchImages();
  // }, [order.products]);

  const getBranchInfo = (order) => {
    return {
      bankName: order.bankName,
      branchName: order.address,
      address: order.location
    }
  }

  let branchInfo = getBranchInfo(order)

  const getSealList = (order) => {
    let branchName = order.address;
    switch (order.bankName) {
      case "ESAF Bank":
        return [
          <Seal1 branchName={branchName} />, <Seal2 branchName={branchName} />, <Seal3 branchName={branchName} />, <Seal4 branchName={branchName} />,
          <Seal5 branchName={branchName} />, <Seal6 branchName={branchName} />, <Seal7 branchName={branchName} />, <Seal8 branchName={branchName} />,
          <Seal9 branchName={branchName} />, <Seal10 branchName={branchName} />, <Seal11 branchName={branchName} />, <Seal12 branchName={branchName} />,
          <Seal13 branchName={branchName} />, <Seal14 branchName={branchName} />, <Seal15 branchName={branchName} />, <Seal16 branchName={branchName} />,
          <Seal17 branchName={branchName} />, <Seal18 branchName={branchName} />, <Seal19 branchName={branchName} />, <Seal20 branchName={branchName} />,
          <Seal21 branchName={branchName} />, <Seal22 branchName={branchName} />, <Seal23 branchName={branchName} />, <Seal24 branchName={branchName} />,
          <Seal25 branchName={branchName} />, <Seal26 branchName={branchName} />, <Seal27 branchName={branchName} />,
          <Seal28 branchName={branchName} managerName={order.managerData.ESAF.manager28} empno={order.managerData.ESAF.empno28} />,
          <Seal29 branchName={branchName} managerName={order.managerData.ESAF.manager29} />,
          <Seal30 branchName={branchName} managerName={order.managerData.ESAF.manager30} empno={order.managerData.ESAF.empno30} />
        ];
      case "CSB Bank":
        return [<CSBSeal1 branchInfo={branchInfo} />, <CSBSeal2 branchInfo={branchInfo} managerName={order.managerData.CSB.manager2} empno={order.managerData.CSB.empno2} />, <CSBSeal3 branchInfo={branchInfo} />,
        <CSBSeal4 branchInfo={branchInfo} />, <CSBSeal5 branchInfo={branchInfo} />, <CSBSeal6 branchInfo={branchInfo} />,
        <CSBSeal7 branchInfo={branchInfo} />, <CSBSeal8 branchInfo={branchInfo} />, <CSBSeal9 branchInfo={branchInfo} />,
        <CSBSeal10 branchInfo={branchInfo} />, <CSBSeal11 branchInfo={branchInfo} />,
        ];
      case "Federal Bank":
        return [<FederalSeal1 branchInfo={branchInfo} />, <FederalSeal2 branchInfo={branchInfo} />, <FederalSeal3 branchInfo={branchInfo} />,
        <FederalSeal4 branchInfo={branchInfo} />, <FederalSeal5 branchInfo={branchInfo} />, <FederalSeal6 branchInfo={branchInfo} />,
        <FederalSeal7 branchInfo={branchInfo} />,
        ];
      default:
        return [];
    }
  }

  const seals = getSealList(order)
  const selectedSeals = []
  selectedProducts.map((item => {
    selectedSeals.push(seals[item.img])
  }))
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] py-4">
        <Navbar title={"Order"} />
        {order && (
          <div className="border-2 border-slate-800 rounded-lg p-4">
            <div className="mb-4 flex justify-center">
              <img src={order.bankLogo} alt="logo" className="w-64" />
            </div>
            <div className="grid grid-cols-2">
              <div className="px-2 mb-2">
                <p className="mb-1">
                  <b>Employee Number : {order.EmpNum}</b>
                </p>
                <p>
                  <b>Order From : {order.bankName}</b>
                </p>
              </div>
              <div className="px-2 ml-40">
                <p className="mb-1">
                  <b>Date : {order.Date}</b>
                </p>
                <p>
                  <b>Time : {order.Time}</b>
                </p>
              </div>
              <div className="px-2 mb-2">
                <p className="mb-1">
                  <b>Emplyee Name: {order.name}</b>
                </p>
                <p>
                  <b>Mobile Number : {order.phoneno}</b>
                </p>
              </div>
              <div className="px-2 mb-2 ml-40">
                <p className="mb-1">
                  <b>Mail Id : {order.email}</b>
                </p>
                <p className="mb-1">
                  <b>Branch: {order.address}</b>
                </p>
              </div>
              <div className="px-2 mb-2">
                <p className="mb-1">
                  <b>Status : {role_states[order.state]}</b>
                </p>
              </div>
            </div>
            <div className="p-2 mb-3">
              <p className="text-2xl mb-1">Products</p>
              <div className="grid grid-cols-2 gap-3">
                {order.products.map((item, index) => {
                  return (
                    <div
                      className="border-2 border-black rounded-lg flex p-3"
                      key={index}
                    >
                      <div className="flex flex-col flex-1 justify-center items-center" >
                        <div
                          style={{
                            textAlign: "center",
                            transition: "transform 0.3s ease", // Smooth transition
                            transformOrigin: "center", // Zoom from center
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.5)")} // Zoom in
                          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset zoom
                          id={"seal" + index + "component"}
                        >
                          {
                            // images[item.name] ? (
                            //   <img
                            //     src={images[item.name]}
                            //     alt={item.name}
                            //   />
                            // ) : (
                            //   <p>Loading image...</p>
                            // )
                            seals[item.img]
                          }
                        </div>

                        <div className="flex flex-col ml-4 mt-2 items-start text-sm">
                          <span>
                            <b>PRODUCT : {item.name}</b>
                          </span>
                          <span>
                            <b>QUANTITY : {item.qty}</b>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-end">
                        <input
                          type="checkbox"
                          className="w-8 h-8"
                          checked={selectedProducts.includes(item)}
                          onChange={(e) =>
                            onCheckHandler(item, e.target.checked)
                          }
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="col-span-2 flex justify-center mt-2">
                  <button
                    onClick={() => selectAllProducts(order.product)}
                    className="bg-black text-white p-3 w-32"
                  >
                    Select All
                  </button>
                </div>
              </div>
            </div>
            <p
              name="address"
              disabled
              className="text-black border-2 border-slate-800 rounded-lg p-4"
            >
              Remark : {order.remark}
            </p>
          </div>
        )}
        {
          <div className="border-2 border-slate-800 rounded-lg p-4 mt-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl">Selected Product For Production</h1>
              <span className="border-2 py-1 px-3 border-black rounded-full text-xl">
                <b>
                  {selectedProducts != undefined ? selectedProducts.length : 0}
                </b>
              </span>
            </div>
            <div className="ml-8 mt-2">
              {selectedProducts &&
                selectedProducts.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-start gap-2 items-center"
                    >
                      <label>
                        <input
                          value="wedding-gift"
                          className="peer cursor-pointer hidden after:opacity-100"
                          readOnly
                          checked="checked"
                          type="checkbox"
                        />
                        <span className="inline-block w-4 h-5 border-2 relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-[#333] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"></span>
                      </label>
                      <p className="uppercase">
                        <b>{item.name}</b>
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="w-full mt-2 flex justify-center">
              {selectedProducts != undefined ? (
                selectedProducts.length != 0 && order.state == 1 ? (
                  <button
                    className="bg-green-600 uppercase rounded-3xl py-2 px-6 active:scale-90 text-white"
                    onClick={onClickAccept}
                  >
                    <b>Start Production</b>
                  </button>
                ) : null
              ) : null}
            </div>
          </div>
        }
        {open && (
          <div className="isolate aspect-video bg-white/70 shadow-lg ring-1 ring-black/5 rounded-lg w-72 h-52 fixed top-[40%] left-[40%] flex flex-col justify-center items-center">
            <button
              className="absolute top-3 right-3 bg-black rounded-full w-7 pb-1 text-white"
              onClick={() => setOpen(false)}
            >
              x
            </button>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-xl">
                <b>Choose a Designer</b>
              </h3>
              <div className="flex flex-col my-2 self-center">
                {designers.map((designer, index) => (
                  <label htmlFor="name" key={index}>
                    <input
                      type="checkbox"
                      id="name"
                      value={designer.name}
                      onChange={(e) =>
                        selectDesigner(e.target.value, e.target.checked)
                      }
                    />{" "}
                    {designer.name}
                  </label>
                ))}
              </div>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-xl"
                onClick={assignDesigners}
              >
                Assign
              </button>
              {/* <button className='bg-orange-600 text-white py-2 px-4 rounded-xl' onClick={()=>updateOrders(orderId)} >Start Production</button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
