import React from 'react';
import { useEffect } from 'react';
import csblogo from '../../../assets/logocsb.png';

const Seal7 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal7/styles.css');
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
    <div className="CSB-seal7-stamp-container">
      <div className="CSB-seal7-text">
        <p>Without risk and responsibility on the Bank or any its officials. Customer Signature verified as per our records.</p>
      </div>
      <div className="CSB-seal7-bank-name">
        <img src={csblogo} alt="Logo" style={{marginTop: "5px"}} />
        <div className="flex flex-col" style={{ alignItems: 'center', width: "100%" }}>
          <p>CSB BANK LTD.,</p>
          <div className="CSB-seal7-branch-info">
            {branchName} Branch, {districtName}
          </div>
        </div>
      </div>
      <div className="CSB-seal7-authorized">
        Authorised Signatory
      </div>
    </div>
  );
};

export default Seal7;