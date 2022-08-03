const rotateBtn = document.getElementById("rotate-button");
const main = document.querySelector("main");
const navMenu = document.querySelector(".nav-menu");
let menuOpen = false;

rotateBtn.addEventListener("click", () => {
  if (!menuOpen) {
    main.style.transform = "rotate(-20deg)";
    navMenu.classList.remove("open");
    navMenu.style.transform = "translateX(0px)"
    menuOpen = true;
  } else {
    main.style.transform = "rotate(0deg)";
    navMenu.classList.add("open");
    navMenu.style.transform = "translateX(-200px)"
    menuOpen = false;
  }
});
