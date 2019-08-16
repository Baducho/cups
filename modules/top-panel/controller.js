const path = require('path');
const utils = require(path.join(appRoot, 'core/utils'));
const colors = require('colors/safe');


const model = require('./model');
const moduleName = 'top-panel';

exports.load = async function(req, res, next)
{
	if(req.session.connection != undefined)
	{
		let mainData = await model.Load(req, res);

		let answerData = {};
		answerData.setGlobalParameters = { testPar: '111'};
		answerData.dataTable = [];

		let templateData = {};
		templateData.template = 'topPanel';
		//templateData.template = 'render';
		templateData.data = {};
		templateData.data.mainData = mainData;
	
		answerData.dataTable.push(templateData);

		res.json(answerData);
	}
	else
	{
		console.log(colors.yellow('Нет сохраненной сессии. Переходим на траницу логина'));
		res.redirect('/');
	}
};
