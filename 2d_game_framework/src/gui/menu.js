import { Button } from './button';

export class Menu {
  constructor(x, y, width, height, items) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.items = items;
  }

  update(input) {
    this.items.forEach((item) => item.update(input));
  }

  render(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.items.forEach((item) => item.render(ctx));
  }
}

export function createMenu(x, y, width, height, items) {
  const menuItems = items.map((item) => {
    let menuItem;
    if (item.type === 'button') {
      menuItem = new Button(x + item.x, y + item.y, item.width, item.height, item.text, item.font, item.color, item.hoverColor, item.callback);
    } else {
      // You can add additional menu item types here as needed.
    }
    return menuItem;
  });
  return new Menu(x, y, width, height, menuItems);
}
