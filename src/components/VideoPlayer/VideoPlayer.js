import React, {useRef} from 'react'
import { updateVideoElement } from '../../updateVideoElement/updateVideoElement'
import { formatTime } from '../../utils/formatTime'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Volume } from '../Volume/Volume'
import { Controls } from '../Controls/Controls'
import { FullScreen } from '../FullScreen/FullScreen'
import { SoundIconOn } from '../SoundOn/SoundOn'
import { SoundIconOff } from '../SoundOff/SoundOff'
import { PlayIconButton }from '../PlayIconButton/PlayIconButton'
import { PauseIconButton } from '../PauseIconButton/PauseIconButton'
import { SkipBackwardButton } from '../SkipBackwardButton/SkipBackwardButton'
import { SkipForwardButton } from '../SkipForwardButton/SkipForwardButton'
import video from '../../assets/video/Chosen.mp4'
import '../../styles/VideoPlayer.scss'
import '../../styles/VideoControls.scss'

const VideoPlayer = () => {
  const videoElement = useRef(null)

  const {
    volume,
    isMuted,
    progress,
    isPlaying,
    mediaTime,
    duration,
    handleClick,
    handleProgress,
    handleSkipBackward,
    handleSkipForward,
    handleVolumeMute,
    handleVolumeChange,
    handleTimeUpdate
  } = updateVideoElement(videoElement)

  return (
    <figure className="figure">
      <div className="player--container">
        <div className="hidden">
          <video
            src={video}
            loop={false}
            ref={videoElement}
            onClick={handleClick}
            onTimeUpdate={handleTimeUpdate}
          ></video>
          <section
            className="control--panel"
            role="control panel"
            aria-describedby="control panel container"
          >
            <ProgressBar
              className="progress--bar"
              onChange={handleProgress}
              value={progress}
            />
            {/* <!-- Volume --> */}
            <Volume
              max="100"
              value={volume}
              mode={isMuted ? <SoundIconOff /> : <SoundIconOn />}
              onClick={handleVolumeMute}
              onChange={handleVolumeChange}
            />
            {/* <!-- counter / duration --> */}
            <div className="timer--container duration" role="timer container">
              <span className="timer" data-timer="timer" role="timer">
                {formatTime(duration)}
              </span>
            </div>
            {/* <!-- controls --> */}
            <div className="controls">
              <div className="skip--container" role="skip buttons">
                <SkipBackwardButton onClick={handleSkipBackward} />
              </div>
              <Controls
                state={isPlaying ? <PauseIconButton /> : <PlayIconButton />}
                onClick={handleClick}
              />
              <div className="skip--container" role="skip buttons">
                <SkipForwardButton onClick={handleSkipForward} />
              </div>
            </div>
            {/* <!-- counter / current time --> */}
            <div
              className="timer--container current--time"
              role="timer container"
            >
              <span className="timer" data-timer="timer" role="timer">
                {formatTime(mediaTime)}
              </span>
            </div>
            {/* <!-- Fullscreen --> */}
            <FullScreen />
          </section>
        </div>
      </div>
      <figcaption className="figcaption">
        <p className="status">Chosen</p>
        <p className="artist">Blxst ft. Tyga & Ty Dolla $ign</p>
      </figcaption>
    </figure>
  );
}

export {VideoPlayer}