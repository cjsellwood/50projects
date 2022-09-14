"use strict";
const sidebar = document.querySelector(".sidebar");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const toggleSidebar = () => {
    sidebar.classList.toggle("active");
};
openButton.addEventListener("click", toggleSidebar);
closeButton.addEventListener("click", toggleSidebar);
