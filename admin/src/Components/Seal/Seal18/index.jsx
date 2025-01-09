import React, { useEffect } from 'react';
// import '../Seal18/styles.css'

const Seal18 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal18/styles.css');
  }, []);

  return (
    <div className="seal18-container">
      <div className="seal18-stamp">
        <div className="seal18-top-text">Left Thumb Impression of </div>
        <div className="seal18-dotted-line">
          <p>.........................................</p>
        </div>
        <div className="seal18-bold-text">For ESAF Small Finance Bank Ltd.</div>
        <div className="seal18-bottom-text">Authorised Signatory, {branchName} Branch</div>
      </div>
    </div>
  );
};

export default Seal18;