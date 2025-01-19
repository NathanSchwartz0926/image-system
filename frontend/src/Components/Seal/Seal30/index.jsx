import React, { useEffect } from 'react';

const Seal30 = ({ branchName, managerName, empno }) => {
  useEffect(() => {
    import('../Seal30/styles.css');
  }, []);

  return (
    <div className="seal30-stamp-container">
      <p className="seal30-text seal30-name">{managerName}</p>
      <p className="seal30-text seal30-designation">Manager</p>
      <p className="seal30-text seal30-emp-no">Emp. No. {empno}</p>
      <p className="seal30-text seal30-branch">{branchName} Branch</p>
    </div>
  );
};

export default Seal30;