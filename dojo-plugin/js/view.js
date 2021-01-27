let view = {};
let bin = document.querySelectorAll(".clipper_wrapper");
let addAudioBtn = document.getElementById("add_audio_btn"),
  formBlock = document.querySelector(".form-block"),
  inputLeft = document.getElementById(`input_left_1`),
  inputRight = document.getElementById(`input_right_1`);

let clipper_ID = 1;
let regionsObj = {};
const dojo = {};
let region;

view.init = function () {
  //view.clipperControls(clipper_ID);
};

view.clipperControls = function (value) {
  // Get a dynamic DOM
  inputLeft = document.getElementById(`input_left_${value}`);
  inputRight = document.getElementById(`input_right_${value}`);
  const thumbLeft = document.getElementById(`thumb_left_${value}`),
    thumbRight = document.getElementById(`thumb_right_${value}`),
    //frame = document.getElementById(".slider-image"),
    range = document.getElementById(`clipper_range_${value}`);

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
    dojo.beginTime = (dojo.beginPercent * dojo.duration) / 100;
    region[dojo.activeIndex].update({
      start: dojo.beginTime,
    });
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
    dojo.endTime = (dojo.endPercent * dojo.duration) / 100;
    region[dojo.activeIndex].update({
      end: dojo.endTime,
    });
  }

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
};

// TODO: Refine my Tag selection
function range_ids() {
  var bts_sliders = document.getElementsByTagName("input");
  var buttonsCount = bts_sliders.length;
  for (var i = 0; i < buttonsCount; i += 1) {
    bts_sliders[i].onmousedown = function (e) {
      let index = this.id;

      let strArray = index.split("_");
      console.log(strArray);
      let id = strArray[strArray.length - 1];
      id = parseInt(id);
      dojo.activeIndex = id - 1;
      console.log(dojo.activeIndex);
      if (null === id) {
        let id = 1;
        view.clipperControls(id);
      } else {
        view.clipperControls(id);
      }
    };
  }
}

/**
 * Calls initial View methods
 *
 */

// Last Wrapper

function cloneClipper() {
  let clipperEl = document.getElementById("clipper_1"),
    clipperBin = document.getElementById("clipper_bin"),
    binArray = document.querySelectorAll(".clipper_wrapper"),
    newId = binArray.length + 1,
    listEl = document.createElement("li"),
    newClipper = clipperEl.cloneNode(true);

  newClipper.setAttribute("id", `clipper_${newId}`);

  function incrementIds(id) {
    newClipper.querySelector(`#${id}_1`).setAttribute("id", `${id}_${newId}`);
    newClipper;
  }

  incrementIds("input_left");
  incrementIds("input_right");
  incrementIds("thumb_left");
  incrementIds("thumb_right");
  incrementIds("clipper_range");

  listEl.appendChild(newClipper);
  clipperBin.appendChild(listEl);

  console.log(newClipper);
  range_ids();
}

/**
 * Audio Wave Section
 *
 */

addAudioBtn.addEventListener("click", wavePlayer);

function wavePlayer() {
  const btn = {
    play: document.getElementById("btn-play"),
    pause: document.getElementById("btn-pause"),
    stop: document.getElementById("btn-stop"),
  };

  const timeStampEl = document.getElementById("time-stamp");
  const waveEl = document.getElementById("audio_spectrum");
  var CursorPlugin = window.WaveSurfer.cursor;

  let Spectrum = WaveSurfer.create({
    container: "#audio_spectrum",
    progressColor: "#03a9f4",
    backend: "MediaElement",
    //barWidth: 3,
    // barRadius: 3,
    cursorWidth: 1,
    height: 50,
    //barGap: 3,
    plugins: [
      //Regions Plugin
      WaveSurfer.regions.create({
        regionsMinLength: 2,
        regions: [
          {
            start: 15,
            end: 40,
            loop: false,
            color: "hsla(400, 100%, 30%, 0.5)",
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
        container: "#mini_wave",
        waveColor: "#777",
        progressColor: "#222",
        height: 20,
      }),
    ],
  });

  //TODO: Finetune Zoom
  document.querySelector("#zoom-slider").oninput = function () {
    Spectrum.zoom(Number(this.value));
  };

  // Play Button
  document
    .querySelector("#play_btn")
    .addEventListener("click", Spectrum.playPause.bind(Spectrum));

  //   // Stop Button
  //   btn.stop.addEventListener(
  //     "click",
  //     () => {
  //       Spectrum.stop();

  //       btn.stop.disabled = true;
  //       btn.pause.disabled = false;
  //       btn.play.disabled = false;
  //       waveEl.scrollTo(0, 0);
  //     },
  //     false
  //   );

  //   Spectrum.on("ready", () => {
  //     btn.play.disabled = false;
  //   });

  Spectrum.on("zoom", function () {
    let sects = [];
    let cont = document.getElementById("audio_spectrum");
    let clip_area = document.querySelector(".clipper_area");
    let canva = cont.querySelectorAll("canvas");
    var timeWave = document.getElementById("wave-timeline");
    canva.forEach((canvas) => {
      let sect = canvas.style.width;
      sect = parseInt(sect, 10);
      sects.push(sect);
    });

    // Getting sum of numbers
    var totalW = sects.reduce(function (a, b) {
      return a + b;
    }, 0);
    totalW = totalW / 2;
    clip_area.style.width = `${totalW}px`;
    timeWave.style.width = `${totalW}px`;
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

      // // Enable/Disable buttons respectively
      // btn.stop.disabled = false;
      // btn.pause.disabled = false;
      // btn.play.disabled = false;
    },
    false
  );

  region = Object.values(Spectrum.regions.list);

  console.log(region);

  // Spectrum.on("audioprocess", function () {
  //   let startClip = (dojo.beginPercent * audioEl.duration) / 100;
  //   console.log(startClip);

  //   let stopClip = (dojo.endPercent * audioEl.duration) / 100;
  //   console.log(stopClip);

  //   if (audioEl.currentTime > startClip && audioEl.currentTime < stopClip) {
  //     console.log("Show Slide");

  //     slider.style.opacity = 1;
  //   } else {
  //     console.log("Slide Gone");
  //     slider.style.opacity = 0;
  //   }
  // });

  //load the audio
  let audioEl = document.createElement("audio");
  //audioEl.src = model.getAudio();
  audioEl.src =
    "http://dojo.local/template/wp-content/plugins/dojo-plugin/assets/audio/Kufun-dojo.mp3";
  audioEl.crossOrigin = "anonymous";
  Spectrum.load(audioEl);

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

  Spectrum.on("ready", function () {
    dojo.duration = Spectrum.getDuration();
    console.log("Duration: " + dojo.duration);
  });

  let timelineWidth = document.getElementById("audio_spectrum").children[2];
  console.log(timelineWidth);

  let seekerBarEl = timelineWidth.childNodes[0];
  console.log(seekerBarEl);

  let w = window.innerWidth;

  console.log("Spectrum" + Spectrum);

  formBlock.remove();

  let addBtn = document.getElementById("plus_1");
  addBtn.addEventListener("click", () => {
    let nnew = Spectrum.addRegion({
      start: 50,
      end: 100,
      color: "rgba(0, 0, 0, 0.4)",
    });
    console.log("New Region:");
    console.log(nnew);
    region.push(nnew);
    cloneClipper();
  });

  range_ids();
}

var isSyncingTopScroll = false;
var isSyncingMiddleScroll = false;
var isSyncingBottomScroll = false;
var topDiv = document.getElementById("tunnel2");
var middleDiv = document.getElementById("tunnel1");
var bottomDiv = document.getElementById("wave-timeline");
console.log(bottomDiv);

topDiv.onscroll = function () {
  if (!isSyncingTopScroll) {
    isSyncingMiddleScroll = true;
    isSyncingBottomScroll = true;
    middleDiv.scrollLeft = this.scrollLeft;
    bottomDiv.scrollLeft = this.scrollLeft;
  }
  isSyncingTopScroll = false;
};

middleDiv.onscroll = function () {
  if (!isSyncingMiddleScroll) {
    isSyncingTopScroll = true;
    isSyncingBottomScroll = true;
    topDiv.scrollLeft = this.scrollLeft;
    bottomDiv.scrollLeft = this.scrollLeft;
  }
  isSyncingMiddleScroll = false;
};

bottomDiv.onscroll = function () {
  if (!isSyncingBottomScroll) {
    isSyncingTopScroll = true;
    isSyncingBottomScroll = true;
    topDiv.scrollLeft = this.scrollLeft;
    middleDiv.scrollLeft = this.scrollLeft;
  }
  isSyncingBottomScroll = false;
};

/*

I need to loop through the controls and serialise them
Each DOM related element must have an ID
I need to transfer controls to the Wavesurfer plays

So I need a function that generates a new serialise clip in the dom
the clip should matched to it's controls and values

So I either the event listener should pass in it's id
Or it's methods should be part of the class

A method that remembers how many times it has been requested
On successful creation increament, and decreament on removal

var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}​

*/

// document
//       .querySelector('[data-action="play-region-2"]')
//       .addEventListener("click", function () {
//         let region = Object.values(Spectrum.regions.list)[1];
//         region.playLoop();
//       });

// <img id="img_id_1" src="url/puc1.jpg" onclick="select_img(this.src)"/>

// function select_img(src) {
//   alert(src);
//   document.getElementById("img_id_2").value=src;
// }

// // For
// onResize(timeInSeconds, 'start');

// region[0].play()

// region[0].on("udpate-end", () => {
//   console.log(region[0].end);
// });
