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
        <BankSelector isPowerOn={this.props.isPowerOn} bank={this.props.activeBank} onClickHandler={this.props.toggleBank} />
        <Display isPowerOn={this.props.isPowerOn} />
      </div>
    );
  }
}

const StyledControls = styled(Controls)`
  margin-top: 1em;

  background-color: #aaa;

  box-shadow: 0 0 5px rgba(0,0,0,0.2);
`

export default connect(mapStateToProps, mapDispatchToProps)(StyledControls);