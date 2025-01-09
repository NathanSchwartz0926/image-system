import React, { useEffect } from 'react';
// import '../Seal19/styles.css'

const Seal19 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal19/styles.css');
  }, []);
  
  return (
    <div className="seal19-body">
      <div className="seal19-rectangle">
        <span className="seal19-rectangle-text">De Dupe Done<br />No Multiple CIF Existing</span>
      </div>
    </div>
  );
};

export default Seal19;