const gridContainer = document.getElementById(
  "grid-container"
)! as HTMLDivElement;

const addGridItems = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundImage = `url(https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif)`;
      square.style.backgroundPosition = `${j * -125}px ${i * -125}px`;
      gridContainer.append(square);
    }
  }
};

addGridItems();

const magicButton = document.getElementById(
  "magic-button"
)! as HTMLButtonElement;

magicButton.addEventListener("click", () => {
  gridContainer.classList.toggle("joined");
});
