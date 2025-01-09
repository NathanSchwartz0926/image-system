import React, { useEffect } from 'react';
// import '../Seal13/styles.css'

const Seal13 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal13/styles.css');
  }, []);

  return (
    <div className="seal13-body">
      <div className="seal13-stamp">
        <div className="seal13-bank-name">For ESAF Small Finance Bank Ltd.</div>
        <div className="seal13-bottom-content">
          <div className="seal13-authorised">Authorised Signatory</div>
          <div className="seal13-branch">{branchName} Branch</div>
        </div>
      </div>
    </div>
  );
};

export default Seal13;