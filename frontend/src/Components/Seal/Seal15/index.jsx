import React, { useEffect } from 'react';
// import '../Seal15/styles.css'

const Seal15 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal15/styles.css');
  }, []);
  
  return (
    <div className="seal15-body">
      <div className="seal15-stamp-container">
        <div className="seal15-top-text">Payees Account Will be Credited on Realisation</div>
        <div className="seal15-bank-name">For ESAF Small Finance Bank Ltd.</div>
        <div className="seal15-branch-name">Authorised Signatory, {branchName} Branch</div>
      </div>
    </div>
  );
};

export default Seal15;