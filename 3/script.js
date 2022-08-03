const rotateBtn = document.getElementById("rotate-button");
const main = document.querySelector("main");
let menu = false;

rotateBtn.addEventListener("click", () => {
  if (!menu) {
    main.style.transform = "rotate(-20deg)";
    menu = true;
  } else {
    main.style.transform = "rotate(0deg)";
    menu = false;
  }
});
