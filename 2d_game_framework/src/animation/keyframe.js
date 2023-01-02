export class Keyframe {
  constructor(frame, x, y, rotation, scaleX = 1, scaleY = 1) {
    this.frame = frame;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
}
