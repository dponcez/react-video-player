import React from 'react'
import { ControlButton } from '../ControlButton/ControlButton'

const Controls = ({state, onClick}) => {
  return (
    <>
      <ControlButton
        className="play btn btn--large"
        data-play="play"
        title="Play / Pause"
        aria-describedby="play button"
        state={state}
        onClick={onClick}
      />
    </>
  );
}

export { Controls }