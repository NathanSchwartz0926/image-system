import React, { useContext, useEffect, useState, setState } from "react";
import { PageContext } from "../context/PageContext";
import { useParams } from "react-router-dom";

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
  const { oneBranchOrder, updateOrderState, setOrders, designers, production, setProduction, discount } =
    useContext(PageContext);
  const [order, setOrder] = useState(false);

  const fetchOrder = () => {

    const orderData = oneBranchOrder.find((item) => item._id === orderId);
    if (orderData) setOrder(orderData);
  };


  useEffect(() => {
    fetchOrder();
  }, [orderId, oneBranchOrder]);


  const getBranchInfo = (order) => {
    return {
      bankName: order.bankName,
      branchName: order.address,
      address: order.location
    }
  }

  let branchInfo = getBranchInfo(order)

  const onCheckOrderClick = () => {
    updateOrderState(order._id)
  }

  const getSealList = (order) => {
    let branchName = order.address;
    console.log(branchName)
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

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] py-4">
        {order && (
          <div className="border-2 border-slate-800 rounded-lg p-4">

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

                    </div>
                  );
                })}

              </div>
            </div>
            <p
              name="address"
              disabled
              className="text-black border-2 border-slate-800 rounded-lg p-4"
            >
              Remark : {order.remark}
            </p>
            {
              localStorage.getItem("role") > order.state ?
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                  <button
                    className="bg-green-600 uppercase rounded-3xl py-2 px-6 active:scale-90 text-white"
                    onClick={onCheckOrderClick}
                  >
                    <b>Check Order</b>
                  </button>
                </div>
                : ""
            }
          </div>
        )}


      </div>
    </div>
  );
};

export default Order;
