import React from 'react';

import styled from 'styled-components';

import Display from './Display'

const Controls = (props) => {
  //
  return (
    <div className={props.className}>
      Controls
      <Display text="Display"></Display>
    </div>
  );
}

const StyledControls = styled(Controls)`
  background-color: #dda;
`

export default StyledControls;