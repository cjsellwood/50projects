const image = document.querySelector("img")! as HTMLImageElement;
const dragImage = document.createElement("img");
dragImage.src = image.src;

const draggable = document.getElementById("draggable")! as HTMLImageElement;

draggable.addEventListener("dragstart", dragStartHandler);
draggable.addEventListener("dragend", () => {
  image.style.display = "block";
});

function dragStartHandler(e: DragEvent) {
  const target = e.target as HTMLImageElement;
  e.dataTransfer?.setData("text/plain", target.id);
  e.dataTransfer?.setDragImage(dragImage, e.offsetX, e.offsetY);

  image.style.display = "none";
}

function dragOverHandler(e: DragEvent) {
  e.preventDefault();
  e.dataTransfer!.dropEffect = "move";
  const target = e.target as HTMLDivElement;
  if (target.classList.contains("container")) {
    target.classList.add("hovering");
  }
  if (target.parentElement?.classList.contains("container")) {
    target.parentElement.classList.add("hovering");
  }
}

function dragLeaveHandler(e: DragEvent) {
  const target = e.target as HTMLDivElement;
  target.classList.remove("hovering");
  target.parentElement?.classList.remove("hovering");
}

function dropHandler(e: DragEvent) {
  e.preventDefault();

  const target = e.target! as HTMLDivElement;
  const imageId = e.dataTransfer?.getData("text/plain")!;
  target.classList.remove("hovering");
  target.parentElement?.classList.remove("hovering");
  target.append(document.getElementById(imageId)!);
}
