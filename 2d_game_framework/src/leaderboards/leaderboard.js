export class Leaderboard {
  constructor() {
    this.scores = [];
  }

  addScore(score) {
    this.scores.push(score);
    this.scores.sort((a, b) => b.score - a.score);
  }
}
