"use strict";
const autoText = document.getElementById("auto-text");
const text = autoText.textContent;
let speed = 1;
let interval;
window.addEventListener("load", () => {
    startAutoText();
});
const speedInput = document.getElementById("speed");
speedInput.addEventListener("input", () => {
    speed = Number(speedInput.value);
    clearInterval(interval);
    startAutoText();
});
const startAutoText = () => {
    let i = 0;
    interval = setInterval(() => {
        i = (i + 1) % (text.length + 1);
        autoText.textContent = text.slice(0, i);
    }, 300 / speed);
};
