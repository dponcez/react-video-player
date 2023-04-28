import React, {useState, useEffect} from 'react'

const updateVideoElement = (videoRef) => {
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
    isPlaying ? 
      videoRef.current.pause() : 
      videoRef.current.play();
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

  return {
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
    handleTimeUpdate,
    handleVolumeMute,
    handleVolumeChange
  };
}

export {updateVideoElement}