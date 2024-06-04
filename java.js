let left = document.querySelector(".left");
let right = document.querySelector(".right");
let courousel = document.querySelector(".slider");
let translate = 0;

left.addEventListener("click", () => {
  if (translate < 0) {
    translate = translate + 400;
    courousel.style.transform = "translateX(" + translate + "px)";
  }
});

right.addEventListener("click", () => {
  if (translate > -2400) {
    translate = translate - 400;
    courousel.style.transform = "translateX(" + translate + "px)";
  }
});
