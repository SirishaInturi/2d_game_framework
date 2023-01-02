export class AudioMixer {
  constructor() {
    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
  }

  setVolume(volume) {
    this.gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
  }

  playSound(sound) {
    const source = this.audioContext.createBufferSource();
    source.buffer = sound.buffer;
    source.connect(this.gainNode);
    source.start(0);
  }
}
