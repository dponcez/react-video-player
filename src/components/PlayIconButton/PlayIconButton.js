import React from 'react'
import playIcon from '../../assets/icons/play-btn.svg'

const PlayIconButton = () => {
  return (
    <>
      <img 
        src={playIcon}
        aria-label="icon play"
        role="icon"
        aria-describedby="icon play"
        alt='play button'/>
    </>
  )
}

export { PlayIconButton }