export class LocalizationManager {
  constructor(strings) {
    this.strings = strings;
  }

  getString(key) {
    return this.strings[key] || '[MISSING STRING]';
  }
}
