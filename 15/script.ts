const countElements = document.querySelectorAll(
  ".count"
)! as NodeListOf<HTMLParagraphElement>;

window.addEventListener("load", () => {
  countElements.forEach((el) => {
    const finalValue = Number(el.textContent);
    let i = 0;
    const interval = setInterval(() => {
      el.textContent = i.toString();
      i += finalValue / 100;
      if (i > finalValue) {
        el.textContent = finalValue.toString();
        clearInterval(interval);
      }
    }, 10);
  });
});
