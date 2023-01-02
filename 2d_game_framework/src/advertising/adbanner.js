export class AdBanner {
  constructor(provider, options) {
    this.provider = provider;
    this.options = options;
    this.element = null;
  }

  async show() {
    this.element = this.provider.createBanner(this.options);
    await this.provider.showBanner(this.element);
  }

  async hide() {
    await this.provider.hideBanner(this.element);
    this.element = null;
  }
}
