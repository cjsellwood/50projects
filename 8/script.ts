const emailInput = document.getElementById("email")! as HTMLInputElement;
const passwordInput = document.getElementById("password")! as HTMLInputElement;
const emailLabel = document.getElementById("email-label")! as HTMLLabelElement;
const passwordLabel = document.getElementById(
  "password-label"
)! as HTMLLabelElement;

emailInput.addEventListener("focusin", () => {
  emailInput.classList.add("typing");
  emailLabel.classList.add("typing");
});

emailInput.addEventListener("focusout", () => {
  if (emailInput.value === "") {
    emailInput.classList.remove("typing");
    emailLabel.classList.remove("typing");
  }
});

passwordInput.addEventListener("focusin", () => {
  passwordInput.classList.add("typing");
  passwordLabel.classList.add("typing");
});

passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value === "") {
    passwordInput.classList.remove("typing");
    passwordLabel.classList.remove("typing");
  }
});
