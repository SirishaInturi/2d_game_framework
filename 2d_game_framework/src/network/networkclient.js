import WebSocket from 'ws';

export class NetworkClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.callbacks = {};

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (this.callbacks[message.type]) {
        this.callbacks[message.type](message.data);
      }
    };
  }

  on(type, callback) {
    this.callbacks[type] = callback;
  }

  send(type, data) {
    this.socket.send(JSON.stringify({ type, data }));
  }
}
