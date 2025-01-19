import React from 'react';
// import '../Seal3/styles.css'
import { useEffect } from 'react';

const Seal3 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal3/styles.css');
  }, []);
  
  return (
    <div className="seal3-body">
      <div className="seal3-seal">
        <div className="seal3-outer-circle">
          <div className="seal3-middle-circle">
            <div className="seal3-inner-circle">
              <div className="seal3-logo">
              </div>
              <div className="seal3-text seal3-center">UV Verified</div>
            </div>
          </div>
        </div>
        <svg width="100" height="103" className="seal3-curve-text">
          <path id="curve" d="M 13 50 A 30 30 0 0 1 86 50" fill="none" />
          <text className="seal3-text" textAnchor="middle">
            <textPath className="seal3-text_path" href="#curve" startOffset="50%" fontSize="7.8" fontFamily="arial">
              ESAF Small Finance Bank Ltd.
            </textPath>
          </text>
        </svg>
      </div>
      <div className="seal3-op">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="transparent" stroke="transparent" strokeWidth="2" />

          <path id="smileCurve" d="M 30,65 A 20,19 0 0,0 70,65" fill="transparent" />

          <text className="seal3-text1">
            <textPath href="#smileCurve" textAnchor="middle" startOffset="50%" fontSize="4.5" fill="black" fontFamily="Arial">
              {branchName} Branch
            </textPath>
          </text>
        </svg>
      </div>
      <div className="seal3-star1">
        <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="50,10 61,40 95,40 67,58 78,90 50,70 22,90 33,58 5,40 39,40"
            fill="black"
            stroke="black"
            strokeWidth="2" />
        </svg>
      </div>
      <div className="seal3-star2">
        <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="50,10 61,40 95,40 67,58 78,90 50,70 22,90 33,58 5,40 39,40"
            fill="black"
            stroke="black"
            strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default Seal3;