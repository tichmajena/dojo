const btn = {
  play: document.getElementById("btn-play"),
  pause: document.getElementById("btn-pause"),
  stop: document.getElementById("btn-stop"),
};

let Spectrum = WaveSurfer.create({
  container: "#audio-spectrum",
  progressColor: "#03a9f4",
  backend: "MediaElement",
});

document.querySelector("#zoom-slider").oninput = function () {
  Spectrum.zoom(Number(this.value));
};

// Play Button
btn.play.addEventListener(
  "click",
  () => {
    Spectrum.play();

    btn.stop.disabled = false;
    btn.pause.disabled = false;
    btn.play.disabled = true;
  },
  false
);

// Pause Button
btn.pause.addEventListener(
  "click",
  () => {
    Spectrum.pause();

    btn.stop.disabled = false;
    btn.pause.disabled = true;
    btn.play.disabled = false;
  },
  false
);

// Stop Button
btn.stop.addEventListener(
  "click",
  () => {
    Spectrum.stop();

    btn.stop.disabled = true;
    btn.pause.disabled = false;
    btn.play.disabled = false;
  },
  false
);

Spectrum.on("ready", () => {
  btn.play.disabled = false;
});

window.addEventListener(
  "resize",
  () => {
    //Get the current progress
    let currentProgress = Spectrum.getCurrentTime() / Spectrum.getDuration();

    // Reset graph
    Spectrum.empty();
    Spectrum.drawBuffer();

    //Set Original Position
    Spectrum.seekTo(currentProgress);

    // Enable/Disable buttons respectively
    btn.stop.disabled = false;
    btn.pause.disabled = false;
    btn.play.disabled = false;
  },
  false
);

//load the audio
Spectrum.load("assets/audio/kufun-dojo.mp3");
