"use strict";
const buttons = document.querySelectorAll("button");
const audioElement = new Audio();
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        audioElement.src = `./sounds/${button.textContent}.mp3`;
        audioElement.play();
    });
});
