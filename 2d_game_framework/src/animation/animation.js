export class Animation {
  constructor(frames, frameLength, loop = false) {
    this.frames = frames;
    this.frameLength = frameLength;
    this.loop = loop;
    this.elapsedTime = 0;
    this.currentFrame = 0;
  }

  update(dt) {
    this.elapsedTime += dt;
    if (this.elapsedTime > this.frameLength) {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      this.elapsedTime -= this.frameLength;
    }
  }

  getCurrentFrame() {
    return this.frames[this.currentFrame];
  }
}
