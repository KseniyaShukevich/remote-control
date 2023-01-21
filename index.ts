// import { mouse } from '@nut-tree/nut-js';
import httpServer from './server/http_server/index';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);
