"use strict";
let screenPosition = 0;
let chosenInsect;
let score = 0;
const playButton = document.getElementById("play-button");
const choiceInsects = document.querySelectorAll(".choose-buttons > button");
const insectContainer = document.getElementById("insect-container");
const scoreDisplay = document.getElementById("score-display");
const nextScreen = () => {
    const container = document.querySelector(".container");
    screenPosition -= 100;
    container.style.top = `${screenPosition}%`;
};
playButton.addEventListener("click", () => {
    nextScreen();
});
choiceInsects.forEach((insect) => {
    insect.addEventListener("click", (e) => {
        const image = insect.querySelector("img");
        chosenInsect = image.src;
        nextScreen();
        setTimeout(() => {
            startGame();
        }, 1000);
    });
});
const startGame = () => {
    newInsect();
    const timeDisplay = document.getElementById("time-display");
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
    insect.style.top = `${Math.floor(Math.random() * (board.bottom - 200)) + (board.top + 80)}px`;
    insect.style.left = `${Math.floor(Math.random() * (board.right - 150)) + (board.left + 25)}px`;
    return insect;
};
const showWarning = () => {
    const warning = document.getElementById("warning");
    warning.style.display = "flex";
};
