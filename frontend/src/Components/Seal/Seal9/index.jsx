import React from 'react';
// import '../Seal9/styles.css'
import { useEffect } from 'react';

const Seal9 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal9/styles.css');
  }, []);
  
  return (
    <div className="seal9-body">
      <div className="seal9-stamp-container">
        <div>
          <div className="seal9-top-text">All our Stamps are Cancelled</div>
          <div className="seal9-bank-name">For ESAF Small Finance Bank Ltd.</div>
        </div>
        <div className="seal9-branch-name">Authorised Signatory, {branchName} Branch</div>
      </div>
    </div>
  );
};

export default Seal9;