import React, { Component } from 'react';
import styled from 'styled-components'

import { connect } from 'react-redux'

import { updateDisplay } from '../redux/actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateDisplay: () => dispatch(updateDisplay(ownProps.id))
  }
}

class DrumPad extends Component {

  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (this.props.drumPadData.keyCode === e.keyCode) {
      this.playSound();
    }
  }

  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.props.updateDisplay();
  }

  render() {
    const className = ['drum-pad', this.props.className].join(' ');
    // console.log(this.props)
    return (
      <div className={className} id={this.props.id} onClick={this.playSound}>
        <audio className='clip' id={this.props.keyTrigger} src={this.props.url}></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}

const StyledDrumPad = styled(DrumPad)`
  font-size: 2em;
  padding: .5em;
  box-sizing: border-box;
  border: 1px solid black;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  border-radius: 2px;
  text-align: center;
`

export default connect(null, mapDispatchToProps)(StyledDrumPad);
