const path = require('path');
const utils = require(path.join(appRoot, 'core/utils'));
const colors = require('colors/safe');

const model = require('./model');

exports.load = async function(req, res, next)
{
	if(req.path == '/')
	{
		let html = utils.UseTemplate(path.join(__dirname, 'templates/login'), { test: 'karabas' });
		res.type('text/html');
		res.send(html);
	}
	else
	{
		next();
	}
};
