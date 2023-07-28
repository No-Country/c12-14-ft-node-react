const Winston = require('winston');
const { combine, timestamp, json } = Winston.format;

const Logger = Winston.createLogger({
  format:  combine(timestamp(), json()),
  transports: [
    new Winston.transports.Console(),
    new Winston.transports.File({filename: './var/log/general.log',
      level: 'info',
    })
  ],
  exceptionHandlers: [
    new Winston.transports.File({ filename: './var/log/exception.log' }),
  ],
  rejectionHandlers: [
    new Winston.transports.File({ filename: './var/log/rejections.log' }),
  ],
});

module.exports = Logger;
