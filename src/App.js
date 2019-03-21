import React, { Component } from 'react';

import styled from 'styled-components';

import DrumMachine from './containers/DrumMachine';
import Help from './components/Help'

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <DrumMachine></DrumMachine>
        <Help />
      </div>
    );
  }
}

const StyledApp = styled(App)`
  background-color: #eee;
  font-family: 'Bungee', cursive;
  
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default StyledApp;
