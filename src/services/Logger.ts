var winston = require('winston');
var winston_mysql = require('winston-mysql');
var options_default = require('../config/env_vars').config_winston;


module.exports = new winston.createLogger({
  transports: [
    new winston_mysql(options_default)
  ]
});