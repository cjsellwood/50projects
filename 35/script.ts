const imageContainer = document.querySelector(
  ".image-container"
)! as HTMLDivElement;

let imageNumber = 0;
let intervalCarousel: ReturnType<typeof setInterval>;

const startCarousel = () => {
  clearInterval(intervalCarousel);
  intervalCarousel = setInterval(() => {
    imageNumber++;
    if (imageNumber > 3) {
      imageNumber = 0;
    }
    imageContainer.style.transform = `translate(${imageNumber * -500}px)`;
  }, 2000);
};

const navigateCarouselButtons = () => {
  const nextBtn = document.getElementById("next-button")! as HTMLButtonElement;
  const prevBtn = document.getElementById("prev-button")! as HTMLButtonElement;
  
  nextBtn.addEventListener("click", () => {
    imageNumber++;
    if (imageNumber > 3) {
      imageNumber = 0;
    }
    imageContainer.style.transform = `translate(${imageNumber * -500}px)`;
    startCarousel();
  });
  
  prevBtn.addEventListener("click", () => {
    imageNumber--;
    if (imageNumber === -1) {
      imageNumber = 3;
    }
    imageContainer.style.transform = `translate(${imageNumber * -500}px)`;
    startCarousel();
  });
};

startCarousel();

navigateCarouselButtons();