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
    return (
      <div className={this.props.className} id="drum-machine">
        <PadBank></PadBank>
        <Controls></Controls>
      </div>
    );
  }
}

const StyledDrumMachine = styled(DrumMachine)`
  background-color: #add;
`

export default connect(mapStateToProps)(StyledDrumMachine);