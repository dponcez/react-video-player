import React from 'react'
import { ReactSVG } from 'react-svg'
import backwardButton from "../../assets/icons/backward-btn.svg";

const ChevronLeftButton = ({onClick}) => {
  return (
    <>
      <button
        className="prev btn btn--medium fa-backward"
        data-next="prev"
        title="Previous"
        aria-describedby="previous button"
        onClick={onClick}
      >
        <ReactSVG src={backwardButton}/>
      </button>
    </>
  );
}

export { ChevronLeftButton }