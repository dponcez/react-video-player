import React, {Fragment} from 'react'

const ControlButton = ({className, state, onClick}) => {
  return (
    <Fragment>
      <button 
        className={className}
        onClick={onClick}
      >
        {state}
      </button>
    </Fragment>
  )
}

export {ControlButton}