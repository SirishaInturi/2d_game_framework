export function padLeft(str, length, char = ' ') {
  return char.repeat(length - str.length) + str;
}

export function padRight(str, length, char = ' ') {
  return str + char.repeat(length - str.length);
}

export function trim(str, char = ' ') {
  return str.replace(new RegExp(`^${char}+|${char}+$`, 'g'), '');
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function snakeToCamel(str) {
  return str.replace(/_\w/g, (match) => match[1].toUpperCase());
}

export function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}
