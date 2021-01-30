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

model.getImages = function () {
  let galleryArray = model.getLocalStore("dojo")[0].gallery;
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
    index: 0, // Make Global, as above
    mainImage: "", // On thumbinal Click, get src and update this property
    katana: {
      start: 0, // On Start, On Clone, on SetValue update, update this value
      end: 70, // On Start, On Clone, on SetValue update, update this value
      color: "#008877", //On start, On Clone
    },
    region: {
      start: 50, // On Start, On Clone, on SetValue update, update this value
      end: 70, // On Start, On Clone, on SetValue update, update this value
      color: "#008877", //On start, On Clone
    },
    slide: {
      // On Save
      title: "title",
      bullets: [
        "point number one",
        "point number two",
        "point number three",
        "point number four",
      ],
    },
  },

  {
    id: 2, // Make Global, Get from an Increment counter
    index: 1, // Make Global, as above
    mainImage: "", // On thumbinal Click, get src and update this property
    katana: {
      start: 70, // On Start, On Clone, on SetValue update, update this value
      end: 70, // On Start, On Clone, on SetValue update, update this value
      color: "#008877", //On start, On Clone
    },
    region: {
      start: 50, // On Start, On Clone, on SetValue update, update this value
      end: 70, // On Start, On Clone, on SetValue update, update this value
      color: "#008877", //On start, On Clone
    },
    slide: {
      // On Save
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

let slideItems = {
  // On Save
  title: "title",
  bullets: [
    "point number one",
    "point number two",
    "point number three",
    "point number four",
  ],
};

let bullets = [
  "point number one",
  "point number two",
  "point number three",
  "point number four",
];

/**
 * Katana is the Clipper
 * @param start and @param end and calculated from range input value
 *
 */
class Katana {
  constructor(start, end, color) {
    this.startTime = start;
    this.startEnd = end;
    this.color = color;
  }
}

/**
 * Kata is the Clipper
 * @param start and @param end and calculated from range input value
 *
 */
class Kata {
  constructor(id, index, mainImage, clipperItem, region, slide) {
    this.id = id;
    this.index = index;
    this.mainImage = mainImage;
    this.clipper = clipperItem;
    this.region = region;
    this.slide = slide;
  }
}

/**
 * Katana is the Clipper
 * @param start and @param end and calculated from range input value
 *
 */
class TextSlide {
  constructor(title, bullets, bgImage) {
    this.title = title;
    this.bullets = bullets;
    this.bgImage = bgImage;
  }
}
let slideItem = new TextSlide("The title", bullets);
let clipperItem = new Katana(56, 78, "#99008");
let kataa = new Kata(1, 0, "", clipperItem, "", slideItem);
console.log(kataa);

class Storage {
  static getKata() {
    let pfimbi;

    if (localStorage.getItem("Pfimbi-Yangu") === null) {
      pfimbi = [];
    } else {
      pfimbi = JSON.parse(localStorage.getItem("Pfimbi-Yangu"));
    }

    return pfimbi;
  }

  static addKata(leKata) {
    let pfimbi = Storage.getKata();

    pfimbi.push(leKata);
    localStorage.setItem("Pfimbi-Yangu", JSON.stringify(pfimbi));
  }

  static updateKata(index, newValue) {
    let pfimbi = Storage.getKata();

    pfimbi[index].mainImage = newValue;
    console.log(pfimbi[index]);
    pfimbi.splice(index, 1, pfimbi[index]);

    if (localStorage.getItem("Pfimbi-Yangu") !== null) {
      console.log("munezvinhu");
      let masinh = JSON.stringify(pfimbi);
      console.log("Masinh:");
      console.log(masinh);
      localStorage.setItem("Pfimbi-Yangu", masinh);
      console.log("I have Saved!");
    }
  }

  static removeKata(leID) {
    let pfimbi = Storage.getKata();

    pfimbi.forEach((kata, index) => {
      if (kata.id === leID) {
        pfimbi.splice(index, 1);
      }
    });

    localStorage.setItem("Pfimbi-Yangu", JSON.stringify(pfimbi));
  }
}

localStorage.removeItem("Pfimbi-Yangu");

Storage.addKata(theKata);
