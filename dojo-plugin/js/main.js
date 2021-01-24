var kufunDojo = {

  init: function() {

    // Add any functions here you want
    // to run to start the application
    model.init();


  console.log();
    
  }

};

kufunDojo.init();

let uploadBtn = document.getElementById("slide_btn"),
    clipperEl = document.getElementById('clipper_1'),
    clipperEl_Id_Str = clipperEl.getAttribute('id');
    btn = document.getElementById("image_btn"),
    clipperBin = document.getElementById('clipper_bin'),
    clipper2 = clipperEl.cloneNode(true),
    clipper2_Id = update_Id_Str(clipperEl_Id_Str);

clipper2.setAttribute( 'id', clipper2_Id);
clipperBin.appendChild(clipper2);

    console.log(clipperBin);

function update_Id_Str(value){
  let strArray = value.split('_'),
      id = strArray[strArray.length - 1],
      newId = parseInt(id) + 1;

      strArray[strArray.length - 1] = newId;
      return strArray.toString().replace(',', '_' );

}

//   discharge = document.getElementById("ajax-div"),
//   sliderObj = {},
//   uploadBtn = document.getElementById("slide-upload");
// console.log("ndiripo!");

// console.log(dynamicData.restURL);
// console.log(dynamicData.dojo_id);

// console.log(connect);

// if (btn) {
//   btn.addEventListener("click", () => {
//     discharge.innerHTML = "";
//     console.log(btn);
//     console.log("I have been clicked");
    
//   });
// }



// function renderHTML(ourData) {
//   let i;

//   //console.log(sliderObj);
//   let fragEl = document.createDocumentFragment();
//   let imgTag;
//   for (i = 0; i < ourData.length; i++) {
//     sliderObj.id = ourData[i].id;
//     sliderObj.post = ourData[i].post;
//     sliderObj.src = ourData[i].guid.rendered;
//     sliderObj.thumb = ourData[i].media_details.sizes.thumbnail.source_url;
//     sliderObj.medium = ourData[i].media_details.sizes.medium.source_url;
//     //sliderObj.medium_large = ourData[i].media_details.sizes.medium_large.source_url;
//     //sliderObj.large = ourData[i].media_details.sizes.large.source_url;
//    // sliderObj.full = ourData[i].media_details.sizes.full.source_url;

//     binDiv = document.createElement("div");
//     binDiv.classList.add('bin_image');
//     imgTag = document.createElement("img");
//     imgTag.src = sliderObj.medium;
//     imgTag.classList.add('absolute_image');
//     binDiv.appendChild(imgTag);
//     fragEl.appendChild(binDiv);
//   }
//   console.log(fragEl);

//   discharge.appendChild(fragEl);
// }

if (uploadBtn) {
  uploadBtn.addEventListener("click", () => {
    
  });
}

let ourPostData = {
  // Get Form fields
  "title" :  'The Tile', //dynamicData._the_title,
  "content" : 'The Post',//dynamicData._the_content,
  "storage" : "{'do_id': 'test_id'}",
  "status" : "publish",
};

// var uploadSlide = new XMLHttpRequest();
// uploadSlide.open(
//   "POST",
//   dynamicData.restURL + "dojo"
// );
// uploadSlide.setRequestHeader("X-WP-Nonce", dynamicData.nonce);
// uploadSlide.setRequestHeader(
//   "Content-Type",
//   "application/json;charser=UTF-8"
// );
// console.log('Headers have been set up');
// console.log(ourPostData);
// uploadSlide.send(JSON.stringify(ourPostData));
// console.log(ourPostData);

// uploadSlide.onreadystatechange = () => {
//   if (uploadSlide.readyState == 4) {
//     console.log('upload ready');
//     if (uploadSlide.status == 201) {
//       // Clear form fields
//       alert("Done!");
//     } else {
//       alert("error posting- try again.");
//     }
//   }
// };