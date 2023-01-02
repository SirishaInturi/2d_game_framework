export class Input {
  constructor() {
    this.keyboard = new Keyboard();
    this.mouse = new Mouse();
  }

  update() {
    this.keyboard.update();
    this.mouse.update();
  }
}

class Keyboard {
  constructor() {
    this.keys = {};
    this.keyDownHandlers = {};
    this.keyUpHandlers = {};
    this.keyHoldHandlers = {};

    window.addEventListener('keydown', (event) => {
      this.keys[event.code] = true;
      if (this.keyDownHandlers[event.code]) {
        this.keyDownHandlers[event.code](event);
      }
    });

    window.addEventListener('keyup', (event) => {
      this.keys[event.code] = false;
      if (this.keyUpHandlers[event.code]) {
        this.keyUpHandlers[event.code](event);
      }
    });
  }

  update() {
    for (const code in this.keys) {
      if (this.keys[code] && this.keyHoldHandlers[code]) {
        this.keyHoldHandlers[code]();
      }
    }
  }

  isKeyDown(key) {
    return this.keys[key];
  }

  onKeyDown(key, handler) {
    this.keyDownHandlers[key] = handler;
  }

  onKeyUp(key, handler) {
    this.keyUpHandlers[key] = handler;
  }

  onKeyHold(key, handler) {
    this.keyHoldHandlers[key] = handler;
  }
}

class Mouse {
  constructor() {
    this.buttons = {};
    this.buttonDownHandlers = {};
    this.buttonUpHandlers = {};
    this.buttonHoldHandlers = {};
    this.position = { x: 0, y: 0 };

    window.addEventListener('mousedown', (event) => {
      this.buttons[event.button] = true;
      if (this.buttonDownHandlers[event.button]) {
        this.buttonDownHandlers[event.button](event);
      }
    });

    window.addEventListener('mouseup', (event) => {
      this.buttons[event.button] = false;
      if (this.buttonUpHandlers[event.button]) {
        this.buttonUpHandlers[event.button](event);
      }
    });

    window.addEventListener('mousemove', (event) => {
      this.position.x = event.clientX;
      this.position.y = event.clientY;
    });
  }

  update() {
    for (const button in this.buttons) {
      if (this.buttons[button] && this.buttonHoldHandlers[button]) {
        this.buttonHoldHandlers[button]();
      }
    }
  }

  isButtonDown(button) {
    return this.buttons[button];
  }

  onButtonDown(button, handler) {
    this.buttonDownHandlers[button] = handler;
  }

  onButtonUp(button, handler) {
    this.buttonUpHandlers[button] = handler;
  }

  onButtonHold(button, handler) {
    this.buttonHoldHandlers[button] = handler;
  }
}

