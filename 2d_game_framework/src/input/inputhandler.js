export class InputHandler {
  constructor(canvas) {
    this.keys = new Set();
    this.buttons = new Set();
    this.mouseX = 0;
    this.mouseY = 0;

    canvas.addEventListener('keydown', (event) => this.keys.add(event.code));
    canvas.addEventListener('keyup', (event) => this.keys.delete(event.code));
    canvas.addEventListener('mousedown', (event) => this.buttons.add(event.button));
    canvas.addEventListener('mouseup', (event) => this.buttons.delete(event.button));
    canvas.addEventListener('mousemove', (event) => {
      this.mouseX = event.offsetX;
      this.mouseY = event.offsetY;
    });
  }

  isKeyDown(key) {
    return this.keys.has(key);
  }

  isButtonDown(button) {
    return this.buttons.has(button);
  }
}
