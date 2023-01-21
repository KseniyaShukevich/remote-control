import { WebSocketServer, createWebSocketStream, WebSocket } from 'ws';
import { Duplex } from 'stream';

class WsServer {
  private duplex: Duplex | null;

  constructor() {
    this.duplex = null;
  }

  listen(port: number) {
    const wss = new WebSocketServer({ port });

    wss.on('connection', async (ws: WebSocket) => {
      console.log(`Start WebSocket server on the ${port} port!`);
      ws.send('Connected');

      this.createWsDuplex(ws);
      this.createWsEvents();
    });
  }

  private createWsDuplex(ws: WebSocket) {
    const duplex = createWebSocketStream(ws, {
      decodeStrings: false,
      encoding: 'utf8',
    });

    this.duplex = duplex;
  }

  private createWsEvents() {
    if (!this.duplex) {
      return;
    }

    this.duplex.on('data', (data) => {
      console.log('DATA: ', data);
      this.duplex!.write(data);
    });
  }
}

const wsServer = new WsServer();

export default wsServer;
