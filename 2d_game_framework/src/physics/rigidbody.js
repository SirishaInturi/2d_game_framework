export class RigidBody {
  constructor(x, y, width, height, mass) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.mass = mass;
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.forces = [];
  }

  addForce(x, y) {
    this.forces.push({ x, y });
  }

  update(deltaTime) {
    this.forces.forEach((force) => {
      this.acceleration.x += force.x / this.mass;
      this.acceleration.y += force.y / this.mass;
    });
    this.forces = [];

    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += this.acceleration.y * deltaTime;

    this.x += this.velocity.x * deltaTime;
    this.y += this.velocity.y * deltaTime;

    this.acceleration.x = 0;
    this.acceleration.y = 0;
  }
}
