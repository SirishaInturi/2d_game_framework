export class Physics {
  static gravity = 9.8;

  static applyGravity(gameObjects) {
    for (const gameObject of gameObjects) {
      if (gameObject.rigidbody) {
        gameObject.rigidbody.velocity.y += Physics.gravity;
      }
    }
  }

  static detectCollisions(gameObjects) {
    for (let i = 0; i < gameObjects.length; i++) {
      const gameObject1 = gameObjects[i];
      for (let j = i + 1; j < gameObjects.length; j++) {
        const gameObject2 = gameObjects[j];
        if (gameObject1.collider && gameObject2.collider && Physics.isCollision(gameObject1, gameObject2)) {
          gameObject1.collider.onCollision(gameObject2);
          gameObject2.collider.onCollision(gameObject1);
        }
      }
    }
  }
  static isCollision(gameObject1, gameObject2) {
    const collider1 = gameObject1.collider;
    const collider2 = gameObject2.collider;

    if (collider1.shape === 'rect' && collider2.shape === 'rect') {
      return Physics.isRectCollision(collider1, collider2);
    } else if (collider1.shape === 'circle' && collider2.shape === 'circle') {
      return Physics.isCircleCollision(collider1, collider2);
    } else if (collider1.shape === 'rect' && collider2.shape === 'circle') {
      return Physics.isRectCircleCollision(collider1, collider2);
    } else if (collider1.shape === 'circle' && collider2.shape === 'rect') {
      return Physics.isRectCircleCollision(collider2, collider1);
    } else {
      console.warn('Unsupported collider shapes:', collider1.shape, collider2.shape);
      return false;
    }
  }

  static isRectCollision(collider1, collider2) {
    const rect1 = collider1.getRect();
    const rect2 = collider2.getRect();
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.height + rect1.y > rect2.y;
  }

  static isCircleCollision(collider1, collider2) {
    const circle1 = collider1.getCircle();
    const circle2 = collider2.getCircle();
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
  }

  static isRectCircleCollision(rectCollider, circleCollider) {
    const rect = rectCollider.getRect();
    const circle = circleCollider.getCircle();

    // Check if the circle is inside the rect
    if (circle.x >= rect.x && circle.x <= rect.x + rect.width &&
        circle.y >= rect.y && circle.y <= rect.y + rect.height) {
      return true;
    }

    // Check if any of the rect's corners are inside the circle
    for (let x = rect.x; x <= rect.x + rect.width; x++) {
      for (let y = rect.y; y <= rect.y + rect.height; y++) {
        if (Physics.isPointInCircle({x, y}, circle)) {
          return true;
        }
      }
    }

    // Check if any of the circle's points are inside the rect
    const angleStep = 2 * Math.PI / 16;
    for (let angle = 0; angle < 2 * Math.PI; angle += angleStep) {
      const x = circle.x + Math.cos(angle) * circle.radius;
      const y = circle.y + Math.sin(angle) * circle.radius;
      if (x >= rect.x && x <= rect.x + rect.width &&
          y >= rect.y && y <= rect.y + rect.height) {
        return true;
      }
    }

    return false;
  }
  static isPointInCircle(point, circle) {
    const dx = point.x - circle.x;
    const dy = point.y - circle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle.radius;
  }
	
}
