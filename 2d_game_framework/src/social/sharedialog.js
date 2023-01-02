import { SocialManager } from './socialmanager';

export class ShareDialog {
  constructor(socialManager) {
    this.socialManager = socialManager;
  }

  async show(message) {
    await this.socialManager.share(message);
  }
}
