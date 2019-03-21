import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Display from '../components/Display'
import PowerButton from '../components/PowerButton';
import BankSelector from '../components/BankSelector';

import { togglePower, toggleBank } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    display: state.display,
    isPowerOn: state.isPowerOn,
    activeBank: state.activeBank
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePower: () => dispatch(togglePower()),
    toggleBank: () => dispatch(toggleBank()),
  }
}


class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    switch (e.keyCode) {
      case 32:
        this.props.toggleBank();
        break;
      case 13:
        this.props.togglePower();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <PowerButton isPowerOn={this.props.isPowerOn} onClickHandler={this.props.togglePower} />
        <BankSelector bank={this.props.activeBank} onClickHandler={this.props.toggleBank} />
        <Display />
      </div>
    );
  }
}

const StyledControls = styled(Controls)`
  background-color: #dda;
`

export default connect(mapStateToProps, mapDispatchToProps)(StyledControls);