import React from 'react';

import { connect } from 'react-redux';

import styled, { css } from 'styled-components';

const mapStateToProps = state => {
  return { text: state.display };
};

const Display = props => (
  <div id="display" className={props.className}>
    {props.text}
  </div>
);

const StyledDisplay = styled(Display)`
  background: #444;
  color: #777;

  font-size: 1.5em;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2em;

  ${props =>
    props.isPowerOn &&
    css`
      color: #ddd;
      text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
    `}
`;

export default connect(mapStateToProps)(StyledDisplay);
