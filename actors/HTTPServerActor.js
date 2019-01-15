const express = require('express');
const exp = express();

console.log("Setting context for /");
exp.get('/', (req, res) => {
  res.send('Hello, World');
})

class HTTPServerActor {

  startServer(port) {
    exp.listen(port);
  }

  stopServer() {}

}

module.exports = HTTPServerActor;