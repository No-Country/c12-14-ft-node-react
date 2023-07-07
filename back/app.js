require('dotenv').config();
const Server = require('./config/http/server');

server = new Server();

server.listen();
