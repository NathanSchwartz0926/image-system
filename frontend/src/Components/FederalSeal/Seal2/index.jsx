import React from 'react';
import { useEffect } from 'react';

const Seal2 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal2/styles.css');
  }, []);
  
  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="FederalSeal2-stamp">
        <div className="FederalSeal2-title">THE FEDERAL BANK LTD.</div>
        <div className="FederalSeal2-branch">{branchName} Branch</div>
        <div className="FederalSeal2-rectangle"></div>
        <div className="FederalSeal2-cash-paid">CASH PAID</div>
    </div>
  );
};

export default Seal2;