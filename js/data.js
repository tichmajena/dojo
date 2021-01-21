  
  let ourRequest = new XMLHttpRequest();
    ourRequest.open(
      "GET",
      dynamicData.restURL + "media?parent=" + dynamicData.dojo_id + ""
    );
    ourRequest.onload = () => {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        let galleryData = ourRequest.responseText;
      } else {
        console.log("Can't get the things");
      }
    };

    ourRequest.onerror = () => {
      console.log("connetction error");
    };

    ourRequest.send();

    console.log(galleryData);
