let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function showSequenceOne() {
  image1.src = "Images/inforest.jpg";
  image2.src = "Images/wolfattack.jpg";
  image3.src = "Images/wolfsleep.jpg";
}

function showSequenceTwo() {
  image1.src = "Images/wolfsleep.jpg";
  image2.src = "Images/inforest.jpg";
  image3.src = "Images/wolfattack.jpg";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);