const jokeBtn = document.getElementById("joke-button")! as HTMLButtonElement;
const jokeText = document.getElementById("joke")! as HTMLParagraphElement;

const newJoke = async () => {
  const req = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const data = await req.json();
  jokeText.textContent = data.joke;
};

newJoke();

jokeBtn.addEventListener("click", newJoke);
