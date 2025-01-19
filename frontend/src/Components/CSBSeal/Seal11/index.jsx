import React, { useEffect } from 'react';
import csblogo from '../../../assets/logocsb.png';

const Seal11 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal11/styles.css');
  }, []);

  let districtName = "";
  if (branchInfo?.address) { // Optional chaining for safety
    const splitFullAddress = branchInfo.address.split(",");
    districtName = splitFullAddress[splitFullAddress.length - 2];
  }

  let branchName = branchInfo?.branchName || ""; // Optional chaining for safety

  return (
    <div className="CSB-seal11-stamp">
      <div className="CSB-seal11-branch">
        <img src={csblogo} alt="CSB Bank Logo" className="CSB-seal11-logo" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", lineHeight: "20px" }}>
          <div className="CSB-seal11-bankName" style={{ marginBottom: "-3px" }}>CSB BANK LTD.,</div>
          <div className="CSB-seal11-branchName">{branchName} Branch, {districtName}</div>
        </div>
      </div>
      <div className="CSB-seal11-stop-payment">
        STOP PAYMENT
      </div>
      <div className="CSB-seal11-details">
        Date & Time of Receipt From Customer : <br />
        Request Accepted By (Emp ID) : <br />
        Date & Time of Execution in System : <br />
        Cheque Numbers Stopped : <br />
        Request Executed by (Emp ID) :
      </div>
    </div>
  );
};

export default Seal11;