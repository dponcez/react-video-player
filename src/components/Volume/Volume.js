import React from 'react'

const Volume = ({max, value, mode, onClick, onChange}) => {
  return (
    <div className="volume--container" role="volume and slider container">
      <button
        className="mute--btn btn btn--medium"
        data-mute="mute"
        title="Mute Sound"
        aria-describedby="mute button"
        onClick={onClick}
      >
        {mode}
        {/* <img
          src={soundOn}
          className="volume-up"
          aria-label="icon sound on"
          role="icon"
          aria-describedby="icon sound"
        /> */}
      </button>
      <input
        type="range"
        name="slider"
        className="slider"
        id="slide"
        data-slider="slider"
        min="0"
        max={max}
        value={value}
        step="1"
        aria-required="false"
        aria-autocomplete="false"
        aria-invalid="false"
        autoComplete="false"
        role="slider"
        onChange={onChange}
      />
    </div>
  );
}

export { Volume }