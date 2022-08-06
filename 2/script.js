"use strict";
let number = 1;
const progressBar = document.querySelector(".progress-bar");
const numberElements = document.querySelectorAll(".number");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {
    number += 1;
    disableButtons();
    changeProgress();
    colorNumberBorders();
});
prevButton.addEventListener("click", () => {
    number -= 1;
    disableButtons();
    changeProgress();
    colorNumberBorders();
});
// Disable or enable buttons as required
function disableButtons() {
    prevButton.disabled = false;
    nextButton.disabled = false;
    if (number === 1) {
        prevButton.disabled = true;
    }
    else if (number === numberElements.length) {
        nextButton.disabled = true;
    }
}
// Change width of progress bar to a percentage of complete
function changeProgress() {
    progressBar.style.width = `${100 * ((number - 1) / (numberElements.length - 1))}%`;
}
// Change borders on numbers
function colorNumberBorders() {
    numberElements.forEach((el, i) => {
        el.classList.remove("active");
        if (i < number) {
            el.classList.add("active");
        }
    });
}
