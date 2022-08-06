const images = document.querySelectorAll(
  ".image"
)! as NodeListOf<HTMLDivElement>;

images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((x) => {
      x.classList.remove("active");
    });
    image.classList.add("active");
  });
});
