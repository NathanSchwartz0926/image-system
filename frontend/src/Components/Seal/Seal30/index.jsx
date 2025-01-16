import React, { useEffect } from 'react';

const Seal30 = ({ branchName, managerName, empno }) => {
  useEffect(() => {
    import('../Seal30/styles.css');
  }, []);

  return (
    <div className="stamp-container">
      <p className="text name">{managerName}</p>
      <p className="text designation">Manager</p>
      <p className="text emp-no">Emp. No. {empno}</p>
      <p className="text branch">{branchName} Branch</p>
    </div>
  );
};

export default Seal30;