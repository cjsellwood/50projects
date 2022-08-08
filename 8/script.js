"use strict";
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailLabel = document.getElementById("email-label");
const passwordLabel = document.getElementById("password-label");
const emailLetters = emailLabel.querySelectorAll("span");
const passwordLetters = passwordLabel.querySelectorAll("span");
emailInput.addEventListener("focusin", () => {
    emailInput.classList.add("typing");
    emailLabel.classList.add("typing");
    emailLetters.forEach((letter, i) => {
        letter.style.transform = "translateY(-24px)";
        letter.style.transitionDelay = `${i / 20}s`;
    });
});
emailInput.addEventListener("focusout", () => {
    if (emailInput.value === "") {
        emailInput.classList.remove("typing");
        emailLabel.classList.remove("typing");
        emailLetters.forEach((letter, i) => {
            letter.style.transform = "translateY(0px)";
            letter.style.transitionDelay = `${i / 20}s`;
        });
    }
});
passwordInput.addEventListener("focusin", () => {
    passwordInput.classList.add("typing");
    passwordLabel.classList.add("typing");
    passwordLetters.forEach((letter, i) => {
        letter.style.transform = "translateY(-24px)";
        letter.style.transitionDelay = `${i / 20}s`;
    });
});
passwordInput.addEventListener("focusout", () => {
    if (passwordInput.value === "") {
        passwordInput.classList.remove("typing");
        passwordLabel.classList.remove("typing");
        passwordLetters.forEach((letter, i) => {
            letter.style.transform = "translateY(0px)";
            letter.style.transitionDelay = `${i / 20}s`;
        });
    }
});
