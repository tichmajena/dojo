let kataBin = Storage.getKata();

kataBin.forEach((clipper) => {
  let imageSrc = clipper.mainImage;

  if (null === imageSrc) {
    document.querySelector(".mainview_buttons").style.display = "flex";
    document.querySelector(".frame").style.display = "none";
  } else {
    document.querySelector(".mainview_buttons").style.display = "none";
    img = document.querySelector("frame").innerHTML;
    img.src = imageSrc;
    document.querySelector(".frame").style.display = "block";
  }
});
