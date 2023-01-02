import { Scene } from '../../../game';

export class MainMenuScene extends Scene {
  constructor(game) {
    super(game);

    // Initialize any variables or references needed for the main menu scene here
  }

  start() {
    console.log('Main menu scene started');
  }

  update() {
    // Update logic goes here
    // This could include checking for user input, updating the positions of objects, etc.
  }

  draw(ctx) {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the main menu
    ctx.font = '48px sans-serif';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Main Menu', ctx.canvas.width / 2, ctx.canvas.height / 2);
  }
}
