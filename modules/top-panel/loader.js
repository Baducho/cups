const express = require('express');
const router = express.Router();
const path = require('path');
const $ = require(path.join(appRoot, 'core/async-wrap'));


const controller = require('./controller')

router.all('/', $(controller.load));

module.exports = router;