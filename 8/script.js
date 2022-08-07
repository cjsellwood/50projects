"use strict";
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailLabel = document.getElementById("email-label");
const passwordLabel = document.getElementById("password-label");
emailInput.addEventListener("focusin", () => {
    emailInput.classList.add("typing");
    emailLabel.classList.add("typing");
});
emailInput.addEventListener("focusout", () => {
    if (emailInput.value === "") {
        emailInput.classList.remove("typing");
        emailLabel.classList.remove("typing");
    }
});
passwordInput.addEventListener("focusin", () => {
    passwordInput.classList.add("typing");
    passwordLabel.classList.add("typing");
});
passwordInput.addEventListener("focusout", () => {
    if (passwordInput.value === "") {
        passwordInput.classList.remove("typing");
        passwordLabel.classList.remove("typing");
    }
});
