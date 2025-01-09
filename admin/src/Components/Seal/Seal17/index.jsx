import React, { useEffect } from 'react';
// import '../Seal17/styles.css'

const Seal17 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal17/styles.css');
  }, []);

  return (
    <div className="seal17-body">
      <div className="seal17-stamp-container">
        <div className="seal17-top-text">MUTILATION GUARANTEED</div>
        <div className="seal17-bank-name">For ESAF Small Finance Bank Ltd.</div>
        <div className="seal17-branch-name">Authorised Signatory, {branchName} Branch</div>
      </div>
    </div>
  );
};

export default Seal17;