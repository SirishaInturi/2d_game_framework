export class Achievement {
  constructor(id, name, description, requirements) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.requirements = requirements;
    this.unlocked = false;
  }

  unlock() {
    this.unlocked = true;
  }
}
