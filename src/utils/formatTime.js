// https://github.com/lkopacz/egghead-react-a11y-audio-player
// 1. Switch to branch section
// 2. Choose the branch 09-mute-states
function formatTime(time) {
  const hours = Math.floor(~~(time / 3600));
  const minutes = Math.floor(~~(time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  let output = "";
  if (hours > 0) output += `${hours}:${minutes < 10 ? "0" : ""}`;

  output += `${minutes}:${seconds < 10 ? "0" : ""}`;
  output += `${seconds}`;

  return output;
}

export {formatTime}