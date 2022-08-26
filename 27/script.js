"use strict";
const notifyBtn = document.getElementById("notify-button");
const toastContainer = document.getElementById("toast-container");
const randomNumber = () => {
    const numbers = ["One", "Two", "Three", "Four"];
    return numbers[Math.floor(Math.random() * 4)];
};
const randomColor = () => {
    const colors = ["red", "green", "purple"];
    return colors[Math.floor(Math.random() * 3)];
};
const addToast = () => {
    const toastElement = document.createElement("div");
    toastElement.classList.add("toast");
    toastElement.textContent = `Message ${randomNumber()}`;
    toastElement.style.color = randomColor();
    toastContainer.append(toastElement);
    setTimeout(() => {
        toastElement.remove();
    }, 3000);
};
notifyBtn.addEventListener("click", addToast);
