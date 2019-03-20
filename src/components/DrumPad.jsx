import React from 'react';

import styled from 'styled-components'

const DrumPad = props => {
  const className = ['drum-pad', props.className].join(' ')

  return (
    <div className={className} id={props.id}>
      <audio className='clip' id={props.keyTrigger} src={props.url}></audio>
      {props.keyTrigger}
    </div>
  )
}

const StyledDrumPad = styled(DrumPad)`
  font-size: 2em;
  padding: .5em;
  box-sizing: border-box;
  border: 1px solid black;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  border-radius: 2px;
  text-align: center;
`

export default StyledDrumPad;
