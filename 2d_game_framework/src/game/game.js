import { Renderer } from './renderer';
import { Input } from './input';
import { Physics } from './physics';
import { Scene } from './scene';

export class Game {
  constructor(options) {
    this.options = options;
    this.renderer = new Renderer(options.canvas, options.width, options.height);
    this.input = new Input(options.canvas);
    this.physics = new Physics();
    this.scene = new Scene();
  }

  async start() {
    this.renderer.start();
    this.input.start();
    this.physics.start();
    this.scene.start();
  }

  async stop() {
    this.renderer.stop();
    this.input.stop();
    this.physics.stop();
    this.scene.stop();
  }
}
