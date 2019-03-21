import React from 'react';

import styled, { css } from 'styled-components'

const PowerButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClickHandler}>
      POWER
      <div className="led"></div>
    </button>
  );
}

const StyledPowerButton = styled(PowerButton)`
  background: #444;
  color: #777;

  width: 100%;
  padding: 0.5em;
  outline: none;
  border: none;

  .led {
    display: inline-block;
    margin-left: 10px;
    width: 30px;
    height: 10px;
    background: #a00;
  }

  ${props => props.isPowerOn && css`
    color: #ddd;
    text-shadow: 0 0 2px rgba(255,255,255,0.5);
    .led {
      background: red;
      box-shadow: 0px 0px 2px red;
    }
  `}
`

export default StyledPowerButton;