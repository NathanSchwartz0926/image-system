import React, { useEffect } from 'react';

const Seal26 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal26/styles.css');
  }, []);

  return (
    <div className="seal3box">
        <div className="seal3stamp">
            <div className="seal3branch-name">ESAF Small Finance Bank Ltd.<br/><p>{branchName} Branch</p></div>
            <div className="seal3pay">PAY HALF VALUE</div>
            <div className="seal3receiver">Receiver's Initials</div>
        </div>
    </div>
  );
};

export default Seal26;