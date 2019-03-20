import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import PadBank from '../components/PadBank'
import Controls from '../components/Controls'

const mapStateToProps = (state) => {
  return state
}

class DrumMachine extends Component {
  render() {
    const drumPads = this.props.banks[this.props.activeBank]
    return (
      <div className={this.props.className} id="drum-machine">
        <PadBank drumPads={drumPads}></PadBank>
        <Controls></Controls>
      </div>
    );
  }
}

const StyledDrumMachine = styled(DrumMachine)`
  padding: 30px;
  background-color: #ccc;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
  border: 1px solid black;
  border-radius: 5px;
`

export default connect(mapStateToProps)(StyledDrumMachine);