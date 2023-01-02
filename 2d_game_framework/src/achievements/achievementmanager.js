export class AchievementManager {
  constructor() {
    this.achievements = [];
  }

  addAchievement(achievement) {
    this.achievements.push(achievement);
  }

  unlockAchievement(id) {
    const achievement = this.achievements.find(a => a.id === id);
    if (achievement) {
      achievement.unlock();
    }
  }
}
