import React from 'react';

import styled from 'styled-components'

const Display = (props) => (
  <div id="display" className={props.className}>{props.text}</div>
);

const StyledDisplay = styled(Display)`
  background-color: #ccc;
  color: black;
  font-weight: bold;
`

export default StyledDisplay;
