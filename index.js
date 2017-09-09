const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
  // the same kind of magic happens here!
  response.write(request);
}).port(8080);

