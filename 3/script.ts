const rotateBtn = document.getElementById(
  "rotate-button"
)! as HTMLButtonElement;
const main = document.querySelector("main")! as HTMLElement;
const navMenu = document.querySelector(".nav-menu")! as HTMLElement;
let menuOpen = false;

rotateBtn.addEventListener("click", () => {
  if (!menuOpen) {
    main.style.transform = "rotate(-20deg)";
    navMenu.classList.remove("open");
    navMenu.style.transform = "translateX(0px)";
    rotateBtn.style.transform = "rotate(-90deg)";
    menuOpen = true;
  } else {
    main.style.transform = "rotate(0deg)";
    navMenu.classList.add("open");
    navMenu.style.transform = "translateX(-200px)";
    rotateBtn.style.transform = "rotate(0)";
    menuOpen = false;
  }
});
