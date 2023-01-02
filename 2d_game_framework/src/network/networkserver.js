import WebSocket from 'ws';

export class NetworkServer {
  constructor(port) {
    this.server = new WebSocket.Server({ port });
    this.callbacks = {};
    this.clients = [];

    this.server.on('connection', (socket) => {
      this.clients.push(socket);

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (this.callbacks[message.type]) {
          this.callbacks[message.type](socket, message.data);
        }
      };

      socket.onclose = () => {
        this.clients = this.clients.filter((client) => client !== socket);
      };
    });
  }

  on(type, callback) {
    this.callbacks[type] = callback;
  }

  broadcast(type, data) {
    this.clients.forEach((client) => {
      client.send(JSON.stringify({ type, data }));
    });
  }
}
