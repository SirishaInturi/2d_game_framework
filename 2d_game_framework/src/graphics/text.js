export class Text {
  constructor(text, font, color, align) {
    this.text = text;
    this.font = font;
    this.color = color;
    this.align = align;
  }

  draw(context, x, y) {
    context.font = this.font;
    context.fillStyle = this.color;
    context.textAlign = this.align;
    context.fillText(this.text, x, y);
  }
}
