const blurredBackground = document.getElementById("blurred-background");
const percentText = document.getElementById("percent-text");
let loaded = 0;

window.addEventListener("load", () => {
  blurredBackground.style.filter = "blur(0px)";
  percentText.style.opacity = "0";
  const percentInterval = setInterval(() => {
    if (loaded >= 100) {
      clearInterval(percentInterval);
    }
    loaded++;
    percentText.textContent = `${loaded}%`;
  }, 25);
});
