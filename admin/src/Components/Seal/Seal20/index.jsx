import React, { useEffect } from 'react';
// import '../Seal20/styles.css'

const Seal20 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal20/styles.css');
  }, []);
  
  return (
    <div className="seal20-stamp-container">
      <div className="seal20-bank-name">ESAF Small Finance Bank Ltd.</div>
      <div className="seal20-branch-name">{branchName} BRANCH</div>
      <div className="seal20-address">
        NO - 1597, ZERO MILE ROAD, ARARIA P O<br />
        ARARIA DIST, BIHAR- 854311
      </div>
    </div>
  );
};

export default Seal20;