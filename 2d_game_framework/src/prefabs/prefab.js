import { GameObject } from './gameobject';

export class Prefab extends GameObject {
  constructor(game, x, y, prefabData) {
    super(game, x, y);

    // Apply prefab data to game object
    Object.assign(this, prefabData);
  }
}
