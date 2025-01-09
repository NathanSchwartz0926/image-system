import React from 'react';
// import '../Seal6/styles.css'
import { useEffect } from 'react';

const Seal6 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal6/styles.css');
  }, []);
  
  let date = new Date();
  let options = { day: '2-digit', month: 'short', year: 'numeric' };
  let result = date.toLocaleDateString('en-GB', options).toUpperCase();
  
  return (
    <div className="seal6-body">
      <div className="seal6-stamp">
        <div className="seal6-header">
          <p className="seal6-title">ESAF Small Finance Bank Ltd.</p>
          <p className="seal6-branch">{branchName} Branch</p>
        </div>
        <div className="seal6-date-box">
          <p className="seal6-date" id="current-date">{result}</p>
        </div>
        <div className="seal6-footer">
          <p className="seal6-received">RECEIVED</p>
        </div>
      </div>
    </div>
  );
};

export default Seal6;