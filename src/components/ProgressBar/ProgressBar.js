import React from 'react'

const ProgressBar = ({value, onChange, className}) => {
  return (
    <div className="progress" data-progress="progress" role="progressbar">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className={className} 
        data-progress-bar="progress--bar"/>
    </div>
  )
}

export { ProgressBar }