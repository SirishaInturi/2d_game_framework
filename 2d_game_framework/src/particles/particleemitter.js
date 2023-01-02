import { randomRange, degreesToRadians } from './mathutils';

export class ParticleEmitter {
  constructor(x, y, minAngle, maxAngle, minSize, maxSize, minSpeed, maxSpeed, minLifetime, maxLifetime, colors) {
    this.x = x;
    this.y = y;
    this.minAngle = minAngle;
    this.maxAngle = maxAngle;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.minSpeed = minSpeed;
    this.maxSpeed = maxSpeed;
    this.minLifetime = minLifetime;
    this.maxLifetime = maxLifetime;
    this.colors = colors;
    this.particles = [];
  }

  emit() {
    this.particles.push(new Particle(this));
  }

  update(dt) {
    this.particles = this.particles.filter((particle) => {
      particle.update(dt);
      return particle.lifetime > 0;
    });
  }

  render(ctx) {
    this.particles.forEach((particle) => particle.render(ctx));
  }
}

class Particle {
  constructor(emitter) {
    this.emitter = emitter;
    this.x = emitter.x;
    this.y = emitter.y;
    this.angle = randomRange(emitter.minAngle, emitter.maxAngle);
    this.size = randomRange(emitter.minSize, emitter.maxSize);
    this.speed = randomRange(emitter.minSpeed, emitter.maxSpeed);
    this.lifetime = randomRange(emitter.minLifetime, emitter.maxLifetime);
    this.color = emitter.colors[Math.floor(randomRange(0, emitter.colors.length))];
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
