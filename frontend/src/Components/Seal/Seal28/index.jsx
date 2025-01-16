import React, { useEffect } from 'react';

const Seal28 = ({ branchName, managerName }) => {
  useEffect(() => {
    import('../Seal28/styles.css');
  }, []);

  return (
    <div className="seal5box">
      <div className="seal5stamp">
        <div className="seal5name">NATHAN</div>
        <div className="seal5emp-id">Emp. Id. 12859</div>
      </div>
    </div>
  );
};

export default Seal28;