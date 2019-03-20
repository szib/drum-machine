import React from 'react';

import { connect } from 'react-redux'

import styled from 'styled-components'

const mapStateToProps = (state) => {
  return { text: state.display }
}

const Display = (props) => (
  <div id="display" className={props.className}>{props.text}</div>
);

const StyledDisplay = styled(Display)`
  background-color: #ccc;
  color: black;

  font-size: 2em;
  font-weight: bold;
  
  text-align: center;
  padding: 0.25em;
  border: 1px solid grey;
`

export default connect(mapStateToProps)(StyledDisplay);
