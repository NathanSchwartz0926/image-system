import React from 'react';
import { useEffect } from 'react';

const Seal6 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal6/styles.css');
  }, []);


  return (
    <div className="seal6-container">
      <div className="seal6-rect-stamp">
        <div className="seal6-top-text">Signature Verified</div>
        <div className="seal6-bottom-text">Sign and Emp ID.</div>
      </div>
    </div>
  );
};

export default Seal6;