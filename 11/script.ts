const startBox = document.getElementById("start-box")! as HTMLDivElement;
const keyContainer = document.getElementById(
  "key-container"
)! as HTMLDivElement;
const key = document.getElementById("key")! as HTMLHeadingElement;
const keyCode = document.getElementById("keyCode")! as HTMLHeadingElement;
const code = document.getElementById("code")! as HTMLHeadingElement;

const keyPressed = (e: KeyboardEvent) => {
  startBox.style.display = "none";
  keyContainer.style.display = "flex";
  key.textContent = e.key;
  keyCode.textContent = e.keyCode.toString();
  code.textContent = e.code;
};

document.addEventListener("keydown", keyPressed);
