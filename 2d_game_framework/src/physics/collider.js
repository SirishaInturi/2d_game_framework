export class Collider {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  intersects(collider) {
    return (
      this.x < collider.x + collider.width &&
      this.x + this.width > collider.x &&
      this.y < collider.y + collider.height &&
      this.y + this.height > collider.y
    );
  }
}
