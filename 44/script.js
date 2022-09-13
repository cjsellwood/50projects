"use strict";
const slideNumber = document.getElementById("slide-number");
const slideInput = document.getElementById("slide-input");
slideInput.addEventListener("input", () => {
    slideNumber.textContent = `${slideInput.value}`;
    slideNumber.style.left = -30 + 300 * Number(slideInput.value) / 108 + "px";
});
