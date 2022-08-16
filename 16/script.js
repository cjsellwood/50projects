"use strict";
const glasses = document.querySelectorAll(".glass");
const waterContainer = document.getElementById("water-container");
const airAmount = document.getElementById("air-amount");
const waterAmount = document.getElementById("water-amount");
let level = 0;
glasses.forEach((glass, i) => {
    glass.addEventListener("click", () => {
        console.log(i, glass);
        if (i + 1 === level) {
            level = i;
        }
        else {
            level = i + 1;
        }
        colorGlasses(level);
        changeLevel(level);
    });
});
const colorGlasses = (fullGlasses) => {
    glasses.forEach((glass) => {
        glass.classList.remove("full");
    });
    for (let i = 0; i < fullGlasses; i++) {
        glasses[i].classList.add("full");
    }
};
const changeLevel = (fullGlasses) => {
    airAmount.textContent = `${(1 - fullGlasses / 8) * 2}L`;
    const remaining = document.createElement("p");
    remaining.textContent = "Remaining";
    airAmount.append(remaining);
    airAmount.style.height = `${(1 - fullGlasses / 8) * 100}%`;
    waterAmount.textContent = `${(fullGlasses / 8) * 100}%`;
    waterAmount.style.height = `${(fullGlasses / 8) * 100}%`;
};
