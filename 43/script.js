"use strict";
const feedbackButtons = document.querySelectorAll(".feedback-container > div");
let selected = "Satisfied";
feedbackButtons.forEach((button) => {
    button.addEventListener("click", () => {
        var _a;
        feedbackButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
        selected = (_a = button.textContent) === null || _a === void 0 ? void 0 : _a.match(/\w+/)[0];
    });
});
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = `
    <p class="emoji">❤️</p>
    <h1 class="title">Thank You!</h1>
    <h1 class="title">Feedback: ${selected}</h1>
    <p>We'll use your feedback to improve our <br>customer support</p>
  `;
});
