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

/*


var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}​

*/

// document
//       .querySelector('[data-action="play-region-2"]')
//       .addEventListener("click", function () {
//         let region = Object.values(Spectrum.regions.list)[1];
//         region.playLoop();
//       });

// <img id="img_id_1" src="url/puc1.jpg" onclick="select_img(this.src)"/>

// function select_img(src) {
//   alert(src);
//   document.getElementById("img_id_2").value=src;
// }

// // For
// onResize(timeInSeconds, 'start');

// region[0].play()

// region[0].on("udpate-end", () => {
//   console.log(region[0].end);
// });
