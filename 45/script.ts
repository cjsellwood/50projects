const sidebar = document.querySelector(".sidebar")! as HTMLDivElement;
const openButton = document.getElementById("open-button")! as HTMLButtonElement;
const closeButton = document.getElementById(
  "close-button"
)! as HTMLButtonElement;

const toggleSidebar = () => {
  sidebar.classList.toggle("active");
};

openButton.addEventListener("click", toggleSidebar);
closeButton.addEventListener("click", toggleSidebar);
