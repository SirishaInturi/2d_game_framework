import { Sprite } from './sprite';

export class Button extends Sprite {
  constructor(x, y, width, height, text, font, color, hoverColor, callback) {
    super(x, y, width, height);
    this.text = text;
    this.font = font;
    this.color = color;
    this.hoverColor = hoverColor;
    this.callback = callback;
    this.hovering = false;
  }

  update(input) {
    if (this.contains(input.mouse.x, input.mouse.y)) {
      this.hovering = true;
      if (input.mouse.left.down) {
        this.callback();
      }
    } else {
      this.hovering = false;
    }
  }

  render(ctx) {
    if (this.hovering) {
      ctx.fillStyle = this.hoverColor;
    } else {
      ctx.fillStyle = this.color;
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.font = this.font;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
  }
}
