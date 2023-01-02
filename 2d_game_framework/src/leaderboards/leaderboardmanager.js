export class LeaderboardManager {
  constructor() {
    this.leaderboards = new Map();
  }

  addLeaderboard(id, leaderboard) {
    this.leaderboards.set(id, leaderboard);
  }

  addScore(id, score) {
    const leaderboard = this.leaderboards.get(id);
    if (leaderboard) {
      leaderboard.addScore(score);
    }
  }
}
