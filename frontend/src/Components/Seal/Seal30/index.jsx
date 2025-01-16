import React, { useEffect } from 'react';

const Seal30 = ({ branchName, managerName }) => {
  useEffect(() => {
    import('../Seal30/styles.css');
  }, []);

  return (
    <div className="stamp-container">
      <p className="text name">{managerName}</p>
      <p className="text designation">Manager</p>
      <p className="text emp-no">Emp. No. 12859</p>
      <p className="text branch">{branchName} Branch</p>
    </div>
  );
};

export default Seal30;