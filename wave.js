const btn = {
  play: document.getElementById("btn-play"),
  pause: document.getElementById("btn-pause"),
  stop: document.getElementById("btn-stop"),
};

const timeStampEl = document.getElementById("time-stamp");
const waveEl = document.getElementById("audio-spectrum");
var CursorPlugin = window.WaveSurfer.cursor;

let Spectrum = WaveSurfer.create({
  container: "#audio-spectrum",
  progressColor: "#03a9f4",
  backend: "MediaElement",
  barWidth: 3,
  barRadius: 3,
  cursorWidth: 1,
  height: 100,
  barGap: 3,
  plugins: [
    //Regions Plugin
    WaveSurfer.regions.create({
      regionsMinLength: 2,
      regions: [
        {
          start: 10,
          end: 30,
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
    //Regions Plugin
    WaveSurfer.timeline.create({
      container: "#wave-timeline",
    }),
    //Regions Plugin
    CursorPlugin.create({
      showTime: "#cursor-time",
    }),
    WaveSurfer.minimap.create({
      container: "#wave-minimap",
      waveColor: "#777",
      progressColor: "#222",
      height: 20,
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
    Spectrum.seekTo(currentProgress);
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

Spectrum.on("audioprocess", function () {
  let mins = Math.floor(Spectrum.getCurrentTime() / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let sec = Math.floor(Spectrum.getCurrentTime() % 60);
  if (sec < 10) {
    sec = "0" + String(sec);
  }
  timeStampEl.innerText = `${mins}:${sec}`;

  let rightOffset = w - seekerBarEl.getBoundingClientRect().right;
  if (0 >= rightOffset) {
    waveEl.scrollBy(w, w);
  }
});

let timelineWidth = document.querySelector("#audio-spectrum").childNodes[2];

let seekerBarEl = timelineWidth.childNodes[0];

let w = window.innerWidth;
console.log(timelineWidth.style);
console.log(seekerBarEl);
timelineWidth.style.overflowY = "unset";
