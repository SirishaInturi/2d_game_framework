import { GameObject } from './gameobject';

export class Scene {
  constructor() {
    this.gameObjects = [];
  }

  start() {
    // Initialize scene logic here
  }

  stop() {
    // Clean up scene logic here
  }

  update(deltaTime) {
    this.gameObjects.forEach(gameObject => gameObject.update(deltaTime));
  }

  draw(context) {
    this.gameObjects.forEach(gameObject => gameObject.draw(context));
  }

  addGameObject(gameObject) {
    this.gameObjects.push(gameObject);
  }

  removeGameObject(gameObject) {
    this.gameObjects = this.gameObjects.filter(go => go !== gameObject);
  }

  getGameObjects() {
    return this.gameObjects;
  }

  findGameObjectsByTag(tag) {
    return this.gameObjects.filter(gameObject => gameObject.tag === tag);
  }

  findGameObjectByName(name) {
    return this.gameObjects.find(gameObject => gameObject.name === name);
  }
}
