import React, { useEffect } from 'react';

const Seal24 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal24/styles.css');
  }, []);

  return (
      <div className="seal1box">
        <div className="seal1stamp">
          <div className="seal1branch-name">ESAF Small Finance Bank Ltd.<br/><p>{branchName} Branch</p></div>
          <div className="seal1pay">PAY</div>
          <div className="seal1officer">Prescribed Officer</div>
        </div>
      </div>
  );
};

export default Seal24;