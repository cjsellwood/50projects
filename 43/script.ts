const feedbackButtons = document.querySelectorAll(
  ".feedback-container > div"
)! as NodeListOf<HTMLDivElement>;

let selected = "Satisfied";

feedbackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    feedbackButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");
    selected = button.textContent?.match(/\w+/)![0]!;
  });
});

const sendButton = document.getElementById("send-button")! as HTMLButtonElement;

sendButton.addEventListener("click", () => {
  const container = document.querySelector(".container")! as HTMLDivElement;

  container.innerHTML = `
    <p class="emoji">❤️</p>
    <h1 class="title">Thank You!</h1>
    <h1 class="title">Feedback: ${selected}</h1>
    <p>We'll use your feedback to improve our <br>customer support</p>
  `;
});
