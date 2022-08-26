"use strict";
const downBtn = document.getElementById("down-arrow");
const upBtn = document.getElementById("up-arrow");
const leftShifter = document.getElementById("left-shifter");
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
