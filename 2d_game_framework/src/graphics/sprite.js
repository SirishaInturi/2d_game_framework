export class Sprite {
  constructor(imageUrl, frameWidth, frameHeight) {
    this.image = new Image();
    this.image.src = imageUrl;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.currentFrame = { x: 0, y: 0 };
  }

  setFrame(x, y) {
    this.currentFrame.x = x;
    this.currentFrame.y = y;
  }

  draw(context, x, y) {
    context.drawImage(
      this.image,
      this.currentFrame.x * this.frameWidth,
      this.currentFrame.y * this.frameHeight,
      this.frameWidth,
      this.frameHeight,
      x,
      y,
      this.frameWidth,
      this.frameHeight
    );
  }
}
