import React from 'react';

import styled from 'styled-components'

const PadBank = (props) => {
  //
  return (
    <div id="padbank" className={props.className}>Padbank</div>
  );
}

const StyledPadBank = styled(PadBank)`
  background-color: #dad;
`

export default StyledPadBank;