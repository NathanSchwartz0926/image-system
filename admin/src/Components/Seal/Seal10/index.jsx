import React from 'react';
// import '../Seal10/styles.css'
import { useEffect } from 'react';

const Seal10 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal10/styles.css');
  }, []);

  let date = new Date();
  let options = { day: '2-digit', month: 'short', year: 'numeric' };
  let result = date.toLocaleDateString('en-GB', options).toUpperCase();

  return (
    <div className="seal10-body">
      <div className="seal10-stamp">
        <div className="seal10-header">
          <p className="seal10-title">ESAF Small Finance Bank Ltd.</p>
          <p className="seal10-branch">{branchName} Branch</p>
        </div>
        <div className="seal10-date-box">
          <p className="seal10-date" id="current-date">{result}</p>
        </div>
        <div className="seal10-footer">
          <p className="seal10-cash-received">CASH RECEIVED</p>
        </div>
      </div>
    </div>
  );
};

export default Seal10;