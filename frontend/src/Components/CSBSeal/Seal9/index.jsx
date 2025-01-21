import React from 'react';
import { useEffect } from 'react';

const Seal9 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal9/styles.css');
  }, []);


  return (
    <div className="CSB-seal9-stamp-container">
      <div className="CSB-seal9-stamp-box" style = {{letterSpacing:"-0.6px"}}>
        <div style = {{display:"flex"}}>
          <p>Duplicate DD No :</p>
          <div className = "CSB-seal9-one" style = {{flexGrow: "1", border: "None", letterSpacing:"normal"}}>..........................</div>
          <p>issued in lieu</p>
        </div>
        <div style = {{display:"flex"}}>
          <p>of Original DD No :</p>
          <div className = "CSB-seal9-one" style = {{flexGrow: "1", border: "None", letterSpacing:"normal"}}>........................</div>
          <p>reported lost.</p>
        </div>
      </div>
    </div>
  );
};

export default Seal9;