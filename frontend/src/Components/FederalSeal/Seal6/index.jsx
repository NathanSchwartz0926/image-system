import React from 'react';
import { useEffect } from 'react';

const Seal6 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal6/styles.css');
  }, []);
  
  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }

  return (
    <div className="FederalSeal6-container">
        <div className="FederalSeal6-bank-title">
             <span style={{fontWeight: "900"}}>For THE FEDERAL BANK LTD.</span>
        </div>
        <div className="FederalSeal6-branch-details">
            <p>Branch Head</p>
            <p>{branchName} Branch</p>
        </div>
    </div>
  );
};

export default Seal6;