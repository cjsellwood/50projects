const buttons = document.querySelectorAll(
  "button"
)! as NodeListOf<HTMLButtonElement>;
const audioElement = new Audio();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audioElement.src = `./sounds/${button.textContent}.mp3`;
    audioElement.play();
  });
});
