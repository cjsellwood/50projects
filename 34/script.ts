const animationContainer = document.getElementById(
  "animation-container"
)! as HTMLDivElement;

window.addEventListener("load", () => {
  createAnimation();
});

const createAnimation = () => {
  let number = 3;

  const numberElement = document.createElement("h1");
  numberElement.textContent = number.toString();

  const getReady = document.createElement("h2");
  getReady.textContent = "get ready";

  animationContainer.append(numberElement);
  animationContainer.append(getReady);

  const changeNumber = setInterval(() => {
    number--;
    numberElement.textContent = number.toString();

    if (number === -1) {
      clearInterval(changeNumber);
      animationContainer.replaceChildren();
      createRestart();
    }
  }, 1000);
};

const createRestart = () => {
  const goElement = document.createElement("p");
  goElement.textContent = "GO";

  const replayBtn = document.createElement("button");
  replayBtn.textContent = "Replay";

  animationContainer.append(goElement);
  animationContainer.append(replayBtn);

  replayBtn.addEventListener("click", () => {
    animationContainer.replaceChildren();
    createAnimation();
  });
};
