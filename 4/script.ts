const searchBtn = document.getElementById("search-toggle")! as HTMLButtonElement;
const searchInput = document.getElementById("search-input")! as HTMLInputElement;
let inputActive = false;

searchBtn.addEventListener("click", () => {
  console.log(inputActive);
  if (!inputActive) {
    searchInput.classList.add("open");
    searchInput.focus();
    inputActive = true;
  } else {
    searchInput.classList.remove("open");
    searchInput.focus();

    inputActive = false;
  }
});
