export class AiAgent {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  update(deltaTime) {
    // This method should be overridden by a subclass to implement the AI logic.
  }
}
