import React from 'react';
import { useEffect } from 'react';

const Seal1 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal1/styles.css');
  }, []);
  
  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="FederalSeal1-stamp">
        <div className="FederalSeal1-title">THE FEDERAL BANK LTD.</div>
        <div className="FederalSeal1-branch">{branchName} Branch</div>
        <div className="FederalSeal1-rectangle"></div>
        <div className="FederalSeal1-cash-received">CASH RECEIVED</div>
    </div>
  );
};

export default Seal1;