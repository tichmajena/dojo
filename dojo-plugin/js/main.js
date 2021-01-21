let btn = document.getElementById("ajax-btn"),
  discharge = document.getElementById("ajax-div"),
  sliderObj = {},
  uploadBtn = document.getElementById("slide-upload");
console.log("ndiripo!");

console.log(dynamicData.restURL);
console.log(dynamicData.dojo_id);

if (btn) {
  btn.addEventListener("click", () => {
    discharge.innerHTML = "";
    console.log(btn);
    console.log("I have been clicked");
    let ourRequest = new XMLHttpRequest();
    ourRequest.open(
      "GET",
      dynamicData.restURL + "media?parent=" + dynamicData.dojo_id + ""
    );
    ourRequest.onload = () => {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        let ourData = JSON.parse(ourRequest.responseText);

        renderHTML(ourData);
      } else {
        console.log("Can't get the things");
      }
    };

    ourRequest.onerror = () => {
      console.log("connetction error");
    };

    ourRequest.send();
  });
}



function renderHTML(ourData) {
  let i;

  //console.log(sliderObj);
  let fragEl = document.createDocumentFragment();
  let imgTag;
  for (i = 0; i < ourData.length; i++) {
    sliderObj.id = ourData[i].id;
    sliderObj.post = ourData[i].post;
    sliderObj.src = ourData[i].guid.rendered;
    sliderObj.thumb = ourData[i].media_details.sizes.thumbnail.source_url;
    sliderObj.medium = ourData[i].media_details.sizes.medium.source_url;
    //sliderObj.medium_large = ourData[i].media_details.sizes.medium_large.source_url;
    //sliderObj.large = ourData[i].media_details.sizes.large.source_url;
   // sliderObj.full = ourData[i].media_details.sizes.full.source_url;

    binDiv = document.createElement("div");
    binDiv.classList.add('bin_image');
    imgTag = document.createElement("img");
    imgTag.src = sliderObj.medium;
    imgTag.classList.add('absolute_image');
    binDiv.appendChild(imgTag);
    fragEl.appendChild(binDiv);
  }
  console.log(fragEl);

  discharge.appendChild(fragEl);
}

// if (uploadBtn) {
//   uploadBtn.addEventListener("click", () => {
//     let ourPostData = {
//       // Get Form fields
//       title: document.querySelector("ajax-uploap").value,
//       content: document.querySelector("ajax-body").value,
//       status: "publish",
//     };

//     var uploadSlide = new XMLHttpRequest();
//     uploadSlide.open(
//       "POST",
//       "https://dojo.local/wp-json/wp/v2/media?parent=36"
//     );
//     uploadSlide.setRequestHeader("X-WP-Nonce", varFromEnqueueFunction.nonce);
//     uploadSlide.setRequestHeader(
//       "Content-Type",
//       "application/json;charser=UTF-8"
//     );
//     uploadSlide.send(JSON.stringify(ourPostData));
//     uploadSlide.onreadystatechange = () => {
//       if (uploadSlide.readyState == 4) {
//         if (uploadSlide.status == 201) {
//           // Clear form fields
//         } else {
//           alert("error - try again.");
//         }
//       }
//     };
//   });
// }
