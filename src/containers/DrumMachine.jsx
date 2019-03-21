import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import PadBank from '../containers/PadBank'
import Controls from '../containers/Controls'

const mapStateToProps = (state) => {
  return state
}

class DrumMachine extends Component {
  render() {
    return (
      <div className={this.props.className} id="drum-machine">
        <PadBank></PadBank>
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