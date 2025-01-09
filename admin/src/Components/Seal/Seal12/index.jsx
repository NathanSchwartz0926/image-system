import React from 'react';
// import '../Seal12/styles.css'
import { useEffect } from 'react';

const Seal12 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal12/styles.css');
  }, []);

  return (
    <div className="seal12-body">
      <div className="seal12-stamp-container">
        <div className="seal12-line seal12-top-line"></div>
        <span className="seal12-text">A/C PAYEE ONLY</span>
        <div className="seal12-line seal12-bottom-line"></div>
      </div>
    </div>
  );
};

export default Seal12;