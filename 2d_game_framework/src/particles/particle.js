import { randomRange, degreesToRadians } from './mathutils';

export class Particle {
  constructor(x, y, minAngle, maxAngle, minSize, maxSize, minSpeed, maxSpeed, minLifetime, maxLifetime, colors) {
    this.x = x;
    this.y = y;
    this.angle = randomRange(minAngle, maxAngle);
    this.size = randomRange(minSize, maxSize);
    this.speed = randomRange(minSpeed, maxSpeed);
    this.lifetime = randomRange(minLifetime, maxLifetime);
    this.color = colors[Math.floor(randomRange(0, colors.length))];
  }

  update(dt) {
    this.x += Math.cos(degreesToRadians(this.angle)) * this.speed * dt;
    this.y += Math.sin(degreesToRadians(this.angle)) * this.speed * dt;
    this.lifetime -= dt;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
