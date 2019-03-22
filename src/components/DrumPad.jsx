import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { updateDisplay } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    drumPadData: state.banks[state.activeBank].find(
      drumpad => drumpad.id === ownProps.id
    ),
    isPowerOn: state.isPowerOn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateDisplay: () => dispatch(updateDisplay(ownProps.id))
  };
};

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toogleActive = this.toogleActive.bind(this);
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
    if (this.props.isPowerOn) {
      const sound = document.getElementById(this.props.drumPadData.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.props.updateDisplay();
      this.toogleActive();
      setTimeout(() => this.toogleActive(), 150);
    }
  }

  toogleActive() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const className = ['drum-pad', this.props.className].join(' ');
    return (
      <div
        className={className}
        id={this.props.drumPadData.id}
        onClick={this.playSound}
        style={
          this.state.active
            ? {
                borderColor: 'red',
                color: 'red',
                backgroundColor: 'white'
              }
            : {}
        }
      >
        <audio
          className="clip"
          id={this.props.drumPadData.keyTrigger}
          src={this.props.drumPadData.url}
        />
        {this.props.drumPadData.keyTrigger}
      </div>
    );
  }
}

const StyledDrumPad = styled(DrumPad)`
  font-size: 2em;
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid black;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  text-align: center;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledDrumPad);
