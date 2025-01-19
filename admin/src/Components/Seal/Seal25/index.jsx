import React, { useEffect } from 'react';

const Seal25 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal25/styles.css');
  }, []);

  return (
    <div className="seal2box">
      <div className="seal2stamp">
        <div className="seal2branch-name">ESAF Small Finance Bank Ltd.<br/><p>{branchName} Branch</p></div>
        <div className="seal2pay">PAY HALF VALUE</div>
        <div className="seal2officer">Prescribed Officer</div>
      </div>
    </div>
  );
};

export default Seal25;