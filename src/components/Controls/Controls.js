import React from 'react'
import backwardButton from "../../assets/icons/backward-btn.svg";
import forwardButton from "../../assets/icons/forward-btn.svg";
import { ControlButton } from '../ControlButton/ControlButton'

const Controls = ({state, onClick}) => {
  return (
    <>
      {/* <!-- controls --> */}
      <div className="controllers" role="control player container">
        <div className="player--controls">
          <button
            className="prev btn btn--medium"
            data-prev="prev"
            title="Previous"
            aria-describedby="previous button"
          >
            <img
              src={backwardButton}
              className="fa-backward"
              aria-label="icon backward"
              role="icon"
              aria-describedby="icon backward"
            />
          </button>
          <ControlButton
            className="play btn btn--large"
            data-play="play"
            title="Play / Pause"
            aria-describedby="play button"
            state={state}
            onClick={onClick}
          />
          <button
            className="next btn btn--medium"
            data-next="next"
            title="Next"
            aria-describedby="next button"
          >
            <img
              src={forwardButton}
              className="fa-forward"
              aria-label="icon forward"
              role="icon"
              aria-describedby="icon forward"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export { Controls }