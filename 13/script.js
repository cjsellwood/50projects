"use strict";
const choiceTextarea = document.getElementById("choice-textarea");
const choicesContainer = document.getElementById("choices-container");
let choices = [];
choiceTextarea.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        pickChoice();
        choiceTextarea.value = "";
        return;
    }
    addChoices();
});
function addChoices() {
    choicesContainer.replaceChildren();
    // Remove values with no value or only spaces
    choices = choiceTextarea.value.split(",").filter((x) => x.trim() !== "");
    console.log(choices);
    choices.forEach((choice) => {
        const choiceElement = document.createElement("p");
        choiceElement.textContent = choice;
        choicesContainer.append(choiceElement);
    });
}
function pickChoice() {
    const choiceElements = choicesContainer.querySelectorAll("p");
    let i = 0;
    const interval = setInterval(() => {
        choiceElements.forEach((el) => {
            el.classList.remove("chosen");
        });
        const random = Math.floor(Math.random() * choiceElements.length);
        choiceElements[random].classList.add("chosen");
        i++;
        if (i >= 30) {
            clearInterval(interval);
        }
    }, 100);
}
