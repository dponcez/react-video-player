import React from 'react'
import picOn from "../../assets/icons/picture-in-picture-on.svg";
import arrowExpand from "../../assets/icons/arrow-expand.svg";

const FullScreen = () => {
  return (
    <div className="expand--container">
      <button 
        className="pic-in-pic__btn" 
        data-pic-in-pic="picture" 
        title="Resize Video Screen / Expand Video Screen" 
        aria-describedby="picture in picture button" 
        role="switch"
      >
        <img 
          src={picOn} 
          aria-label='picture in picture icon' 
          role='icon' 
          aria-describedby='icon pic in pic'
        />
      </button>
      <button 
        className="expand--btn" 
        data-expand="expand" 
        title="Open Screen / Close Screen" 
        aria-describedby="expand button" 
        role="switch"
      >
        <img 
          src={arrowExpand} 
          aria-label='expand icon' 
          role='icon' 
          aria-describedby='icon expand'
        />
      </button>
    </div>
  )
}

export { FullScreen }