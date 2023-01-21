// import { mouse } from '@nut-tree/nut-js';
import httpServer from './server/httpServer/index';
import wsServer from './server/webSocket/index';

const HTTP_PORT = 8181;
const WS_PORT = 8080;

httpServer.listen(HTTP_PORT);
wsServer.listen(WS_PORT);
