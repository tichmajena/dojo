const btn = {
  play: document.getElementById("btn-play"),
  pause: document.getElementById("btn-pause"),
  stop: document.getElementById("btn-stop"),
};

let Spectrum = WaveSurfer.create({
  container: "#audio-spectrum",
  progressColor: "#03a9f4",
  backend: "MediaElement",
  plugins: [
    WaveSurfer.regions.create({
      regionsMinLength: 2,
      regions: [
        {
          start: 1,
          end: 3,
          loop: false,
          color: "hsla(400, 100%, 30%, 0.5)",
        },
        {
          start: 50,
          end: 7,
          loop: false,
          color: "hsla(200, 50%, 70%, 0.4)",
          minLength: 1,
        },
      ],
      dragSelection: {
        slop: 5,
      },
    }),
  ],
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
