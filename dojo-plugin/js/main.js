var kufunDojo = {
  init: function () {
    // Add any functions here you want
    // to run to start the application
    model.init();
    range_ids();
    //view.init();

    console.log();
  },
};

window.addEventListener("storage", kufunDojo.init());

var media_uploader = null;

function open_media_uploader_gallery() {
  media_uploader = wp.media({
    frame: "post",
    state: "gallery-edit",
    multiple: true,
  });

  media_uploader.on("update", function () {
    var length = media_uploader.state().attributes.library.length;
    var images = media_uploader.state().attributes.library.models;

    for (var iii = 0; iii < length; iii++) {
      var image_url = images[iii].changed.url;
      var image_caption = images[iii].changed.caption;
      var image_title = images[iii].changed.title;
      var image_description = images[iii].changed.description;

      //this object contains URL for medium, small, large and full sizes URL.
      var sizes = images[iii].changed.sizes;
    }
  });

  media_uploader.open();
}

launchWPMedia = document.getElementById("slide_btn");

console.log(launchWPMedia);

launchWPMedia.addEventListener("click", open_media_uploader_gallery);

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

let ourPostData = {
  // Get Form fields
  title: "The Tile", //dynamicData._the_title,
  content: "The Post", //dynamicData._the_content,
  storage: "{'do_id': 'test_id'}",
  status: "publish",
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
