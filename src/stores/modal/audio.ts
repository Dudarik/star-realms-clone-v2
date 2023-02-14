const audio = new Audio("../../assets/sounds/space.mp3");
const audio_btn = document.querySelector(".btn__sound");
const audio_icon = document.querySelector(".btn__sound i");

audio.muted = true;
audio.autoplay = true;
audio.volume = 0.5;

audio.addEventListener("loadedmetadata", function () {
  audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0);
});

audio_btn?.addEventListener("click", function () {
  if (audio.muted) {
    audio.muted = false;
    audio_icon?.classList.add("volume-up");
    audio_icon?.classList.remove("volume-off");
  } else if (!audio.muted) {
    audio.muted = true;
    audio_icon?.classList.add("volume-off");
    audio_icon?.classList.remove("volume-up");
  }
});
