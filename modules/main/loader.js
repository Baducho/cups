const express = require('express');
const router = express.Router();
const path = require('path');
const $ = require(path.join(appRoot, 'core/async-wrap'));


const controller = require('./controller');

router.all('/', $(controller.initialize)); // Baducho
router.all('/load', $(controller.load)); // Baducho
router.all('/content', $(controller.content)); // Baducho
router.all('/dialog', $(controller.dialog)); // Baducho
router.all('/refresh', $(controller.refresh)); // Baducho
router.all('/dropdown', $(controller.dropdown)); // Baducho


module.exports = router;