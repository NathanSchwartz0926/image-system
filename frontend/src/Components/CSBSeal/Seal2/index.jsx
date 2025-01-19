import React, { useEffect } from 'react';
import csblogo from '../../../assets/logocsb.png';

const Seal2 = ({ branchInfo, empno, managerName }) => {
  useEffect(() => {
    import('../Seal2/styles.css');
  }, []);

  return (
    <div className = "seal2-stamp">
      <img src = {csblogo} alt = "CSB Bank Logo"/>
      <div style = {{flexGrow:1 }} />
      <div className = "seal2-managerName">{managerName}</div>
      <div className = "seal2-empno">{`Branch Manger (${empno})`}</div>
    </div>
  )

}

export default Seal2