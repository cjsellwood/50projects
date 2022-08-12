"use strict";
const questionContainers = document.querySelectorAll(".question-container");
questionContainers.forEach((question) => {
    const button = question.querySelector(".question-button");
    button.addEventListener("click", (e) => {
        if ([...question.classList].includes("open")) {
            question.classList.remove("open");
        }
        else {
            question.classList.add("open");
        }
    });
});
