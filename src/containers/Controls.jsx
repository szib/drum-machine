import React from 'react';
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

const Controls = (props) => {
  return (
    <div className={props.className}>
      <PowerButton isPowerOn={props.isPowerOn} onClickHandler={props.togglePower} />
      <BankSelector bank={props.activeBank} onClickHandler={props.toggleBank} />
      <Display />
    </div>
  );
}

const StyledControls = styled(Controls)`
  background-color: #dda;
`

export default connect(mapStateToProps, mapDispatchToProps)(StyledControls);