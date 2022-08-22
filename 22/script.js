"use strict";
class Drawing {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.increaseBtn = document.getElementById("increase-size");
        this.decreaseBtn = document.getElementById("decrease-size");
        this.sizeDisplay = document.getElementById("size");
        this.colorInput = document.getElementById("color-input");
        this.clearBtn = document.getElementById("clear-button");
        this.size = Number(this.sizeDisplay.textContent);
        this.color = this.colorInput.value;
        this.init();
    }
    updateSize() {
        this.sizeDisplay.textContent = this.size.toString();
    }
    init() {
        this.increaseBtn.addEventListener("click", () => {
            this.size = Math.min(50, this.size + 5);
            this.updateSize();
        });
        this.decreaseBtn.addEventListener("click", () => {
            this.size = Math.max(5, this.size - 5);
            this.updateSize();
        });
        this.colorInput.addEventListener("change", () => {
            this.color = this.colorInput.value;
        });
        this.clearBtn.addEventListener("click", () => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        });
        const moveMouse = (e) => {
            this.context.lineTo(e.offsetX, e.offsetY);
            this.context.stroke();
        };
        this.canvas.addEventListener("mousedown", (e) => {
            this.context.lineJoin = "round";
            this.context.lineCap = "round";
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.size * 2;
            this.context.beginPath();
            this.canvas.addEventListener("mousemove", moveMouse);
            this.canvas.addEventListener("mouseup", () => {
                this.canvas.removeEventListener("mousemove", moveMouse);
            });
        });
    }
}
const drawing = new Drawing("canvas");
