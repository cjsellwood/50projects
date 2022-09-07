const navList = document.querySelector(".nav-list")! as HTMLUListElement;

const handleNav = (e: MouseEvent) => {
  const navItems = navList.querySelectorAll("li")! as NodeListOf<HTMLLIElement>;
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });

  const target = e.target! as HTMLLIElement;
  target.classList.add("active");

  const index = [...navItems].findIndex((navItem) => navItem === target);

  changeImage(index);
};

navList.addEventListener("click", handleNav);

const changeImage = (index: number) => {
  const imageContainer = document.querySelector(
    ".image-container"
  )! as HTMLDivElement;

  const images = imageContainer.querySelectorAll(
    "img"
  )! as NodeListOf<HTMLImageElement>;

  images.forEach((image) => {
    image.classList.remove("active");
  });

  images[index].classList.add("active");
};
