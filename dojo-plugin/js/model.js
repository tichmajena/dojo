let model = {};
const dojo = {};

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
// Needed & Working
model.getAudio = function () {
  let audio = model.getLocalStore("dojo")[0].meta.audio;
  return audio;
};

// Needed & Working
model.getSlideStorage = function () {
  let podJSON = model.getLocalStore("dojo")[0].meta.storage;
  return podJSON;
};

model.getImages = function () {
  let galleryArray = model.getLocalStore("dojo")[0].gallery;
  return galleryArray;
};

// Needed & Working but not much in use
model.getLocalStore = function (key) {
  let store = JSON.parse(localStorage.getItem(key));
  return store;
};

//Much Needed & Working
model.updateLocalStore = function () {
  domLoad();
};

// Needed & in use
model.removeLocalStorage = function (data) {};

theKata = [
  {
    id: 1, // Make Global, Get from an Increment counter
    index: 0, // Make Global, as above
    mainImage: "", // On thumbinal Click, get src and update this property
    katana: {
      start: 0, // On Start, On Clone, on SetValue update, update this value
      end: 15, // On Start, On Clone, on SetValue update, update this value
      color: "#008877", //On start, On Clone
    },
    region: {
      start: 15, // On Start, On Clone, on SetValue update, update this value
      end: 30, // On Start, On Clone, on SetValue update, update this value
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

/**
 * Katana is the Clipper
 * @param start and @param end and calculated from range input value
 *
 */
class Katana {
  constructor(start, end, color) {
    this.start = start;
    this.end = end;
    this.color = color;
  }
}

class KatanaRegion {
  constructor(start, end, color) {
    this.start = start;
    this.end = end;
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
    this.katana = clipperItem;
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
// let slideItem = new TextSlide("The title", bullets);
// let clipperItem = new Katana(56, 78, "#99008");
// let kataa = new Kata(1, 0, "", clipperItem, "", slideItem);
// console.log(kataa);

class Storage {
  static getKata(data) {
    let pfimbi;

    if (localStorage.getItem(data) === null) {
      pfimbi = [];
    } else {
      pfimbi = JSON.parse(localStorage.getItem(data));
    }

    return pfimbi;
  }

  static addKata(kataOject, storageName) {
    let pfimbi = Storage.getKata(storageName);

    pfimbi.push(kataOject);
    localStorage.setItem(storageName, JSON.stringify(pfimbi));
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

localStorage.removeItem("kata");

// Start Here

let podJSON = model.getLocalStore("dojo")[0].meta.storage;
//let podJSON = "zvinhu";

let localStorageContent = Storage.getKata("kata");
storageStatus = localStorageContent.length;

console.log(localStorageContent);
console.log();

if (0 === storageStatus && podJSON === "") {
  dojo.kataBin = []; //Debut
  let kata = new Kata(
    1,
    0,
    "",
    { start: 0, end: 15 },
    { start: 0, end: 15 },
    {
      slide_title: "Write Your Slide Title",
      bullets: ["write point number one here"],
    }
  );
  dojo.kataBin.push(kata);
  dojo.startTime = kata.katana.start;
  dojo.startPercent = 0;
  dojo.endPercent = 10;

  localStorage.setItem("kata", JSON.stringify(dojo.kataBin));
} else if (0 === storageStatus && podJSON !== "") {
  console.log("muPod Munezvinu");
  dojo.kataBin = [];
  dojo.kataBin.push(podJSON);
  localStorage.setItem("kata", JSON.stringify(dojo.kataBin));
  dojo.startTime = 0;
  dojo.startPercent = 0;
  dojo.endPercent = 10;
} else {
  console.log("ndatora storage kare");
  dojo.kataBin = Storage.getKata("kata");
  dojo.startTime = 0;
  dojo.startPercent = 0;
  dojo.endPercent = 10;
}

/**
 *
 * @param {*} url  postUrl from data.js which is a REST API endpoint
 * @param {*} postData JSON data containing Edit cuts information
 */
function addPosts(url, postData) {
  fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: postData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
