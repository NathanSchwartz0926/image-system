import React, { useEffect } from 'react';
// import '../Seal14/styles.css'

const Seal14 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal14/styles.css');
  }, []);

  return (
    <div className="seal14-body">
      <div className="seal14-stamp">
        <div className="seal14-bank-name">For ESAF Small Finance Bank Ltd.</div>
        <div className="seal14-bottom-content">
          <div className="seal14-authorised">Branch Manager</div>
          <div className="seal14-branch">{branchName} Branch</div>
        </div>
      </div>
    </div>
  );
};

export default Seal14;