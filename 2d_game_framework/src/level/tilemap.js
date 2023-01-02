export class Tilemap {
  constructor(tiles, tileSize) {
    this.tiles = tiles;
    this.tileSize = tileSize;
  }

  getTile(x, y) {
    const row = Math.floor(y / this.tileSize);
    const col = Math.floor(x / this.tileSize);
    return this.tiles[row][col];
  }
}
