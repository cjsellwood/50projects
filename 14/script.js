"use strict";
const navBtn = document.getElementById("nav-button");
let showMenu = true;
const linkList = document.querySelector("ul");
navBtn.addEventListener("click", () => {
    if (showMenu) {
        linkList.classList.add("hide");
        navBtn.classList.add("hide");
        showMenu = !showMenu;
    }
    else {
        linkList.classList.remove("hide");
        navBtn.classList.remove("hide");
        showMenu = !showMenu;
    }
});
