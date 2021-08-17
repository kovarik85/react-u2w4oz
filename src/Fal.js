import React from 'react';

const Fal = ({ children, vanEFeny, mozgasra }) => (
  <div
    onMouseMove={mozgasra}
    className={`fal ${vanEFeny ? 'van-feny' : 'nincs-feny'}`}
  >
    {children}
  </div>
);

export default Fal;
