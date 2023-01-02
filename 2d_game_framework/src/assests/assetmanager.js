export class AssetManager {
  constructor() {
    this.assets = new Map();
  }

  loadImage(key, src) {
    const image = new Image();
    image.src = src;
    this.assets.set(key, image);
    return new Promise((resolve) => {
      image.addEventListener('load', () => resolve(image));
    });
  }

  loadSound(key, src) {
    const audio = new Audio();
    audio.src = src;
    this.assets.set(key, audio);
    return new Promise((resolve) => {
      audio.addEventListener('canplaythrough', () => resolve(audio));
    });
  }

  get(key) {
    return this.assets.get(key);
  }
}
