import React from 'react';
import { useEffect } from 'react';
import csblogo from '../../../assets/logocsb.png';

const Seal10 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal10/styles.css');
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

  let date = new Date();
  let options = { day: '2-digit', month: 'short', year: 'numeric' };
  let result = date.toLocaleDateString('en-GB', options).toUpperCase();

  return (
    <div className="seal10-stamp">
      <div className="seal10-header">
        <img src={csblogo} alt="Bank Logo"/>
        <div className="seal10-text" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <p className="seal10-title">CSB Bank Ltd.,</p>
          <p className="seal10-branch">{branchName} Branch, {districtName}</p>
        </div>
      </div>
      <div className="seal10-date-box">
        <p className="seal10-date" id="current-date">{result}</p>
      </div>

      <div className="seal10-extra-lines">
        <p>TOO LATE FOR TODAY'S PROCESSING</p>
      </div>
    </div>
  );
};

export default Seal10;