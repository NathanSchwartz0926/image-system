import React, { useEffect } from 'react';
// import '../Seal16/styles.css'

const Seal16 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal16/styles.css');
  }, []);
  
  return (
    // <div className="seal16-body">
    <div className="seal16-stamp-container">
      <h1>COUNTERFEIT BANK NOTE<br />IMPOUNDED</h1>
      <p>ESAF Small Finance Bank Ltd.</p>
      <div className="seal16-branch">Branch: {branchName}</div>
      <div className="seal16-date">Date:</div>
      <div className="seal16-sign">Sign:</div>
    </div>
    // </div>
  );
};

export default Seal16;