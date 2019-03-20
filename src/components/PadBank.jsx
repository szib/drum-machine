import React from 'react';

import styled from 'styled-components'

import DrumPad from './DrumPad'

const PadBank = (props) => {
  const drumPads = props.drumPads.map(drumPad => (
    <DrumPad key={drumPad.keyTrigger} {...drumPad} />
  ))
  return (
    <div id="padbank" className={props.className}>
      {drumPads}
    </div>
  );
}

const StyledPadBank = styled(PadBank)`
  padding: 0.2em;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2em;
`

export default StyledPadBank;