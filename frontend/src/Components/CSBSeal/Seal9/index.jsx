import React from 'react';
import { useEffect } from 'react';

const Seal9 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal9/styles.css');
  }, []);


  return (
    <div className="seal9-stamp-container">
      <div className="seal9-stamp-box" style = {{letterSpacing:"-0.6px"}}>
        <div style = {{display:"flex"}}>
          <p>Duplicate DD No: </p>
          <div style = {{flexGrow: "1", border: "None", borderBottom: "2.5px dotted black"}}></div>
          <p>issued in lieu</p>
        </div>
        <div style = {{display:"flex"}}>
          <p>of Original DD No: </p>
          <div style = {{flexGrow: "1", border: "None", borderBottom: "2.5px dotted black"}}></div>
          <p>reported lost.</p>
        </div>
      </div>
    </div>
  );
};

export default Seal9;