export class ARCamera {
  constructor(camera, controls) {
    this.camera = camera;
    this.controls = controls;
  }

  update(pose) {
    this.camera.position.set(pose.position.x, pose.position.y, pose.position.z);
    this.camera.quaternion.set(pose.orientation.x, pose.orientation.y, pose.orientation.z, pose.orientation.w);
    this.controls.update();
  }
}
