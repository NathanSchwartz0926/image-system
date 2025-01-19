import React from 'react';
import { useEffect } from 'react';
import csblogo from '../../../assets/logocsb.png';

const Seal8 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal8/styles.css');
  }, []);

  let districtName = "";
  if (branchInfo.address) {
    const splitFullAddress = branchInfo.address.split(",");
    districtName = splitFullAddress[splitFullAddress.length - 2];
  }

  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="CSB-seal8-stamp">
      <div className="CSB-seal8-logo">
        <img src={csblogo} alt="Bank Logo" />
        <div style={{ display: "flex", width: "100%", alignItems: "flex-end" }}>
          <div className="CSB-seal8-bank-name" style={{ lineHeight: "normal", flexGrow: "1", textAlign: "justify" }}>
            CSB BANK LTD.,
          </div>
          <div className="CSB-seal8-branch-name">{branchName} Br.</div>
        </div>
      </div>
      <div className="CSB-seal8-title">Account Closed</div>
      <div className="CSB-seal8-details">
        Date & Time of Request Received from customer<br />
        Request Accepted by: Name.........................Emp Id :.........................<br />
        Date & Time of Execution in system....................................................<br />
        Request Executed by with Emp Id:......................................................<br />
        Unused Chq book destroyed: Y/N Cheque Nos.:..................................<br />
        Unused Debit Card destroyed: Y / N<br />
        Closure Payment Details:....................................................................<br />
        <span className="CSB-seal8-signature">
          Sign, Name, Emp ID of the BM MCSOP with date<br />
          ..................................................................................................
        </span>
      </div>
    </div>
  );
};

export default Seal8;