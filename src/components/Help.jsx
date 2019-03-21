import React from 'react';

import styled from 'styled-components';

const Help = props => (
  <div className={props.className}>
    [ENTER] : Power ON/OFF
    <br />
    [SPACE] : Select bank
  </div>
);

const StyledHelp = styled(Help)`
  position: fixed;
  bottom: 2em;
`;

export default StyledHelp;
