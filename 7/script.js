"use strict";
const pSide = document.querySelector(".p-container");
const xSide = document.querySelector(".x-container");
pSide.addEventListener("mouseenter", () => {
    pSide.style.width = "75%";
    xSide.style.width = "25%";
});
xSide.addEventListener("mouseenter", () => {
    pSide.style.width = "25%";
    xSide.style.width = "75%";
});
pSide.addEventListener("mouseleave", () => {
    pSide.style.width = "50%";
    xSide.style.width = "50%";
});
xSide.addEventListener("mouseleave", () => {
    pSide.style.width = "50%";
    xSide.style.width = "50%";
});
