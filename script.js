const inputLeft = document.getElementById("input-left"),
  inputRight = document.getElementById("input-right"),
  thumbLeft = document.querySelector(".slider > .thumb.left"),
  thumbRight = document.querySelector(".slider > .thumb.right"),
  slider = document.querySelector(".slider-image"),
  range = document.querySelector(".slider > .range");

const btn = {
  play: document.getElementById("play"),
  pause: document.getElementById("pause"),
  stop: document.getElementById("stop"),
};

const audioEl = document.getElementById("audio"),
  progressEl = document.getElementById("seeker-range-slider"),
  seekerBob = document.querySelector(".seeker > .thumb.left"),
  seekerTrack = document.querySelector(".seeker > .range"),
  progressContainer = document.getElementById("progress-container"),
  titleEl = document.getElementById("title");

const audioFile = "Kufun-dojo";

const dojo = {};

let zvatanga;
let zvapera;
/**
 *  Range Slider Stuff
 */

function setLeftValue() {
  let beginInput = inputLeft,
    min = parseInt(beginInput.min),
    max = parseInt(beginInput.max);

  beginInput.value = Math.min(
    parseInt(beginInput.value),
    parseInt(inputRight.value) - 1
  );

  let beginPercent = ((beginInput.value - min) / (max - min)) * 100;

  thumbLeft.style.left = beginPercent + "%";
  range.style.left = beginPercent + "%";
  dojo.beginPercent = beginPercent;
}

function setRightValue() {
  let endInput = inputRight,
    min = parseInt(endInput.min),
    max = parseInt(endInput.max);

  endInput.value = Math.max(
    parseInt(endInput.value),
    parseInt(inputLeft.value) + 1
  );

  let endPercent = ((endInput.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - endPercent + "%";
  range.style.right = 100 - endPercent + "%";
  dojo.endPercent = endPercent;
}

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

/**
 *
 * Audio Player Operations
 *
 */

loadSong(audioFile);

function loadSong(leAudioFile) {
  titleEl.innerHTML = leAudioFile + ".mp3";
}

// Event Listeners
btn.play.addEventListener("click", () => {
  audioEl.play();
});

btn.pause.addEventListener("click", () => {
  audioEl.pause();
});

btn.stop.addEventListener("click", () => {
  audioEl.pause();
  audioEl.currentTime = 0;
});

audioEl.addEventListener("timeupdate", updateSeeker);

function updateSeeker(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;

  progressEl.value = progressPercent;
  seekerBob.style.left = progressPercent + "%";
  seekerTrack.style.width = progressPercent + "%";
  console.log(progressPercent);

  let startClip = (dojo.beginPercent * audioEl.duration) / 100;
  console.log(startClip);

  let stopClip = (dojo.endPercent * audioEl.duration) / 100;
  console.log(stopClip);

  if (audioEl.currentTime > startClip && audioEl.currentTime < stopClip) {
    console.log("Show Slide");

    slider.style.opacity = 1;
  } else {
    console.log("Slide Gone");
    slider.style.opacity = 0;
  }
}

progressEl.addEventListener("change", setAudioProgress);

function setAudioProgress() {
  audioEl.currentTime = (parseInt(progressEl.value) * audioEl.duration) / 100;
}

/**
 * Percentage Variables have been extrated from Slider
 * @param {*} lePercentage
 */

setLeftValue();
setRightValue();

audioEl.addEventListener("canplay", clipEngine);

function clipEngine(e) {}
