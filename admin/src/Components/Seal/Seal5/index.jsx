import React from 'react';
// import '../Seal5/styles.css'
import { useEffect } from 'react';

const Seal5 = ({ branchName }) => {
  useEffect(() => {
      import('../Seal5/styles.css');
  }, []);
  
  let date = new Date();
  let options = { day: '2-digit', month: 'short', year: 'numeric' };
  let result = date.toLocaleDateString('en-GB', options).toUpperCase();

  return (
    <div className="seal5-body">
      <div className="seal5-stamp-container">
        <div className="seal5-stamp-header">ESAF Small Finance Bank Ltd.</div>
        <div className="seal5-branch">{branchName} Branch</div>
        <div className="seal5-inner-rectangle">
          <div className="seal5-date" id="date">{result}</div>
        </div>
        <div className="seal5-transfer">TRANSFER</div>
        <div className="seal5-options">
          <div className="seal5-option">
            <span className="seal5-option-label">UV Check</span>
            <div className="seal5-checkbox"></div>
          </div>
          <div className="seal5-option">
            <span className="seal5-option-label">Sign Verf</span>
            <div className="seal5-checkbox"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seal5;