let model = {};

let theKata;

model.init = function () {
  model.updateLocalStore();
  model.getAudio();
  model.getImages();
  model.getSlideStorage();
};

/**
 * Audio Section
 */

model.getAudio = function () {
  let audio = model.getLocalStore("dojo")[0].meta.audio;
  return audio;
};

model.getSlideStorage = function () {
  let storageArray = model.getLocalStore("dojo")[0].meta.storage;
  console.log(storageArray);
  return storageArray;
};

model.getImages = function (size) {
  let galleryArray = model.getLocalStore("dojo")[0].gallery;
  console.log(galleryArray);
  return galleryArray;
};

model.getLocalStore = function (key) {
  let store = JSON.parse(localStorage.getItem(key));
  return store;
};

model.updateLocalStore = function () {
  domLoad();
};

model.removeLocalStorage = function (data) {};

theKata = [
  {
    id: 1, // Make Global, Get from an Increment counter
    index: this.id - 1, // Make Global, as above
    mainImage: "src", // On thumbinal Click, get src and update this property
    clipper: {
      start: 50, // On Start, On Clone, on SetValue update, update this value
      end: 70, // On Start, On Clone, on SetValue update, update this value
      color: "#008877", //On start, On Clone
    },
    region: {
      start: 50, // On Start, On Clone, on SetValue update, update this value
      end: 70, // On Start, On Clone, on SetValue update, update this value
      color: "#008877", //On start, On Clone
    },
    slide: { // On Save
      title: "title",
      bullets: [
        "point number one",
        "point number two",
        "point number three",
        "point number four",
      ],
    },
  },
];

/*
Kata Updates
On launch, get initial Object and Build DOM, setup initial Object and set up listeners, 
On Clone, setup new Object and set up listeners
On Image Click, Clipper Update, Image Edit & Slide save, update local storage and Pod Storage Field

*/
