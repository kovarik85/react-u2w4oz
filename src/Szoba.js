import React from 'react';
import Fal from './Fal';
import VillanyKapcsolo from './VillanyKapcsolo';

export default class Szoba extends React.Component {
  constructor(props) {
    super(props);
    this.kapcsolTeszt = this.kapcsolTeszt.bind(this);
  }

  state = { egAVillany: false, ajtoBeVanCsukva: true };

  kapcsolTeszt() {
    this.setState(prevState => ({
      egAVillany: !prevState.egAVillany
    }));
  }

  kapcsol = () => {
    this.setState(prevState => ({
      egAVillany: !prevState.egAVillany
    }));
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
