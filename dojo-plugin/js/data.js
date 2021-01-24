/**
 * Get Images via RestAPI
 */

let galleryURL= dynamicData.restURL + "media?parent=" + dynamicData.dojo_id + "";
let postURL = dynamicData.restURL + "dojo/" + dynamicData.dojo_id + "";
let data = [];

function getREST_Data(url){

    let dataRequest = new XMLHttpRequest();
    dataRequest.open(
      "GET",
      url
    );
    console.log('GOT: '+url);
    dataRequest.onload = () => {
      if (dataRequest.status >= 200 && dataRequest.status < 400) {
        
        if (url === postURL){
            let ourData = JSON.parse(dataRequest.responseText);
            ourData = ourData.audio;
            console.log('Audio Type: '+ typeof ourData);
            data.push(ourData);
            console.log(data);

        }else{
          let ourData = JSON.parse(dataRequest.responseText);

            console.log('Type: '+ typeof ourData);
        data.push(ourData);
        console.log(data);
    }
        
        

        //globalize(ourData);
      } else {
        console.log("Can't get the things");
      }
    };

    dataRequest.onerror = () => {
      console.log("connetction error");
    };

    dataRequest.send();

}

getREST_Data(postURL);
getREST_Data(galleryURL);


jsonData = JSON.stringify( { "audio": data[0], "gallery": data[1] });
console.log(jsonData);

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

