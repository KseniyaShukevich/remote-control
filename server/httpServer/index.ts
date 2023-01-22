import fs from 'fs';
import path from 'path';
import http from 'http';

class HttpServer {
  private server: http.Server;

  private dirname: string;

  constructor() {
    this.server = this.createServer();
    this.dirname = path.resolve(path.dirname(''));
  }

  private createServer() {
    const server = http.createServer((req, res) => {
      const relativePath = (req.url === '/' ? '/front/index.html' : `/front${req.url}`);
      const filePath = this.dirname + relativePath;

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
    });

    return server;
  }

  listen(port: number) {
    this.server.listen(port, () => {
      console.log(`Start static http server on the ${port} port!`);
    });
  }
}

const httpServer = new HttpServer();

export default httpServer;
