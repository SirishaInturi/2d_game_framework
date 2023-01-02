export class VRController {
  constructor(id) {
    this.id = id;
    this.buttons = new Map();
    this.axes = new Map();
  }

  update(data) {
    this.buttons = data.buttons;
    this.axes = data.axes;
  }
}
