export class Sound {
  constructor(url) {
    this.audio = new Audio(url);
    this.audio.preload = 'auto';
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
