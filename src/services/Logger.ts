var winston = require('winston');
var fs = require('fs');
var winston_mysql = require('winston-mysql');

if(!fs.existsSync('logs')){
  fs.mkdirSync('logs');
}

var options_default = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'desafio3',
  table    : 'logs',
  fields   : { level: 'level', message: 'message', timestamp: 'timestamp'}
};

module.exports = new winston.createLogger({
  transports: [
    new winston_mysql(options_default)
  ]
});