import React from 'react'
import { ReactSVG } from 'react-svg'
import forwardButton from "../../assets/icons/forward-btn.svg";

const ChevronRightButton = ({onClick}) => {
  return (
    <>
      <button
        className="next btn btn--medium fa-forward"
        data-next="next"
        title="Next"
        aria-describedby="next button"
        onClick={onClick}
      >
        <ReactSVG src={forwardButton}/>
      </button>
    </>
  )
}

export { ChevronRightButton }