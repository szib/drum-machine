import React from 'react';

import styled from 'styled-components'

const BankSelector = (props) => {
  return (
    <button className={props.className} onClick={props.onClickHandler}>Bank {props.bank} [SPACE]</button>
  );
}

const StyledBankSelector = styled(BankSelector)`
  color: red;
  width: 100%;
`

export default StyledBankSelector;