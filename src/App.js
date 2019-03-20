import React, { Component } from 'react';

import styled from 'styled-components';

import DrumMachine from './containers/DrumMachine';

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <DrumMachine></DrumMachine>
      </div>
    );
  }
}

const StyledApp = styled(App)`
  background-color: #eee;
  
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledApp;
