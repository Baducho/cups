var path = require('path');
var utils = require(path.join(appRoot, 'core/utils'));
var $ = require('cronos-easy-code');

var model = require('./model');

exports.authorization = async function(req, res)
{
	var dataObject = await model.CreateSession(req, res);
	console.log(dataObject);
	res.redirect('/main');
};
