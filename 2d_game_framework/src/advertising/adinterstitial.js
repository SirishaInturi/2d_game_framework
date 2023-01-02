export class AdInterstitial {
  constructor(provider, options) {
    this.provider = provider;
    this.options = options;
  }

  async show() {
    await this.provider.showInterstitial(this.options);
  }
}
