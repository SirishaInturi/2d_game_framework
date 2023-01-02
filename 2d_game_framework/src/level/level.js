export class Level {
  constructor(tiles, objects) {
    this.tiles = tiles;
    this.objects = objects;
  }

  update(dt) {
    for (const object of this.objects) {
      object.update(dt);
    }
  }

  render(ctx) {
    for (const row of this.tiles) {
      for (const tile of row) {
        if (tile) {
          tile.render(ctx);
        }
      }
    }
    for (const object of this.objects) {
      object.render(ctx);
    }
  }
}
