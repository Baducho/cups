const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('util');
const winston = require('winston');
const $ = require(path.join(appRoot, 'core/async-wrap'));

const env = process.env.NODE_ENV || 'development';

const moduleConfig = require('./config');
  const log = winston.createLogger({
    // change level if in dev environment versus production
    level: env === 'development' ? 'debug' : 'info',
    format: winston.format.combine(
        winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File({
        filename: path.join(appRoot, 'log.log'),
        level: 'info',
        format: winston.format.combine(
            //winston.format.colorize(),
            winston.format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
          )
        )
      }),
      new winston.transports.Console({
        level: 'info',
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
          )
        )
      }),
    ]
  });
  
  
  //log.error('Hello again distributed logs');

//console.log(config);
const controller = require('./controller');

router.all(moduleConfig.path, $(controller.load));

module.exports = router;