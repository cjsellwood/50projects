"use strict";
const squares = document.querySelectorAll(".square");
const colors = [
    "rgb(255, 74, 74)",
    "rgb(89, 172, 236)",
    "rgb(83, 208, 116)",
    "rgb(255, 132, 0)",
    "rgb(146, 57, 198)",
];
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = randomColor;
        square.style.transition = "none";
        square.style.boxShadow = `0 0 5px ${randomColor}`;
    });
    square.addEventListener("mouseleave", () => {
        square.style.transition = "all 2s";
        square.style.backgroundColor = "rgb(32, 32, 32)";
        square.style.boxShadow = "none";
    });
});
