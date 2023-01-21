import { WebSocketServer, createWebSocketStream, WebSocket } from 'ws';
import { Duplex } from 'stream';

import MOUSE_COMMANDS from '../mouse/commands';

interface ICommand {
  [key: string]: (args: Array<string>) => Promise<string | void>;
}

class WsServer {
  private duplex: Duplex | null;

  private commands: ICommand;

  constructor(commands: ICommand) {
    this.duplex = null;
    this.commands = commands;
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

    this.duplex.on('data', async (data) => {
      const [command, ...args] = data.split(' ');
      const message = await this.commands[command](args);

      this.duplex!.write(message);
    });
  }
}

const wsServer = new WsServer(MOUSE_COMMANDS);

export default wsServer;
