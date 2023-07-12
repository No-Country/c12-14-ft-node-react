const Logger = require('../../../src/utils/logger');

const setupMongoEvents = (connection) =>{

  connection.on('error', (err) => {
    Logger.error(`[mongo]: Connection error event ${err}`);
    process.exit(1);
  });

  connection.once('open', () => Logger.info('[mongodb]: Connection opened'));
  connection.once('connected', () => Logger.debug('[mongodb]: Client connection opened'));
  connection.once('disconnected', () => Logger.debug('[mongodb]: Client was disconnected'));

  process.on('SIGINT', function () {
    connection.close(function() {
      Logger.info('[mongodb]: Connection was forced to be disconnected');

      process.exit(1);
    }).catch((err) => {

      Logger.info(`[mongodb]: Connection was forced to be disconnected: ${err.message}`);

      process.exit(1);
    });
  });
};

module.exports = {setupMongoEvents};
