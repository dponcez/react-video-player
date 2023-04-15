import React from 'react'
import soundOff from "../../assets/icons/sound-off.svg";

const SoundIconOff = () => {
  return (
    <>
      <img
        src={soundOff}
        aria-label="icon sound off"
        role="icon"
        aria-describedby="icon sound off"
        alt="sound button off"
      />
    </>
  );
}

export { SoundIconOff }