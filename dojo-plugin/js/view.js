let view = {};
let bin = document.querySelectorAll(".clipper_wrapper");
let addAudioBtn = document.getElementById("add_audio_btn"),
  formBlock = document.querySelector(".form-block"),
  inputLeft = document.getElementById(`input_left_1`),
  inputRight = document.getElementById(`input_right_1`),
  frameBtnEl = document.querySelector(".mainview_buttons"),
  frameEl = document.querySelector(".frame"),
  frameImg = frameEl.querySelector("img"),
  galleryBtn = document.querySelector("#image_btn"),
  thumbClone = document.querySelector("#thumb_clone_holder").children[0],
  thumbImg = thumbClone.children[0],
  thumbBin = document.querySelector(".clip_bin"),
  progressBarEl = document.querySelector("#seeker_progress");

let thumbLeft = document.getElementById(`thumb_left_1`),
  thumbRight = document.getElementById(`thumb_right_1`),
  //frame = document.getElementById(".slider-image"),
  range = document.getElementById(`clipper_range_1`);

let clipper_ID = 1;
let regionsObj = {};
// Global Data object to keep track of App Status
let region;

/**
 *
 * Initialise the View
 */
view.init = function () {
  //view.clipperControls(clipper_ID);
};

/**
 *
 * Controls the Editing Clippers
 *
 * @param value is passed in from the Range Slider currently clicked
 *
 * STATUS: Working as Intended
 * TODO: Control it remotely via the Wavesurfer Regions
 */

view.clipperControls = function (value) {
  // Get a dynamic DOM
  inputLeft = document.getElementById(`input_left_${value}`);
  inputRight = document.getElementById(`input_right_${value}`);
  thumbLeft = document.getElementById(`thumb_left_${value}`);
  thumbRight = document.getElementById(`thumb_right_${value}`);
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

    //Update Regions according
    region[dojo.activeIndex].update({
      start: dojo.beginTime,
    });

    // Update Dojo KataBin Object
    dojo.kataBin[dojo.activeIndex].region.start = dojo.beginTime;
    dojo.kataBin[dojo.activeIndex].katana.start = dojo.beginPercent;
    let replacement = dojo.kataBin[dojo.activeIndex];

    Storage.updateKata("kata", replacement, dojo.activeIndex);
    console.log(dojo.kataBin);
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

    dojo.kataBin[dojo.activeIndex].region.end = dojo.endTime;
    dojo.kataBin[dojo.activeIndex].katana.end = dojo.endPercent;
    let replacement = dojo.kataBin[dojo.activeIndex];
    console.log(replacement);
    Storage.updateKata("kata", replacement, dojo.activeIndex);
  }

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
};

/**
 * Collects the id of the current clicked range input in the DOM
 *
 * STATUS: Working as Intended
 */
//
function range_ids() {
  // Get the Behind the Scenes slider ID
  var bts_sliders = document.querySelectorAll(".bts-sliders input");

  var slidersCount = bts_sliders.length;
  for (var i = 0; i < slidersCount; i += 1) {
    bts_sliders[i].onmousedown = function (e) {
      // Grag the ID of the selected range slider
      let index = this.id;
      console.log(index);

      // Split the ID String to get the number at the end, save it as the ID value to be passed to the control clippers
      let strArray = index.split("_");
      let id = strArray[strArray.length - 1];
      id = parseInt(id);

      // Determine Active Index By Click
      // TODO: Active Index Should be determined by current time and multiple items can be in active index
      dojo.activeIndex = id - 1;
      console.log(dojo.activeIndex);

      if (id) {
        view.clipperControls(id);
        view.clipperControls(id);
      } else {
        console.log("no id");
      }

      // if (null === id) {
      //   let id = 1;
      // } else {
      // }
    };
  }
}

/**
 * Audio Wave Section
 *
 * STATUS: Working as Intende
 * TODO: Fix Resize behavior
 * TODO: Fix Seeking behavior
 */

addAudioBtn.addEventListener("click", wavePlayer);

function wavePlayer() {
  const timeStampEl = document.getElementById("time-stamp");
  const waveEl = document.getElementById("audio_spectrum");
  let CursorPlugin = window.WaveSurfer.cursor;

  //Start Wavesurfer
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
        regions: [],
        dragSelection: {
          slop: 5,
        },
      }),
      //Regions Plugin
      WaveSurfer.timeline.create({
        container: "#wave-timeline",
      }),
      //Cursor Plugin
      CursorPlugin.create({
        showTime: "#cursor-time",
      }),
      // Mini Map Plugin
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
  // TODO: Add Stop Button
  // TODO: Add Skip Forward and Skip Backwards buttons
  // TODO: Add Volume range Input
  document
    .querySelector("#play_btn")
    .addEventListener("click", Spectrum.playPause.bind(Spectrum));

  /**
   * On Zoom, Calculate Wavesurfer Width and apply it to clipper bin div and timeline div
   * The wave is drawn via a series of canvas elements
   */
  Spectrum.on("zoom", function () {
    // Harvest the canvas elements from the DOM
    let sects = [];
    let cont = document.getElementById("audio_spectrum");
    let clip_area = document.querySelector(".clipper_area");
    let canva = cont.querySelectorAll("canvas");
    var timeWave = document.getElementById("wave-timeline");

    //Get the width of each canvas item and add it to an array
    canva.forEach((canvas) => {
      let sect = canvas.style.width;
      sect = parseInt(sect, 10);
      sects.push(sect);
    });

    // Getting sum of the canvas widths in the array and divide by 2 because somehow their are duplicated
    var totalW = sects.reduce(function (a, b) {
      return a + b;
    }, 0);
    totalW = totalW / 2;

    // Set the new width
    clip_area.style.width = `${totalW}px`;
    timeWave.style.width = `${totalW}px`;
  });

  //TODO: Sort this out
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
  //Get region list
  region = Object.values(Spectrum.regions.list);

  /**
   * The Actual Editor
   *
   * STATUS: Still a bit rough, more needs to happen here
   * TODO: Something about Active index maybe? move code into functions
   */
  Spectrum.on("audioprocess", function () {
    console.log(dojo.kataBin);
    // Get latest data for each Katana from kataBin Global Object
    dojo.kataBin.forEach((clipper, index) => {
      let imageSrc = clipper.mainImage,
        startClip = clipper.region.start,
        endClip = clipper.region.end,
        isActive;
      console.log(startClip + " to " + endClip);
      dojo.currentIndex; // TODO: Could be my active index fix

      // Determine what happens when current clip is supposed active
      if (dojo.currentTime >= startClip && dojo.currentTime <= endClip) {
        isActive = true;
        dojo.currentIndex = index;

        //Show or Hide Slide
        if ("" === imageSrc && isActive === true) {
          console.log(index + " is " + isActive);
          console.log("i dont got image");
          frameBtnEl.style.display = "flex";
          frameEl.style.display = "none";
        } else if ("" !== imageSrc && isActive === true) {
          console.log(index + " is " + isActive);
          console.log("I got Image");
          frameEl.style.display = "block";
          frameImg.src = imageSrc;
          frameBtnEl.style.display = "none";
          console.log(dojo.currentTime);
        } else {
          console.log("ndanyarara hangu");
        }
      } else {
        isActive = false;
        if (dojo.currentIndex !== index) {
          console.log("Im inactive");
          console.log(index + " is " + isActive);
        }
      }
    });
  });

  //load the audio
  let audioEl = document.createElement("audio");
  //audioEl.src = model.getAudio();
  audioEl.src =
    "http://dojo.local/template/wp-content/plugins/dojo-plugin/assets/audio/Kufun-dojo.mp3";
  audioEl.crossOrigin = "anonymous";
  Spectrum.load(audioEl);

  Spectrum.on("audioprocess", function () {
    dojo.currentTime = Spectrum.getCurrentTime();
    dojo.currentPercent = (dojo.currentTime / dojo.duration) * 100;

    progressBarEl.style.width = dojo.currentPercent + "%";

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

  /**
   * ON READY
   */

  Spectrum.on("ready", function () {
    dojo.duration = Spectrum.getDuration();
    dojo.currentTime = Spectrum.getCurrentTime();

    function timeStatusUpdate() {}

    // Read Everything from Local Storage
    dojo.endTime = (dojo.endPercent * dojo.duration) / 100; //TODO: as above

    console.log("ON READY: ");
    console.log(dojo.startPercent);
    console.log(dojo.endPercent);
    console.log(dojo.kataBin);
    console.log(dojo.endTime);

    timeStatusUpdate();

    UI.buildEditor(); // Reads from local storage

    dojo.kataBin.forEach((slide) => {
      let start = slide.region.start,
        end = slide.region.end;

      let newRegion = Spectrum.addRegion({
        start: start,
        end: end,
        color: "rgba(0, 0, 0, 0.4)",
      });

      region.push(newRegion);

      // dojo.startTime = dojo.endTime;
      // dojo.startPercent = dojo.endPercent;
      // dojo.endPercent = dojo.endPercent + 10;
      // dojo.endTime = (dojo.endPercent * dojo.duration) / 100;
    });

    /**
     * ON CLICK
     */

    let addBtn = document.getElementById("clone_btn");
    addBtn.addEventListener("click", () => {
      //TODO: Get previous region end time
      let clipperBin = document.getElementById("clipper_bin"),
        binArray = clipperBin.querySelectorAll(".clipper_wrapper"),
        newId = binArray.length + 1,
        indexx = parseInt(newId) - 1;
      console.log(dojo.startTime);
      console.log(dojo.endTime);
      let newRegion = Spectrum.addRegion({
        start: dojo.startTime,
        end: dojo.endTime,
        color: "rgba(0, 0, 0, 0.4)",
      });
      region.push(newRegion);
      console.log(region);
      console.log(indexx);

      region[indexx].update({
        start: dojo.startTime,
        end: dojo.endTime,
        color: "rgba(0, 0, 0, 0.4)",
      });

      UI.buildClipper();
      let tsa = new Katana(dojo.startPercent, dojo.endPercent, "");
      let tsaa = new KatanaRegion(dojo.startTime, dojo.endTime);
      let tsaah = new Kata(newId, indexx, "", tsa, tsaa, {});

      Storage.addKata(tsaah, "kata");

      console.log(tsaah);

      region[indexx].update({
        start: dojo.startTime,
        end: dojo.endTime,
        color: "rgba(0, 0, 0, 0.4)",
      });
    });

    range_ids();
  });

  Spectrum.on("seek", function () {
    dojo.currentTime = Spectrum.getCurrentTime();
  });

  let timelineWidth = document.getElementById("audio_spectrum").children[2];

  let seekerBarEl = timelineWidth.childNodes[0];

  let w = window.innerWidth;

  formBlock.remove();
}

/**
 * Syncronizing the Scroll of the Waveform and Edit Clippers on Zoom
 *
 * STATUS: Working as intended
 * TODO: Remove Code for extra unecessary div, since Waveform and Minimap have synced up on their own
 */

var isSyncingTopScroll = false;
var isSyncingMiddleScroll = false;
var isSyncingBottomScroll = false;
var topDiv = document.getElementById("tunnel2");
var middleDiv = document.getElementById("tunnel1");
var bottomDiv = document.getElementById("wave-timeline");

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

/**
 * Classes to Restructure my UI
 *
 * Mostly Methods to build & destryo the DOM
 * They corresond with related Model/Storage methods
 *
 * STATUS: WIP Not fully operationalise, not evey method that can be here is here
 * TODO: Not sure
 */

class UI {
  static buildEditor() {
    const clippers = dojo.kataBin;

    clippers.forEach((clipper) => UI.buildClipper(clipper));
  }

  static buildClipper() {
    let clipperEl = document.getElementById("clipper_1"),
      clipperBin = document.getElementById("clipper_bin"),
      binArray = clipperBin.querySelectorAll(".clipper_wrapper"),
      newId = binArray.length + 1,
      indexx = parseInt(newId) - 1;
    //listEl = document.createElement("li"),

    let newClipper = clipperEl.cloneNode(true);
    if (0 === indexx) {
      let removableEl = document.querySelector("#removable");
      removableEl.remove();
    }

    newClipper.setAttribute("id", `clipper_${newId}`);

    function incrementIds(idAttr) {
      let childEl = newClipper.querySelector(`#${idAttr}_1`);
      childEl.setAttribute("id", `${idAttr}_${newId}`);
      childEl.setAttribute("data-index", `${indexx}`);
    }

    if (indexx > 0) {
      incrementIds("input_left");
      incrementIds("input_right");
      incrementIds("thumb_left");
      incrementIds("thumb_right");
      incrementIds("clipper_range");
    }

    function incrementInputValues() {
      let inputLeft = newClipper.querySelector(`#input_left_${newId}`),
        inputRight = newClipper.querySelector(`#input_right_${newId}`),
        thumbLeft = newClipper.querySelector(`#thumb_left_${newId}`),
        thumbRight = newClipper.querySelector(`#thumb_right_${newId}`),
        clipperRange = newClipper.querySelector(`#clipper_range_${newId}`);

      inputLeft.value = dojo.startPercent;
      inputLeft.step = 0.0001;
      inputRight.value = dojo.endPercent;
      inputRight.step = 0.0001;
      thumbLeft.style.left = dojo.startPercent + "%";
      thumbRight.style.right = 100 - dojo.endPercent + "%";
      clipperRange.style.left = dojo.startPercent + "%";
      clipperRange.style.right = 100 - dojo.endPercent + "%";
    }

    incrementInputValues();

    if (indexx === 0) {
      console.log("When 0:");
      console.log(dojo.kataBin);
      dojo.kataBin[0].katana.end = dojo.endPercent;
      dojo.kataBin[0].region.end = dojo.endTime;
      localStorage.removeItem("kata");
      localStorage.setItem("kata", JSON.stringify(dojo.kataBin));
      console.log(dojo.kataBin);
    }

    //listEl.appendChild(newClipper);
    clipperBin.appendChild(newClipper);
    range_ids();

    console.log(clipperBin);
    console.log(dojo.endTime);

    // Update Status
    dojo.startTime = dojo.endTime;
    dojo.startPercent = dojo.endPercent;
    dojo.endTime = (dojo.endPercent * dojo.duration) / 100;
    dojo.endPercent = dojo.endPercent + 10;

    console.log("On Build Clipper");
    console.log(dojo.startTime);
    console.log(dojo.endTime);

    //TODO: Build WaveSurfer Regions using regions object
  }

  static destroyClipper(leTarget) {
    if (leTarget.classList.contains("delete")) {
      leTarget.parentElement.parentElement.remove();
    }
    //region[i]remove();
  }

  static showAlert() {}

  static sanitizeDOM() {}
}

/**
 * Button that Loads Gallery thumbnails
 */

galleryBtn.addEventListener("click", () => {
  let gallArray = model.getImages();
  gallArray.forEach((thumb, index) => {
    let thumbSrc = thumb.media_details.sizes.thumbnail.source_url,
      thumbnail = thumbClone.cloneNode(true);
    thumbnail.children[0].src = thumbSrc;
    thumbnail.children[0].setAttribute("data-index", index);
    thumbBin.appendChild(thumbnail);
  });
});

/**
 * Button that selects an Image for a Clip
 *  It uses the thumbnail data index to drill back to the thumbnail object and find the corresponding main Image
 *  Then saves selected image url to local storage paired with it's Clipper
 *  STATUS: It's a little too procedural for my liking
 *  TODO: Needs refactoring and seperation of model operations from UI Operations
 */
thumbBin.addEventListener("click", (e) => {
  e.preventDefault();

  schwnk(e);
});

function schwnk(e) {
  let gallArray = model.getImages(),
    ii = parseInt(e.target.getAttribute("data-index"));
  console.log(gallArray[ii].source_url);

  dojo.kataBin.forEach((clipper, index) => {
    let imageSrc = clipper.mainImage,
      startClip = clipper.region.start,
      endClip = clipper.region.end,
      isActive = false;

    if (dojo.currentTime >= startClip && dojo.currentTime <= endClip) {
      console.log(index + ": this Kata is active");
      isActive = true;
      imageSrc = gallArray[ii].source_url;

      dojo.kataBin[index].mainImage = imageSrc;
      let replacement = dojo.kataBin[index];

      Storage.updateKata("kata", replacement, index);

      // let yas = Storage.getKata();

      // yas.[index].mainImage = imageSrc;

      // localStorage.setItem("Pfimbi-Yangu", JSON.stringify(yas));
      //dojo.kataBin = Storage.getKata();

      if ("" === imageSrc) {
        frameBtnEl.style.display = "flex";
        frameEl.style.display = "none";
      } else {
        frameImg.src = imageSrc;
        frameBtnEl.style.display = "none";
        document.querySelector(".frame").style.display = "block";
      }
    } else {
      isActive = false;
      console.log(index + ": this Kata is NOT active");
    }
  });
}

/*

I need to set up funnels for my object constructors
The data for the first clip will be inserted straight into pods field, maybe?
Or hardcoded in DOM and other initial variable values?
The Object is the one I should store,

1. On app start
2. On pic select
3. On clipper update
4. On Clipper Add
5. On Clipper Delete
6. On Project Save

The latest version of the object shall be stored in dojo.kataBin

The Object is the one I should get

1. On app start to build DOM based on default or previous values
2. On Play

*/

/*

TODO:

I need to figure out the first clip(s)
I neet to figure out the first build
But first, the Editor needs to be right

Instantiate Katana Class constructor
Instantiate TextSlide Class constructor
Instantiate Kata Class constructor

Where does Katana get her stuff from?
-- (I need to figure out Start End times stuff)

Where doe TextSlide Get her stuff from?
-- From the form in the text editor

Where does Kata get her other stuff?
-- id: DOM or Counter
-- index: DOM or Counter
-- mainImage: from Bin thumbs
-- Katana: From katana object
-- region
-- slide from Slide object

for each clipper, 
  if them time is right, then proceeced
    setup image container
    if no image is in container, prompt the user to add an image
    if image is in container, show the image
  else, 

  This check only happens on image click
  And on audio process 

  Active Index checker is now working, always has been, 
  its my Storage that has a problem




*/
