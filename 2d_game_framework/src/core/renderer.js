export class Renderer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render(gameObjects) {
    for (const gameObject of gameObjects) {
      gameObject.draw(this.context);
    }
  }
}