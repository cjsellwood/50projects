const themeBtn = document.getElementById("theme-button")! as HTMLButtonElement;
let darkMode = false;

const toggleTheme = () => {
  if (!darkMode) {
    darkMode = true;
    themeBtn.textContent = "Light mode";
    document.documentElement.classList.add("dark");
  } else {
    darkMode = false;
    themeBtn.textContent = "Dark mode";
    document.documentElement.classList.remove("dark");
  }
};

themeBtn.addEventListener("click", toggleTheme);
