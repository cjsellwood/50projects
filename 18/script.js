"use strict";
const leftBtn = document.getElementById("left-button");
const rightBtn = document.getElementById("right-button");
const backgroundEl = document.querySelector(".background");
const foregroundEl = document.querySelector(".foreground");
const backgroundImages = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];
let selectedBackground = 0;
leftBtn.addEventListener("click", () => {
    selectedBackground = (selectedBackground - 1 + 5) % 5;
    changeBackground();
});
rightBtn.addEventListener("click", () => {
    selectedBackground = (selectedBackground - 1 + 5) % 5;
    changeBackground();
});
const changeBackground = () => {
    backgroundEl.style.backgroundImage = `url(${backgroundImages[selectedBackground]})`;
    foregroundEl.style.backgroundImage = `url(${backgroundImages[selectedBackground]})`;
};
