import { Vector2 } from './mathutils';
import { Sprite } from './sprite';

export class GameObject {
  constructor(options) {
    this.position = new Vector2(options.x, options.y);
    this.rotation = options.rotation || 0;
    this.scale = new Vector2(options.scaleX || 1, options.scaleY || 1);
    this.sprite = new Sprite(options.sprite);
  }

  update(deltaTime) {
    // Update game object logic here
  }

  draw(context) {
    // Draw game object using the sprite and transformation properties
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.rotation);
    context.scale(this.scale.x, this.scale.y);
    this.sprite.draw(context, -this.sprite.width / 2, -this.sprite.height / 2);
    context.restore();
  }
}
