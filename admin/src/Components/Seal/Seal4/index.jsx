import React from 'react';
import { useEffect } from 'react';

const Seal4 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal4/styles.css');
  }, []);
  
  return (
    <div className="seal4-seal">
      <div className="seal4-bank-name">ESAF Small Finance Bank Ltd.</div>
      <div className="seal4-branch-name">{branchName} Branch</div>
      <div className="seal4-verified">ORIGINAL VERIFIED</div>
      
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
        <div className="seal4-one">
          <div className="seal4-details">Name:</div>
          <div className="seal4-details1">Signature:</div>
        </div>
        <div className="seal4-two">
          <div className="seal4-details">Date:</div>
          <div className="seal4-details1">EMP NO:</div>
        </div>
      </div>
    </div>
  );
};

export default Seal4;