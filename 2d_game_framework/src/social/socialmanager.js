export class SocialManager {
  constructor(provider, options) {
    this.provider = provider;
    this.options = options;
  }

  async login() {
    await this.provider.login(this.options);
  }

  async logout() {
    await this.provider.logout(this.options);
  }

  async getUserData() {
    return await this.provider.getUserData(this.options);
  }

  async share(message) {
    await this.provider.share(message, this.options);
  }
}
