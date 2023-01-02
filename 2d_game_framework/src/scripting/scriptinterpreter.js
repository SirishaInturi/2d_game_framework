export class ScriptInterpreter {
  constructor() {
    this.commands = {};
  }

  registerCommand(name, callback) {
    this.commands[name] = callback;
  }

  executeScript(script) {
    const lines = script.split('\n');
    lines.forEach((line) => {
      const parts = line.split(' ');
      const command = parts[0];
      const args = parts.slice(1);
      if (command in this.commands) {
        this.commands[command](...args);
      }
    });
  }
}
