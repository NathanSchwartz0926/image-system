import React from 'react';
import { useEffect } from 'react';

const Seal5 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal5/styles.css');
  }, []);
  
  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="FederalSeal5-stamp">
        <div className="FederalSeal5-title">THE FEDERAL BANK LTD.</div>
        <div className="FederalSeal5-branch">{branchName} Branch</div>
        <div className="FederalSeal5-rectangle"></div>
        <div className="FederalSeal5-account-closed-on">ACCOUNT CLOSED ON</div>
    </div>
  );
};

export default Seal5;