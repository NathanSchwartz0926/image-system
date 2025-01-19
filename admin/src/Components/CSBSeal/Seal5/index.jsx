import React from 'react';
import { useEffect } from 'react';

const Seal5 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal5/styles.css');
  }, []);


  return (
    <div className="CSB-seal5-container">
      <div className="CSB-seal5-circle-stamp">
        <span>UV/TV<br />Checked</span>
      </div>
    </div>
  );
};

export default Seal5;