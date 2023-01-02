import { Scene } from '../../../game';

export class GameOverScene extends Scene {
  constructor(game) {
    super(game);

    // Initialize any variables or references needed for the game over scene here
  }

  start() {
    console.log('Game over scene started');
  }

  update() {
    // Update logic goes here
    // This could include checking for user input to return to the main menu or start a new game
  }

  draw(ctx) {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the game over screen
    ctx.font = '48px sans-serif';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Game Over', ctx.canvas.width / 2, ctx.canvas.height / 2);
  }
}
