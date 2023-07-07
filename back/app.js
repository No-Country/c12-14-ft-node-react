require('dotenv').config();
const Server = require('./config/server');

server = new Server();

server.listen();
