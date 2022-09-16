"use strict";
const loadImages = () => {
    const imageContainer = document.getElementById("image-container");
    const randomSize = uniqueRandomSize();
    for (let i = 0; i < 15; i++) {
        const image = document.createElement("img");
        image.src = `https://source.unsplash.com/random/${randomSize()}`;
        image.alt = "random image";
        imageContainer.append(image);
    }
};
const uniqueRandomSize = () => {
    let used = [];
    return () => {
        let size = generateSize();
        while (used.includes(size)) {
            size = generateSize();
        }
        used.push(size);
        return size;
    };
};
const generateSize = () => {
    const w = Math.floor(Math.random() * 10) + 300;
    const h = Math.floor(Math.random() * 10) + 300;
    const size = `${w}x${h}`;
    return size;
};
loadImages();
