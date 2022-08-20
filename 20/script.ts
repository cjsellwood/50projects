const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", (e) => {
  let i = 0;
  const x = e.offsetX;
  const y = e.offsetY;
  const backgroundInterval = setInterval(() => {
    button.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, ${
      1 - i / 150
    }) ${i}%, purple ${i}%)`;
    i += 2;
    if (i > 150) {
      button.style.backgroundImage = "none";
      clearInterval(backgroundInterval);
    }
  }, 5);
});
