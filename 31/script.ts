interface Settings {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const generateBtn = document.getElementById(
  "generate-button"
)! as HTMLButtonElement;

generateBtn.addEventListener("click", (e) => {
  const settings = getSettings();

  const password = generatePassword(settings);

  displayPassword(password);
});

const getSettings = () => {
  const length = document.getElementById("length")! as HTMLInputElement;
  const uppercase = document.getElementById("uppercase")! as HTMLInputElement;
  const lowercase = document.getElementById("lowercase")! as HTMLInputElement;
  const numbers = document.getElementById("numbers")! as HTMLInputElement;
  const symbols = document.getElementById("symbols")! as HTMLInputElement;

  return {
    length: Number(length.value),
    uppercase: uppercase.checked,
    lowercase: lowercase.checked,
    numbers: numbers.checked,
    symbols: symbols.checked,
  };
};

const generatePassword = (settings: Settings) => {
  const characters = getCharacters(settings);

  if (!characters.length) {
    return "";
  }

  let password = "";
  for (let i = 0; i < settings.length; i++) {
    password += `${characters[Math.floor(Math.random() * characters.length)]}`;
  }

  return password;
};

const displayPassword = (password: string) => {
  const passwordElement = document.getElementById(
    "password"
  )! as HTMLParagraphElement;

  passwordElement.textContent = password;
};

const getCharacters = (settings: Settings) => {
  const characters = [];

  if (settings.uppercase) {
    for (let i = 65; i <= 90; i++) {
      characters.push(String.fromCharCode(i));
    }
  }

  if (settings.lowercase) {
    for (let i = 97; i <= 122; i++) {
      characters.push(String.fromCharCode(i));
    }
  }

  if (settings.numbers) {
    for (let i = 48; i <= 57; i++) {
      characters.push(String.fromCharCode(i));
    }
  }

  if (settings.symbols) {
    for (let i = 33; i <= 46; i++) {
      characters.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
      characters.push(String.fromCharCode(i));
    }
    for (let i = 91; i <= 96; i++) {
      characters.push(String.fromCharCode(i));
    }
    for (let i = 123; i <= 126; i++) {
      characters.push(String.fromCharCode(i));
    }
  }

  return characters;
};

const copyBtn = document.getElementById("copy-button")! as HTMLButtonElement;

copyBtn.addEventListener("click", () => {
  const passwordElement = document.getElementById(
    "password"
  )! as HTMLParagraphElement;
  const password = passwordElement.textContent;

  if (!password) {
    return;
  }

  navigator.clipboard.writeText(password);

  alert("Password copied to clipboard!");
});
