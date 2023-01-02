export class Label {
  constructor(x, y, text, font, color) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.font = font;
    this.color = color;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(this.text, this.x, this.y);
  }
}
