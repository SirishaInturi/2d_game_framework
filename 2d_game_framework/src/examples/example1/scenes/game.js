import { Scene } from '../../../game';

export class GameScene extends Scene {
  constructor(game) {
    super(game);

    // Initialize any variables or references needed for the game scene here
  }

  start() {
    console.log('Game scene started');
  }

  update() {
    // Update logic goes here
    // This could include checking for user input, updating the positions of objects, checking for collisions, etc.
  }

  draw(ctx) {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the game
    // This could include drawing the background, the player character, enemies, etc.
  }
}
