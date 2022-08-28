"use strict";
const likeImage = document.getElementById("like-image");
const likeCount = document.getElementById("likes");
let likes = 0;
likeImage.addEventListener("dblclick", (e) => {
    likes++;
    likeCount.textContent = likes.toString();
    const newHeart = document.createElement("img");
    newHeart.src = "heart.svg";
    newHeart.classList.add("new-heart");
    newHeart.style.left = `${e.pageX - 8}px`;
    newHeart.style.top = `${e.pageY - 8}px`;
    document.body.append(newHeart);
    setTimeout(() => {
        newHeart.style.transform = "scale(10)";
        newHeart.style.opacity = "0";
    }, 1);
    setTimeout(() => {
        newHeart.remove();
    }, 1000);
});
