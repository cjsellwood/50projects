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

const secondHand = document.getElementById("second-hand")! as HTMLDivElement;
const minuteHand = document.getElementById("minute-hand")! as HTMLDivElement;
const hourHand = document.getElementById("hour-hand")! as HTMLDivElement;

const time = document.getElementById("time")! as HTMLHeadingElement;
const date = document.getElementById("date")! as HTMLParagraphElement;
const day = document.getElementById("day")! as HTMLSpanElement;

const startClock = () => {
  setHands();
  setTime();
  setDate();
  setDay();

  setInterval(() => {
    setHands();
    setTime();
    setDay();
    setDate();
  }, 1000);
};

const setHands = () => {
  const dateNow = new Date();
  const hours = dateNow.getHours();
  const minutes = dateNow.getMinutes();
  hourHand.style.transform = `rotate(${
    ((hours + minutes / 60) / 12) * 360 - 90
  }deg)`;

  minuteHand.style.transform = `rotate(${(minutes / 60) * 360 - 90}deg)`;

  const seconds = dateNow.getSeconds();
  secondHand.style.transform = `rotate(${(seconds / 60) * 360 - 90}deg )`;
};

const setTime = () => {
  const dateNow = new Date();
  const timeNow = new Intl.DateTimeFormat("en-US", {
    minute: "2-digit",
    hour: "numeric",
  }).format(dateNow);

  time.textContent = timeNow;
};

const setDate = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const dateNow = new Date();
  const dayNumber = dateNow.getDay();
  const monthNumber = dateNow.getMonth();

  date.textContent = `${days[dayNumber]}, ${months[monthNumber]}`;
};

const setDay = () => {
  const dateNow = new Date();
  const dayNumber = dateNow.getDate();
  day.textContent = dayNumber.toString();
};

window.addEventListener("load", startClock);
