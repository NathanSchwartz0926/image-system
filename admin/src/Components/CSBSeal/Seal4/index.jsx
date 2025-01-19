import React from 'react';
import { useEffect } from 'react';

const Seal4 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal4/styles.css');
  }, []);
  
  return (
    <div className="CSB-seal4-stamp">
      <div className="CSB-seal4-box">
        <p className="CSB-seal4-title">SS No.</p>
        <div className="CSB-seal4-line"></div>
      </div>
    </div>
  );
};

export default Seal4;