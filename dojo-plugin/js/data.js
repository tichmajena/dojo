/**
 * Get Images via RestAPI
 */

let galleryURL= dynamicData.restURL + "media?parent=" + dynamicData.dojo_id + "";
let postURL = dynamicData.restURL + "dojo/" + dynamicData.dojo_id + "";
let data = [];

async function audioData(){
 const fetchResponse = await fetch(postURL);
 const postJSON = await fetchResponse.json();
 const audioLink = postJSON.audio;
 const sliderJSON = postJSON.storage;
 console.log(postJSON);
  return {audio: audioLink, storage: sliderJSON}
}

async function galleryData(){
  const fetchResponse = await fetch(galleryURL);
  const galleryJSON = await fetchResponse.json();
  console.log(galleryJSON);
    return galleryJSON;
 }

async function domLoad(){
console.log('DOM Loaded');
  let kata = {};

  try {
    kata.meta = await audioData();
    kata.pics = await galleryData();

  } catch (e) {
    console.log('Error!: ' + e);
  }

  data.push(kata)
  console.log(data);
  let jsonData = JSON.stringify(data);

  localStorage.setItem( 'dojo', jsonData);

}
//document.addEventListener('DOMContentLoaded', domLoad());



// getREST_Data(postURL);
// getREST_Data(galleryURL);


//jsonData = JSON.stringify( { "audio": data[0], "gallery": data[1] });
//console.log(jsonData);

/**
 * Get Audio URL via RestAPI
 */
// let audioRequest = new XMLHttpRequest();
//     audioRequest.open(
//       "GET",
//       url
//     );
//     audioRequest.onload = () => {
//       if (audioRequest.status >= 200 && audioRequest.status < 400) {
//         let postData = JSON.parse(audioRequest.responseText);
//         data.audio = postData.audio;
//         console.log(data.audio);

//         //globalize(audio);
//       } else {
//         console.log("Can't get the things");
//       }
//     };

//     audioRequest.onerror = () => {
//       console.log("connetction error");
//     };

//     audioRequest.send();

//     function globalize(data) {
//         //console.log(data);
//     }

