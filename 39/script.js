"use strict";
const passwordInputHandler = () => {
    const passwordInput = document.getElementById("password");
    passwordInput.addEventListener("input", () => {
        blurBackground(passwordInput.value.length);
    });
};
const blurBackground = (inputLength) => {
    const background = document.getElementById("background");
    const strength = 20 - inputLength * 2;
    background.style.filter = `blur(${strength}px)`;
};
passwordInputHandler();
