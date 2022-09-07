const passwordInputHandler = () => {
  const passwordInput = document.getElementById(
    "password"
  )! as HTMLInputElement;

  passwordInput.addEventListener("input", () => {
    blurBackground(passwordInput.value.length);
  });
};

const blurBackground = (inputLength: number) => {
  const background = document.getElementById("background")! as HTMLDivElement;

  const strength = 20 - inputLength * 2;
  background.style.filter = `blur(${strength}px)`;
};

passwordInputHandler();
