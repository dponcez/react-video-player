import React, {useState, useEffect, useCallback, useRef} from 'react'
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
import { ChevronRightButton } from '../ChevronRightButton/ChevronRightButton';
import { ChevronLeftButton } from '../chevronLeftButton/ChevronLeftButton';
import video from '../../assets/video/Chosen.mp4'
import '../../styles/VideoPlayer.scss'
import '../../styles/VideoControls.scss'

const VideoPlayer = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(10);
  const [mediaTime, setMediaTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // How to create a React Video Player
  // Go to the following YouTube video link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onMute = () => setIsMuted(true);
    const onUnMute = () => setIsMuted(false);

    videoElement.addEventListener("play", onPlay);
    videoElement.addEventListener("playing", onPlay);
    videoElement.addEventListener("pause", onPause);
    videoElement.addEventListener("mute", onMute);
    videoElement.addEventListener("unmute", onUnMute);

    return () => {
      videoElement.removeEventListener("play", onPlay);
      videoElement.removeEventListener("playing", onPlay);
      videoElement.removeEventListener("pause", onPause);
      videoElement.removeEventListener("mute", onMute);
      videoElement.removeEventListener("unmute", onUnMute);
    };
  }, [videoRef.current, progress]);

  const handleClick = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = videoRef.current;
    const progress = parseInt(Number(currentTime / duration) * 100);
    setMediaTime(currentTime);
    setProgress(progress);
    setDuration(duration);
  };

  const handleProgress = (e) => {
    const value = e.target.valueAsNumber;
    const { duration } = videoRef.current;
    videoRef.current.currentTime = (duration / 100) * value;
    setProgress(value);
  };

  const handleVolumeChange = (e) => {
    const newRange = e.target.valueAsNumber;
    const volumeRange = newRange / 100;
    videoRef.current.volume = volumeRange;
    setVolume(newRange);
  };

  const handleVolumeMute = () => {
    if (!videoRef.current) return;
    isMuted
      ? (videoRef.current.muted = false)
      : (videoRef.current.muted = true);
    setIsMuted(!isMuted);
  };

  // https://github.com/lkopacz/egghead-react-a11y-audio-player
  const handleSkipBackward = () => {
    const { currentTime } = videoRef.current;
    const newTime = Math.max(currentTime - 10, 0);
    videoRef.current.currentTime = newTime;
    setMediaTime(newTime);
  };

  const handleSkipForward = () => {
    const { currentTime } = videoRef.current;
    const newTime = Math.min(currentTime + 30, duration);
    videoRef.current.currentTime = newTime;
    setMediaTime(newTime);
  };

  // The functions below will be updated soon
  const handleNextBtn = useCallback(() => {
    console.log('next button was pressed')
  }, []);

  const handlePrevBtn = useCallback(() => {
    console.log('prev button was pressed')
  }, []);

  return (
    <figure className="figure">
      <div className="player--container">
        <div className="hidden">
          <video
            src={video}
            loop={false}
            ref={videoRef}
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
              <div className="controllers" role="control player container">
                <div className="player--controls">
                  <ChevronLeftButton onClick={handlePrevBtn} />
                  <Controls
                    state={isPlaying ? <PauseIconButton /> : <PlayIconButton />}
                    onClick={handleClick}
                  />
                  <ChevronRightButton onClick={handleNextBtn} />
                </div>
              </div>
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
        <p className="status">chosen</p>
        <p className="artist">Blxst Ft. Tyga & Ty Dolla $Ign</p>
      </figcaption>
    </figure>
  );
}

export {VideoPlayer}