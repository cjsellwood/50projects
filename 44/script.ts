const slideNumber = document.getElementById("slide-number")! as HTMLDivElement;
const slideInput = document.getElementById("slide-input")! as HTMLInputElement;

slideInput.addEventListener("input", () => {
  slideNumber.textContent = `${slideInput.value}`;
  slideNumber.style.left = -30 + 300 * Number(slideInput.value) / 108 + "px";
});
