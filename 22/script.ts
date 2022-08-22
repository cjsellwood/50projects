class Drawing {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private increaseBtn: HTMLButtonElement;
  private decreaseBtn: HTMLButtonElement;
  private sizeDisplay: HTMLButtonElement;
  private colorInput: HTMLInputElement;
  private clearBtn: HTMLButtonElement;

  private size: number;
  private color: string;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId)! as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d")!;
    this.increaseBtn = document.getElementById(
      "increase-size"
    )! as HTMLButtonElement;
    this.decreaseBtn = document.getElementById(
      "decrease-size"
    )! as HTMLButtonElement;
    this.sizeDisplay = document.getElementById("size")! as HTMLButtonElement;
    this.colorInput = document.getElementById(
      "color-input"
    )! as HTMLInputElement;
    this.clearBtn = document.getElementById(
      "clear-button"
    )! as HTMLButtonElement;

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

    const moveMouse = (e: MouseEvent) => {
      this.context.lineTo(e.offsetX, e.offsetY);
      this.context.stroke();
    };

    this.canvas.addEventListener("mousedown", (e: MouseEvent) => {
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