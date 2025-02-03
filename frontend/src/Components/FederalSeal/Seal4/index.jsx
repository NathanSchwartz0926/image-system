import React from 'react';
import { useEffect } from 'react';

const Seal4 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal4/styles.css');
  }, []);
  
  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="FederalSeal4-stamp">
        <div className="FederalSeal4-title">THE FEDERAL BANK LTD.</div>
        <div className="FederalSeal4-branch">{branchName} Branch</div>
        <div className="FederalSeal4-rectangle"></div>
        <div className="FederalSeal4-cts-clearing">CTS CLEARING</div>
    </div>
  );
};

export default Seal4;