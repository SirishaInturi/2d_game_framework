export class InputMap {
  constructor() {
    this.actions = {};
    this.keys = {};
  }

  bindAction(action, key) {
    this.actions[action] = key;
    this.keys[key] = action;
  }

  bindActions(actions) {
    for (const action in actions) {
      this.bindAction(action, actions[action]);
    }
  }

  unbindAction(action) {
    const key = this.actions[action];
    delete this.actions[action];
    delete this.keys[key];
  }

  unbindKey(key) {
    const action = this.keys[key];
    delete this.actions[action];
    delete this.keys[key];
  }

  unbindAll() {
    this.actions = {};
    this.keys = {};
  }

  getAction(key) {
    return this.keys[key];
  }

  getKey(action) {
    return this.actions[action];
  }
}
