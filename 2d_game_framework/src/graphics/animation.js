export class Animation {
  constructor(sprite, frames, frameDuration) {
    this.sprite = sprite;
    this.frames = frames;
    this.frameDuration = frameDuration;
    this.elapsedTime = 0;
  }

  update(deltaTime) {
    this.elapsedTime += deltaTime;
    if (this.elapsedTime > this.frameDuration) {
      this.elapsedTime = 0;
      this.frames.push(this.frames.shift());
      this.sprite.setFrame(...this.frames[0]);
    }
  }
}
