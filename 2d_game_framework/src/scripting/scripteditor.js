import Ace from 'ace-builds';

export class ScriptEditor {
  constructor(parentElement, options) {
    this.editor = Ace.edit(parentElement, options);
  }

  getValue() {
    return this.editor.getValue();
  }

  setValue(value) {
    this.editor.setValue(value);
  }

  setTheme(theme) {
    this.editor.setTheme(`ace/theme/${theme}`);
  }

  setMode(mode) {
    this.editor.session.setMode(`ace/mode/${mode}`);
  }

  setOptions(options) {
    this.editor.setOptions(options);
  }
}
