"use strict";
const image = document.querySelector("img");
const dragImage = document.createElement("img");
dragImage.src = image.src;
const draggable = document.getElementById("draggable");
draggable.addEventListener("dragstart", dragStartHandler);
draggable.addEventListener("dragend", () => {
    image.style.display = "block";
});
function dragStartHandler(e) {
    var _a, _b;
    const target = e.target;
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", target.id);
    (_b = e.dataTransfer) === null || _b === void 0 ? void 0 : _b.setDragImage(dragImage, e.offsetX, e.offsetY);
    image.style.display = "none";
}
function dragOverHandler(e) {
    var _a;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const target = e.target;
    if (target.classList.contains("container")) {
        target.classList.add("hovering");
    }
    if ((_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("container")) {
        target.parentElement.classList.add("hovering");
    }
}
function dragLeaveHandler(e) {
    var _a;
    const target = e.target;
    target.classList.remove("hovering");
    (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("hovering");
}
function dropHandler(e) {
    var _a, _b;
    e.preventDefault();
    const target = e.target;
    const imageId = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/plain");
    target.classList.remove("hovering");
    (_b = target.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("hovering");
    target.append(document.getElementById(imageId));
}
