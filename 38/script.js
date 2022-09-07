"use strict";
const navList = document.querySelector(".nav-list");
const handleNav = (e) => {
    const navItems = navList.querySelectorAll("li");
    navItems.forEach((navItem) => {
        navItem.classList.remove("active");
    });
    const target = e.target;
    target.classList.add("active");
    const index = [...navItems].findIndex((navItem) => navItem === target);
    changeImage(index);
};
navList.addEventListener("click", handleNav);
const changeImage = (index) => {
    const imageContainer = document.querySelector(".image-container");
    const images = imageContainer.querySelectorAll("img");
    images.forEach((image) => {
        image.classList.remove("active");
    });
    images[index].classList.add("active");
};
