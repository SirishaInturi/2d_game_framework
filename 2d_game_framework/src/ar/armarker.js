export class ARMarker {
  constructor(id, model) {
    this.id = id;
    this.model = model;
  }

  update(pose) {
    this.model.position.set(pose.position.x, pose.position.y, pose.position.z);
    this.model.quaternion.set(pose.orientation.x, pose.orientation.y, pose.orientation.z, pose.orientation.w);
  }
}
