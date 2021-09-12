import React, { useState } from 'react';

const Termosztat = props => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={`termo ${props.color ? 'vilagos' : 'sotet'}`}>
      Counter:{counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Termosztat;
