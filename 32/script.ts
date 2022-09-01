const goodToggle = document.getElementById("good")! as HTMLInputElement;
const cheapToggle = document.getElementById("cheap")! as HTMLInputElement;
const fastToggle = document.getElementById("fast")! as HTMLInputElement;

const handleToggles = (inputToggles: HTMLInputElement[]) => {
  let checked: HTMLInputElement[] = [];
  inputToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const label = getLabel(toggle.id);

      if (toggle.checked) {
        label.classList.add("checked");
        checked.push(toggle);
      } else {
        label.classList.remove("checked");
        checked = [...checked].filter((input) => input !== toggle);
      }

      if (checked.length === inputToggles.length) {
        checked[0].checked = false;
        const selectedLabel = getLabel(checked[0].id);
        selectedLabel.classList.remove("checked");

        checked = [...checked].slice(1, inputToggles.length);
      }
    });
  });
};

handleToggles([goodToggle, cheapToggle, fastToggle]);

const getLabel = (inputId: string) => {
  return document.querySelector(`[for="${inputId}"]`)! as HTMLLabelElement;
};
