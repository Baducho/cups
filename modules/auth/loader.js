var express = require('express');
var router = express.Router();

var path = require('path');

var utils = require(path.join(appRoot, 'core/utils'));
var $ = require(path.join(appRoot, 'core/async-wrap'));

var controller = require('./controller');
router.all('/', $(controller.authorization));
    
module.exports = router;