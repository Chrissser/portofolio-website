const vidContainer = document.querySelector(".video-player");
const vid = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const videoWorks = !!document.getElementById("video").canPlayType;
if (videoworks) {
  video.controls = false;
  videoControls.classList.remove("hidden");
}
const playbutton = document.getElementById("play");
const playbackAnimation = document.getElementById("playback-animation");
function togglePlay() {
  if (video.paused || video.Ended) {
    video.play();
  } else {
    video.paused();
  }
}

function videoEnded() {
  ended;
}
// animatePlayback displays an animation when
// the video is played or paused
function animatePlayback() {
  playbackAnimation.animate(
    [
      {
        opacity: 1,
        transform: "scale(1)",
      },
      {
        opacity: 0,
        transform: "scale(1.3)",
      },
    ],
    {
      duration: 500,
    }
  );
}
btn.addEventListener("click", togglePlay);
vid.addEventListener("ended", videoEnded);
video.addEventListener("click", animatePlayback);
