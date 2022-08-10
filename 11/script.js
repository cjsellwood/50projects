"use strict";
const startBox = document.getElementById("start-box");
const keyContainer = document.getElementById("key-container");
const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const code = document.getElementById("code");
const keyPressed = (e) => {
    startBox.style.display = "none";
    keyContainer.style.display = "flex";
    key.textContent = e.key;
    keyCode.textContent = e.keyCode.toString();
    code.textContent = e.code;
};
document.addEventListener("keydown", keyPressed);
