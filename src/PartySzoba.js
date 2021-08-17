import React from 'react';
import Fal from './Fal';
import VillanyKapcsolo from './VillanyKapcsolo';

export default class PartySzoba extends React.Component {
  state = { egAVillany: false };

  kapcsol = () => {
    this.setState(prevState => ({
      egAVillany: !prevState.egAVillany
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.kapcsol, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

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
