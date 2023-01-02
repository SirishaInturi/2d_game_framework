export class SaveManager {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  load() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  save(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }
}
