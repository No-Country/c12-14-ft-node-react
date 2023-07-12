const Mongoose = require('mongoose');
const {setupMongoEvents} = require('./connectionInfo');

Mongoose.Promise = global.Promise;

const createMongoConnection = () => {


  const db = Mongoose.createConnection(process.env.DB_URI);
  setupMongoEvents(db);

  return db;
}

module.exports = createMongoConnection();
