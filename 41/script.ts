const codeInputs = document.querySelectorAll(
  ".code-form input"
)! as NodeListOf<HTMLInputElement>;

codeInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length > 1) {
      input.value = input.value[input.value.length - 1];
      return;
    }

    if (index === codeInputs.length - 1) {
      return;
    }

    if (input.value.length === 1) {
      codeInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Backspace") {
      return;
    }

    if (input.value.length === 1) {
      input.value = "";
    } else {
      codeInputs[index - 1].value = "";
      codeInputs[index - 1].focus();
    }
  });
});
