import React from 'react';
import { useEffect } from 'react';

const Seal1 = ({ branchInfo }) => {
  useEffect(() => {
    import('../Seal1/styles.css');
  }, []);

  let districtName = "";
  if (branchInfo.address) {
    const splitFullAddress = branchInfo.address.split(",");
    districtName = splitFullAddress[splitFullAddress.length - 2];
  }

  let branchName = "";
  if (branchInfo.branchName) {
    branchName = branchInfo.branchName;
  }
  
  return (
    <div className="seal1-body">
      <div className="seal1">
        <div className="seal1-outer-circle">
          <div className="seal1-middle-circle">
            <div className="seal1-inner-circle">
              <div className="seal1-logo">
              </div>
              <div className="seal1-text center">{branchName}<br />Branch</div>
            </div>
          </div>
        </div>
        <svg width="100" height="100" className="seal1-curve-text">
          <path id="curve" d="M 13.5 50 A 30 30 0 0 1 86 50" fill="none" />
          <text className="seal1-text" textAnchor="middle">
            <textPath className="seal1-text_path" href="#curve" startOffset="50%">
              CSB BANK LIMITED
            </textPath>
          </text>
        </svg>
      </div>
      <div className="seal1-op">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="transparent" stroke="transparent" strokeWidth="2" />

          <path id="smileCurve" d="M 29.5,65 A 20,20 0 0,0 71,65" fill="transparent" />

          <text className="seal1-text1">
            <textPath href="#smileCurve" textAnchor="middle" startOffset="50%" fill="black" fontFamily="Arial"
              fontWeight="bold">
              {districtName}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="seal1-star1">
        <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 61,40 95,40 67,58 78,90 50,70 22,90 33,58 5,40 39,40" fill="black" stroke="black"
            strokeWidth="2" />
        </svg>
      </div>
      <div className="seal1-star2">
        <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 61,40 95,40 67,58 78,90 50,70 22,90 33,58 5,40 39,40" fill="black" stroke="black"
            strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default Seal1;