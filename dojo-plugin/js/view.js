const inputLeft = document.getElementById("input-left"),
  inputRight = document.getElementById("input-right"),
  thumbLeft = document.getElementById("thumb_left"),
  thumbRight = document.getElementById("thumb_right"),
  //frame = document.getElementById(".slider-image"),
  range = document.getElementById("clipper_range");
  const dojo = {};

  function setLeftValue() {
    let beginInput = inputLeft,
      min = parseInt(beginInput.min),
      max = parseInt(beginInput.max);
  
    beginInput.value = Math.min(
      parseInt(beginInput.value),
      parseInt(inputRight.value) - 1
    );
  
    let beginPercent = ((beginInput.value - min) / (max - min)) * 100;
  
    thumbLeft.style.left = beginPercent + "%";
    range.style.left = beginPercent + "%";
    dojo.beginPercent = beginPercent;
  }
  
  function setRightValue() {
    let endInput = inputRight,
      min = parseInt(endInput.min),
      max = parseInt(endInput.max);
  
    endInput.value = Math.max(
      parseInt(endInput.value),
      parseInt(inputLeft.value) + 1
    );
  
    let endPercent = ((endInput.value - min) / (max - min)) * 100;
  
    thumbRight.style.right = 100 - endPercent + "%";
    range.style.right = 100 - endPercent + "%";
    dojo.endPercent = endPercent;
  }
  
  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);