import React from 'react'
import skipBackward from "../../assets/icons/skip-backward.svg";

const SkipBackwardButton = ({onClick}) => {
  return (
    <>
      <button
        className="skip--backward btn btn--small"
        data-skip="-10"
        title="Skip Backward"
        aria-describedby="skip backward button"
        onClick={onClick}
      >
        <img
          src={skipBackward}
          className="fa-backward"
          aria-label="icon skip"
          role="icon"
          aria-describedby="icon skip backward"
        />
      </button>
    </>
  )
}

export { SkipBackwardButton }
