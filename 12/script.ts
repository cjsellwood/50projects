const questionContainers = document.querySelectorAll(
  ".question-container"
)! as NodeListOf<HTMLLIElement>;

questionContainers.forEach((question) => {
  const button = question.querySelector(
    ".question-button"
  )! as HTMLButtonElement;
  button.addEventListener("click", (e: MouseEvent) => {
    if ([...question.classList].includes("open")) {
      question.classList.remove("open");
    } else {
      question.classList.add("open");
    }
  });
});
