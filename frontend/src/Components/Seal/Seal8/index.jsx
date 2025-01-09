import React from 'react';
// import '../Seal8/styles.css';
import { useEffect } from 'react';

const Seal8 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal8/styles.css');
  }, []);
  
  let date = new Date();
  let options = { day: '2-digit', month: 'short', year: 'numeric' };
  let result = date.toLocaleDateString('en-GB', options).toUpperCase();
  
  return (
    <div className="seal8-body">
      <div className="seal8-stamp">
        <div className="seal8-header">
          <p className="seal8-title">ESAF Small Finance Bank Ltd.</p>
          <p className="seal8-branch">{branchName} Branch</p>
        </div>
        <div className="seal8-date-box">
          <p className="seal8-date" id="current-date">{result}</p>
        </div>
        <div className="seal8-footer">
          <p className="seal8-late">TOO LATE FOR <br/>TODAY'S CLEARING</p>
        </div>
      </div>
    </div>
  );
};

export default Seal8;