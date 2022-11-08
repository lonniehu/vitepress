var { createLogger, format, transports } = require('winston');
var { combine, timestamp, label, printf } = format;
var path = require('path');

var myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

var logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    label({label: 'A'}),
    myFormat
  ),
  transports: [
    new (transports.Console)({
      format: combine(
        // format.colorize(),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      )
    }),
    new (transports.File)({
      filename: path.join(__dirname, '../log/info.log')
    })
  ]
});

module.exports = logger;