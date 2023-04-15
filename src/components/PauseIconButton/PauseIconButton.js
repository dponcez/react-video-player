import React from 'react'
import pauseIcon from '../../assets/icons/pause-btn.svg'

const PauseIconButton = () => {
  return (
    <>
      <img 
        src={pauseIcon} 
        aria-label="icon pause"
        role="icon"
        aria-describedby="icon pause"
        alt='pause button'/>
    </>
  )
}

export { PauseIconButton }