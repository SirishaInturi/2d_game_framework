export class VREnvironment {
  constructor(canvas, camera, controls) {
    this.canvas = canvas;
    this.camera = camera;
    this.controls = controls;
  }

  update(dt) {
    this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
