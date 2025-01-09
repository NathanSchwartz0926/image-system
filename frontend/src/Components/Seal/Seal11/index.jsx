import React from 'react';
// import '../Seal11/styles.css'
import { useEffect } from 'react';

const Seal11 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal11/styles.css');
  }, []);

  let date = new Date();
  let options = { day: '2-digit', month: 'short', year: 'numeric' };
  let result = date.toLocaleDateString('en-GB', options).toUpperCase();

  return (
    <div className="seal11-body">
      <div className="seal11-stamp-container">
        <div className="seal11-stamp-header">ESAF Small Finance Bank Ltd.</div>
        <div className="seal11-branch">{branchName} Branch</div>
        <div className="seal11-inner-rectangle">
          <div className="seal11-date" id="date">{result}</div>
        </div>
        <div className="seal11-cash">CASH PAID</div>
        <div className="seal11-options">
          <div className="seal11-option">
            <span className="seal11-option-label">UV Check</span>
            <div className="seal11-checkbox"></div>
          </div>
          <div className="seal11-option">
            <span className="seal11-option-label">Sign Verf</span>
            <div className="seal11-checkbox"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seal11;