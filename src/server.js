import {Server as HttpServer} from 'http';
import Promise from 'bluebird';

class Server {
  constructor() {
    this._server = new HttpServer(this.onRequest.bind(this));
  }

  onRequest(req, res) {

  }

  listen(options : {port: Number}) {
    return new Promise((resolve, reject) => {
      this._server.listen(options, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

export default Server;
