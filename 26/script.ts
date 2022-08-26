const downBtn = document.getElementById("down-arrow")! as HTMLButtonElement;
const upBtn = document.getElementById("up-arrow")! as HTMLButtonElement;
const leftShifter = document.getElementById("left-shifter")! as HTMLDivElement;

let leftHeight = 300;

downBtn.addEventListener("click", () => {
  leftHeight = (leftHeight + 100) % 400;
  leftShifter.style.top = `-${leftHeight}vh`;
});

upBtn.addEventListener("click", () => {
  leftHeight = (leftHeight - 100);
  if (leftHeight < 0) {
    leftHeight = 300;
  }
  leftShifter.style.top = `-${leftHeight}vh`;
});
