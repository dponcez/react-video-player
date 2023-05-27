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
      </button>
      <input
        type="range"
        className="slider"
        min="0"
        max={max}
        value={value}
        step="1"
        onChange={onChange}
      />
    </div>
  );
}

export { Volume }