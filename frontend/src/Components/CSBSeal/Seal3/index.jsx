import React from 'react';
import { useEffect } from 'react';
import csblogo from '../../../assets/logocsb.png'

const Seal3 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal3/styles.css');
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
    <div className="seal3-stamp">
      <div className="seal3-header">
        <img src={csblogo} alt="Bank Logo" />
        <div className="seal3-text" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <p className="seal3-title">CSB Bank LTD.,</p>
          <p className="seal3-branch">{branchName} Branch, {districtName}</p>
        </div>
      </div>
      <div className="seal3-date-box">
        <p className="seal3-date" id="current-date">{result}</p>
      </div>
      <div className="seal3-footer">
        <p className="seal3-received">RECEIVED</p>
      </div>
      <div className="seal3-extra-lines">
        <p>Time of Receipt: ..............................................</p>
        <p>Emp. Sign & ID: ...............................................</p>
      </div>
    </div>
  );
};

export default Seal3;