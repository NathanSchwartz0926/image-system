import React, { useEffect } from 'react';

const Seal28 = ({ branchName, managerName, empno }) => {
  useEffect(() => {
    import('../Seal28/styles.css');
  }, []);

  return (
    <div className="seal5box">
      <div className="seal5stamp">
        <div className="seal5name">{managerName}</div>
        <div className="seal5emp-id">Emp. Id. {empno}</div>
      </div>
    </div>
  );
};

export default Seal28;