const autoText = document.getElementById("auto-text")! as HTMLHeadingElement;
const text = autoText.textContent!;
let speed = 1;
let interval: ReturnType<typeof setInterval>;

window.addEventListener("load", () => {
  startAutoText();
});

const speedInput = document.getElementById("speed")! as HTMLInputElement;

speedInput.addEventListener("input", () => {
  speed = Number(speedInput.value);
  clearInterval(interval);

  startAutoText();
});

const startAutoText = () => {
  let i = 0;
  interval = setInterval(() => {
    i = (i + 1) % (text.length + 1);
    autoText.textContent = text.slice(0, i);
  }, 300 / speed);
};
