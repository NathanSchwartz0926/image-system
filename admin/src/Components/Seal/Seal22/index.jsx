import React, { useEffect } from 'react';
// import '../Seal22/styles.css'

const Seal22 = ({ branchName }) => {
  useEffect(() => {
    import('../Seal22/styles.css');
  }, []);
  
  return (
    <div className="seal22-number">12345678910123</div>
  );
};

export default Seal22;