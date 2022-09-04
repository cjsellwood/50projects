"use strict";
const imageContainer = document.querySelector(".image-container");
let imageNumber = 0;
let intervalCarousel;
const startCarousel = () => {
    clearInterval(intervalCarousel);
    intervalCarousel = setInterval(() => {
        imageNumber++;
        if (imageNumber > 3) {
            imageNumber = 0;
        }
        imageContainer.style.transform = `translate(${imageNumber * -500}px)`;
    }, 2000);
};
const navigateCarouselButtons = () => {
    const nextBtn = document.getElementById("next-button");
    const prevBtn = document.getElementById("prev-button");
    nextBtn.addEventListener("click", () => {
        imageNumber++;
        if (imageNumber > 3) {
            imageNumber = 0;
        }
        imageContainer.style.transform = `translate(${imageNumber * -500}px)`;
        startCarousel();
    });
    prevBtn.addEventListener("click", () => {
        imageNumber--;
        if (imageNumber === -1) {
            imageNumber = 3;
        }
        imageContainer.style.transform = `translate(${imageNumber * -500}px)`;
        startCarousel();
    });
};
startCarousel();
navigateCarouselButtons();
