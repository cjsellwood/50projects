const nav = document.querySelector("nav")! as HTMLElement;

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 250) {
    nav.classList.add("lowered");
  } else {
    nav.classList.remove("lowered");
  }
});
