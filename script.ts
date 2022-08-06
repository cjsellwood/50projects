const projectList = document.getElementById(
  "project-list"
)! as HTMLOListElement;

const names = [
  "Expanding Cards",
  "Progress Steps",
  "Rotating Navigation Animation",
  "Hidden Search Widget",
  "Blurry Loading",
  "Scroll Animation",
  "Split Landing Page",
  "Form Wave",
  "Sound Board",
  "Dad Jokes",
  "Event Keycodes",
  "Faq Collapse",
  "Random Choice Picker",
  "Animated Navigation",
  "Incrementing Counter",
  "Drink Water",
  "Movie App",
  "Background Slider",
  "Theme Clock",
  "Button Ripple Effect",
  "Drag N Drop",
  "Drawing App",
  "Kinetic Loader",
  "Content Placeholder",
  "Sticky Navbar",
  "Double Vertical Slider",
  "Toast Notification",
  "Github Profiles",
  "Double Click Heart",
  "Auto Text Effect",
  "Password Generator",
  "Good Cheap Fast",
  "Notes App",
  "Animated Countdown",
  "Image Carousel",
  "Hoverboard",
  "Pokedex",
  "Mobile Tab Navigation",
  "Password Strength Background",
  "3d Background Boxes",
  "Verify Account Ui",
  "Live User Filter",
  "Feedback Ui Design",
  "Custom Range Slider",
  "Netflix Mobile Navigation",
  "Quiz App",
  "Testimonial Box Switcher",
  "Random Image Feed",
  "Todo List",
  "Insect Catch Game",
];
for (let i = 0; i < names.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = `${i + 1}. ${names[i]}`;
  a.href = `${i + 1}/index.html`;
  li.append(a);
  projectList.append(li);
}
