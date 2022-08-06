// Move content box onto screen if bottom is in window
function moveContent() {
  const windowHeight = window.innerHeight;
  for (let i = 0; i < contentBoxes.length; i++) {
    const boxBottomPosition =
      contentBoxes[i].offsetTop + contentBoxes[i].clientHeight;
    if (boxBottomPosition < windowHeight + scrollY) {
      contentBoxes[i].classList.add("center");
    } else {
      contentBoxes[i].classList.remove("center");
    }
  }
}

const contentBoxes = document.querySelectorAll(
  ".content"
)! as NodeListOf<HTMLDivElement>;

moveContent();

window.addEventListener("scroll", () => {
  moveContent();
});
