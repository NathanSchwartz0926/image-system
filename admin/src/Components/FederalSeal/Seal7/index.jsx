import React from 'react';
import { useEffect } from 'react';

const Seal7 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal7/styles.css');
  }, []);
  
  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="FederalSeal7-container">
        <div className="FederalSeal7-head">ORIGINAL SEEN AND VERIFIED</div>
        <div className="FederalSeal7-bank-title">
            <span style={{fontWeight: 900}}>For THE FEDERAL BANK LTD.</span>
        </div>
        <div className="FederalSeal7-branch-details">
            <p>Assistant Manager</p>
            <p className="FederalSeal7-barnch">{branchName} Branch</p>
        </div>
    </div>
  );
};

export default Seal7;