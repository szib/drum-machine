import React from 'react';

import styled, { css } from 'styled-components';

const BankSelector = props => {
  return (
    <button className={props.className} onClick={props.onClickHandler}>
      <div className="bank-1">BANK 1</div> <div className="bank-2">BANK 2</div>
    </button>
  );
};

const StyledBankSelector = styled(BankSelector)`
  background: #444;
  color: #777;

  width: 100%;
  padding: 0.5em;
  outline: none;
  border: none;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  ${props =>
    props.isPowerOn &&
    props.bank === 0 &&
    css`
      .bank-1 {
        color: #ddd;
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
      }
    `}

  ${props =>
    props.isPowerOn &&
    props.bank === 1 &&
    css`
      .bank-2 {
        color: #ddd;
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
      }
    `}
`;

export default StyledBankSelector;
