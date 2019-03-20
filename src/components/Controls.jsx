import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Display from './Display'

const mapStateToProps = (state) => {
  return { display: state.display }
}

const Controls = (props) => {
  //
  return (
    <div className={props.className}>
      <Display />
    </div>
  );
}

const StyledControls = styled(Controls)`
  background-color: #dda;
`

export default connect(mapStateToProps)(StyledControls);