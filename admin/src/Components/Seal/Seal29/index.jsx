import React, { useEffect } from 'react';

const Seal29 = ({ branchName, managerName }) => {
  useEffect(() => {
    import('../Seal29/styles.css');
  }, []);

  return (
    <div className="seal6box">
      <div className="seal6stamp">
        <div className="seal6role">{managerName}</div>
        <div className="seal6bank-name">Esaf Bank {branchName}</div>
        <div className="seal6branch">Branch: 92880 92671</div>
      </div>
    </div>
  );
};

export default Seal29;