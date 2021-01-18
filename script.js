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

const dojoBtnEl = document.getElementById("kata");

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

/**
 *
 * The Kata
 * Kata instatiates an Object with an array of Images and Clippers
 * Clipper has methods which creates the DOM
 * The button has a counter which indexes the Clipper and the Image there by matchincg them
 *
 */

// const book1 = {
//   title: "Book One",
//   author: "John Doe",
//   year: "2000",
//   getSummary: () => {
//     return `${this.title} was written by ${this.author} in the year ${this.year}.`;
//   },
// };

function Book(leTitle, leAuthor, leYear) {
  this.title = leTitle;
  this.author = leAuthor;
  this.year = leYear;
  this.getSummary = () => {
    return `${this.title} was written by ${this.author} in the year ${this.year}.`;
  };
  this.getAge = () => {
    years = new Date().getFullYear() - parseInt(this.year);
    return `
    ${this.title} is ${years} years old.
  `;
  };
}

const book1 = new Book("The LOTR", "J.R.R Tolkein", "1950");

const book2 = new Book("GOT", "G.R.R Martin", "2003");

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

const mag1 = new Magazine("GQ", "me", "2021", "JAN");

class Bhuku {
  constructor(leTitle, leAuthor, leYear) {
    this.title = leTitle;
    this.author = leAuthor;
    this.year = leYear;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}.`;
  }
  getAge() {
    years = new Date().getFullYear() - parseInt(this.year);
    return `${this.title} is ${years} years old.`;
  }

  revise(leNewYear) {
    this.year = leNewYear;
    this.revised = true;
  }

  static topBookStores() {
    return `Barnes and Noble`;
  }
}

const book3 = new Bhuku("The Hobbit", "J.R.R Tolkein", "1960");
book3.revise("1973");

class Journal extends Bhuku {
  constructor(title, author, year, month) {
    super(title, author, year, month);
    this.month = month;
  }
}

const journal1 = new Journal("Journal One", "IAZ", "2020", "DEC");

let dojoKata = {
  audio: "Json with Audio",
  clipper: [{ item: "ClipperObj1" }, { item: "ClipperObj3" }, "etc"],
  images: [1, 2, 3, 4, 5, "etc"],
};

let dojo_id = -1;

dojoBtnEl.addEventListener("click", () => {
  dojo_id++;
  createClipper(dojo_id);
});

function createClipper(leDojo_id) {
  console.log(dojo_id);
  // Push new Clipper Object into dojoKata Array
  // Create Clipper DOM using the Object
  // Setup add image button
  // Get ready to push image into image array
  // On Add Image Button Click display Images and WP upload button
  // Loop throught Images and add event Listeners
  // On click, add attribute to image and push it to array
  // Stringify dojoKata and Store it in Local Storage or Wordpress DB
  // Throw image onto the screen
  // Push New Region in Wavesurfer wave
  // Bind slider values to clip values
  // Change Waveseurfer seeker behaviour on zoom
  // Wavesurfer time stamps
  // ------Display audio time
  // Store dojoKata Object in Pods Code Field via API

  /*

let ClipperObj = {

  startClip: method that check previous endClip and returns the value, else 0
  endClip: default value
  dojo_id: dojo_id
  color: method to generate random color
  image_thumb: 
  full_image: 


}

*/
}
