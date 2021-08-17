import React from 'react';
import Fal from './Fal';
import VillanyKapcsolo from './VillanyKapcsolo';

export default class MozgasErzekeloSzoba extends React.Component {
  state = { egAVillany: false };

  kapcsol = () => {
    if (this.state.egAVillany) {
      this.leKapcsol();
    } else {
      this.beKapcsol();
    }
  };

  beKapcsol = () => {
    this.setState({ egAVillany: true });
    this.timeout = setTimeout(this.leKapcsol, 3000);
  };

  leKapcsol = () => {
    this.setState({ egAVillany: false });
    clearTimeout(this.timeout);
  };

  mozgasra = () => {
    if (!this.state.egAVillany) this.beKapcsol();
  };

  render() {
    return (
      <Fal mozgasra={this.mozgasra} vanEFeny={this.state.egAVillany}>
        <VillanyKapcsolo
          kapcsolasra={this.kapcsol}
          beVanKapcsolva={this.state.egAVillany}
        />
      </Fal>
    );
  }
}
