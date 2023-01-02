export class Music {
  constructor(url) {
    this.audio = new Audio(url);
    this.audio.preload = 'auto';
    this.audio.loop = true;
  }

  play() {
    this.audio.currentTime = 0;
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.currentTime = 0;
    this.audio.pause();
  }
}
