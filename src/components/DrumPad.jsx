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
  background-color: red;
  font-size: 2em;
  padding: .5em;
  margin: 0.1em;
  border: 1px solid black;
  box-sizing: border-box;
`

export default StyledDrumPad;
