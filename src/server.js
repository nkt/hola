import {Server as HttpServer} from 'http';
import Promise from 'bluebird';
import Request from './request';
import Response from './response';
import Router from './router';

class Server {
  constructor() {
    this._server = new HttpServer(this.onRequest.bind(this));
    this._router = new Router();
  }

  onRequest(req, res) {
    req.__proto__ = Request.prototype;
    res.__proto__ = Response.prototype;
  }

  listen(options : {port: number}) {
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
