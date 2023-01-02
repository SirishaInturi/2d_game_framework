export class Constraint {
  constructor(point1, point2, length) {
    this.point1 = point1;
    this.point2 = point2;
    this.length = length;
  }

  update() {
    const dx = this.point1.x - this.point2.x;
    const dy = this.point1.y - this.point2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const difference = this.length - distance;
    const ratio = difference / distance;

    this.point1.x -= dx * 0.5 * ratio;
    this.point1.y -= dy * 0.5 * ratio;
    this.point2.x += dx * 0.5 * ratio;
    this.point2.y += dy * 0.5 * ratio;
  }
}
