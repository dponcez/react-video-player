import React from 'react'
import soundOn from "../../assets/icons/sound-on.svg";

const SoundIconOn = () => {
  return (
    <>
      <img
        src={soundOn}
        aria-label="icon sound on"
        role="icon"
        aria-describedby="icon sound on"
        alt="sound button on"
      />
    </>
  );
}

export { SoundIconOn }