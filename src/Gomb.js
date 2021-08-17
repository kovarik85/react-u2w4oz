import React from 'react';

const Gomb = ({ felirat, vilagos, kattintasra }) => (
  <div onClick={kattintasra} className={`gomb ${vilagos ? 'vilagos' : ''}`}>
    {felirat}
  </div>
);

export default Gomb;
