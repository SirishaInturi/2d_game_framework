export class CloudSaveManager {
  constructor(provider, options) {
    this.provider = provider;
    this.options = options;
  }

  async save(data) {
    await this.provider.save(data, this.options);
  }

  async load() {
    return await this.provider.load(this.options);
  }
}
