import React, { useEffect } from 'react';

const Seal23 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal23/styles.css');
  }, []);
  
  return (
    <div className="seal23-body">
      <div className="seal23-stamp">
        <p className="seal23-title">ESAF SMALL FINANCE BANK LTD</p>
      </div>
    </div>
  );
};

export default Seal23;