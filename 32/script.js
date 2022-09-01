"use strict";
const goodToggle = document.getElementById("good");
const cheapToggle = document.getElementById("cheap");
const fastToggle = document.getElementById("fast");
const handleToggles = (inputToggles) => {
    let checked = [];
    inputToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const label = getLabel(toggle.id);
            if (toggle.checked) {
                label.classList.add("checked");
                checked.push(toggle);
            }
            else {
                label.classList.remove("checked");
                checked = [...checked].filter((input) => input !== toggle);
            }
            if (checked.length === inputToggles.length) {
                checked[0].checked = false;
                const selectedLabel = getLabel(checked[0].id);
                selectedLabel.classList.remove("checked");
                checked = [...checked].slice(1, inputToggles.length);
            }
        });
    });
};
handleToggles([goodToggle, cheapToggle, fastToggle]);
const getLabel = (inputId) => {
    return document.querySelector(`[for="${inputId}"]`);
};
