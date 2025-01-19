import React, { useEffect } from 'react';

const Seal27 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal27/styles.css');
  }, []);

  return (
    <div className="seal4box">
        <div className="seal4stamp">
            <div className="seal4branch-name">ESAF Small Finance Bank Ltd.<br/><p>{branchName} Branch</p></div>
            <div className="seal4reject">REJECT</div>
            <div className="seal4officer">Prescribed Officer</div>
        </div>
    </div>
  );
};

export default Seal27;