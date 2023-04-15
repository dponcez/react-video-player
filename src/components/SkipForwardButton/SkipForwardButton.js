import React from 'react'
import skipForward from "../../assets/icons/skip-forward.svg";

const SkipForwardButton = ({onClick}) => {
  return (
    <>
      <button
        className="skip--forward btn btn--small"
        data-skip="25"
        title="Skip Forward"
        aria-describedby="skip forward button"
        onClick={onClick}
      >
        <img
          src={skipForward}
          className="fa-backward"
          aria-label="icon skip"
          role="icon"
          aria-describedby="icon skip backward"
        />
      </button>
    </>
  )
}

export { SkipForwardButton }