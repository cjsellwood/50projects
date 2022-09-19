let screenPosition = 0;
let chosenInsect: string;
let score = 0;

const playButton = document.getElementById("play-button")! as HTMLButtonElement;
const choiceInsects = document.querySelectorAll(
  ".choose-buttons > button"
)! as NodeListOf<HTMLDivElement>;
const insectContainer = document.getElementById(
  "insect-container"
)! as HTMLDivElement;
const scoreDisplay = document.getElementById(
  "score-display"
)! as HTMLSpanElement;

const nextScreen = () => {
  const container = document.querySelector(".container")! as HTMLDivElement;
  screenPosition -= 100;
  container.style.top = `${screenPosition}%`;
};

playButton.addEventListener("click", () => {
  nextScreen();
});

choiceInsects.forEach((insect) => {
  insect.addEventListener("click", (e) => {
    const image = insect.querySelector("img")! as HTMLImageElement;
    chosenInsect = image.src;
    nextScreen();

    setTimeout(() => {
      startGame();
    }, 1000);
  });
});

const startGame = () => {
  newInsect();

  const timeDisplay = document.getElementById(
    "time-display"
  )! as HTMLSpanElement;
  const startTime = Date.now();

  setInterval(() => {
    const seconds = (Date.now() - startTime) / 1000;
    timeDisplay.textContent = `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  }, 1000);
};

const newInsect = () => {
  const insect = createInsect();
  insectContainer.append(insect);

  insect.addEventListener("click", () => {
    setTimeout(() => {
      newInsect();
    }, 700);
    setTimeout(() => {
      newInsect();
    }, 1400);

    insect.style.transform = `scale(0.01) ${insect.style.transform}`;
    setTimeout(() => {
      insect.remove();
    }, 500);

    score++;
    scoreDisplay.textContent = `${score}`;

    if (score === 20) {
      showWarning();
    }
  });
};

const createInsect = () => {
  const board = insectContainer.getBoundingClientRect();
  const insect = document.createElement("img");
  insect.src = chosenInsect;

  insect.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
  insect.style.top = `${
    Math.floor(Math.random() * (board.bottom - 200)) + (board.top + 80)
  }px`;
  insect.style.left = `${
    Math.floor(Math.random() * (board.right - 150)) + (board.left + 25)
  }px`;

  return insect;
};

const showWarning = () => {
  const warning = document.getElementById("warning")! as HTMLDivElement;
  warning.style.display = "flex";
};
