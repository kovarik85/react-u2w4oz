import React from 'react';
import Gomb from './Gomb';

const VillanyKapcsolo = ({ beVanKapcsolva, kapcsolasra }) => (
  <div>
    <Gomb
      kattintasra={kapcsolasra}
      vilagos={beVanKapcsolva}
      felirat={beVanKapcsolva ? 'Off' : 'On'}
    />
  </div>
);

export default VillanyKapcsolo;
