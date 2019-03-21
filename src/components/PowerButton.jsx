import React from 'react';

import styled, { css } from 'styled-components'

const PowerButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClickHandler}>Power {props.isPowerOn ? 'ON' : 'OFF'}</button>
  );
}

const StyledPowerButton = styled(PowerButton)`
  color: red;
  width: 100%;
  ${props => props.isPowerOn && css`
    background: palevioletred;
    color: white;
  `}
`

export default StyledPowerButton;