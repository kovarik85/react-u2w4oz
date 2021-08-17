import React from 'react';
import Fal from './Fal';
import VillanyKapcsolo from './VillanyKapcsolo';

export default class EnergiaTakarekosSzoba extends React.Component {
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

  render() {
    return (
      <Fal vanEFeny={this.state.egAVillany}>
        <VillanyKapcsolo
          kapcsolasra={this.kapcsol}
          beVanKapcsolva={this.state.egAVillany}
        />
      </Fal>
    );
  }
}
