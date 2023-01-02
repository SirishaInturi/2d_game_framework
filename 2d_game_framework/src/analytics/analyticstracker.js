export class AnalyticsTracker {
  constructor(provider) {
    this.provider = provider;
  }

  trackEvent(eventName, data) {
    this.provider.trackEvent(eventName, data);
  }
}
