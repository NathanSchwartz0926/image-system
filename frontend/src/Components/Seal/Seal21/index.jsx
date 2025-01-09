import React, { useEffect } from 'react';
// import '../Seal21/styles.css'

const Seal21 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal21/styles.css');
  }, []);
  
  return (
    <div className="seal21-body">
      <div className="seal21-stamp">
        <div className="seal21-minor-text">FOR AND ON BEHALF OF MINOR</div>
        <div className="seal21-parent-text">Father / Mother / Guardian</div>
      </div>
    </div>
  );
};

export default Seal21;