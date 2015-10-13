import {ServerResponse} from 'http';

class Response extends ServerResponse {
  status(code : number) {
    this.statusCode = code;
    return this;
  }

  header(name : string, value : string) {
    this.setHeader(name, value);
    return this;
  }

  json(data) {
    const body = JSON.stringify(data);
    if (!this.getHeader('Content-Type')) {
      this.setHeader('Content-Type', 'application/json');
    }

    return this.send(body);
  }

  send(body) {
    if (this.statusCode === 204 || this.statusCode === 304) {
      this.removeHeader('Content-Type');
      this.removeHeader('Content-Length');
      this.removeHeader('Transfer-Encoding');
    }

    this.end(body);
    return this;
  }
}

export default Response;
