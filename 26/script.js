"use strict";
const downBtn = document.getElementById("down-arrow");
const upBtn = document.getElementById("up-arrow");
const leftShifter = document.getElementById("left-shifter");
const rightShifter = document.getElementById("right-shifter");
let leftHeight = 300;
let rightHeight = 0;
downBtn.addEventListener("click", () => {
    leftHeight = (leftHeight + 100) % 400;
    leftShifter.style.top = `-${leftHeight}vh`;
    rightHeight = rightHeight + 100;
    if (rightHeight > 0) {
        rightHeight = -300;
    }
    rightShifter.style.top = `${rightHeight}vh`;
});
upBtn.addEventListener("click", () => {
    leftHeight = leftHeight - 100;
    if (leftHeight < 0) {
        leftHeight = 300;
    }
    leftShifter.style.top = `-${leftHeight}vh`;
    rightHeight = rightHeight - 100;
    if (rightHeight < -300) {
        rightHeight = 0;
    }
    rightShifter.style.top = `${rightHeight}vh`;
});
