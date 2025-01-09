import React from 'react';
import { useEffect } from 'react';

const Seal2 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal2/styles.css');
  }, []);

  return (
    <div className="seal2-body">
      <div className="seal2-seal">
        <div className="seal2-outer-circle">
          <div className="seal2-middle-circle">
            <div className="seal2-inner-circle">
              <div className="seal2-logo">
                {/* Place for Logo, if needed */}
              </div>
              <div className="seal2-text seal2-center">Signature<br />Verified</div>
            </div>
          </div>
        </div>
        <svg width="100" height="104" className="seal2-curve-text">
          <path id="curve" d="M 13 50 A 30 30 0 0 1 86 50" fill="none" />
          <text className="seal2-text" textAnchor="middle">
            <textPath className="seal2-text_path" href="#curve" startOffset="50%">
              ESAF Small Finance Bank Ltd.
            </textPath>
          </text>
        </svg>
      </div>
      <div className="seal2-op">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="transparent" stroke="transparent" strokeWidth="2" />
          <path id="smileCurve" d="M 30,65 A 20,19 0 0,0 70,65" fill="transparent" />
          <text className="seal2-text1">
            <textPath href="#smileCurve" textAnchor="middle" startOffset="50%" fontSize="4.5px" fill="black" fontFamily="Arial" fontWeight="bold">
              {branchName} Branch
            </textPath>
          </text>
        </svg>
      </div>
      <div className="seal2-star1">
        <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="50,10 61,40 95,40 67,58 78,90 50,70 22,90 33,58 5,40 39,40"
            fill="black"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="seal2-star2">
        <svg width="10" height="10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="50,10 61,40 95,40 67,58 78,90 50,70 22,90 33,58 5,40 39,40"
            fill="black"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Seal2;