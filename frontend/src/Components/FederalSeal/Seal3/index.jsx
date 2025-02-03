import React from 'react';
import { useEffect } from 'react';

const Seal3 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal3/styles.css');
  }, []);
  
  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="FederalSeal3-stamp">
        <div className="FederalSeal3-title">THE FEDERAL BANK LTD.</div>
        <div className="FederalSeal3-branch">{branchName} Branch</div>
        <div className="FederalSeal3-rectangle"></div>
        <div className="FederalSeal3-transfer">TRANSFER</div>
    </div>
  );
};

export default Seal3;