import httpServer from './server/httpServer/index';
import wsServer from './server/webSocket/index';
import MOUSE_COMMANDS from './server/mouse/commands';
import DRAWING_COMMANDS from './server/drawing/commands';

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT);

const WS_PORT = 8080;
const ALL_COMMANDS = { ...MOUSE_COMMANDS, ...DRAWING_COMMANDS };

wsServer.addCommands(ALL_COMMANDS);
wsServer.listen(WS_PORT);
