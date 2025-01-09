import React from 'react';
// import '../Seal7/styles.css'
import { useEffect } from 'react';

const Seal7 = ({ branchName }) => {
  useEffect(() => {
      import('../Seal7/styles.css');
  }, []);
  
  let date = new Date();
  let options = { day: '2-digit', month: 'short', year: 'numeric' };
  let result = date.toLocaleDateString('en-GB', options).toUpperCase();
  
  return (
    <div className="seal7-body">
      <div className="seal7-stamp">
        <div className="seal7-header">
          <p className="seal7-title">ESAF Small Finance Bank Ltd.</p>
          <p className="seal7-branch">{branchName} Branch</p>
        </div>
        <div className="seal7-date-box">
          <p className="seal7-date" id="current-date">{result}</p>
        </div>
        <div className="seal7-footer">
          <p className="seal7-cleared">CLEARED</p>
        </div>
      </div>
    </div>
  );
};

export default Seal7;