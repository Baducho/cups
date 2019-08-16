const path = require('path');
const utils = require(path.join(appRoot, 'core/utils'));
const colors = require('colors/safe');


const model = require('./model');
const moduleConfig = require('./config');

exports.initialize = async function(req, res, next)
{
	if(req.session.connection != undefined)
	{
		let mainData = await model.Load(req, res);

		let answerData = {};
		answerData.setGlobalParameters = { testPar: '111'};
		answerData.title = 'Ростелеком';
		answerData.moduleName = moduleConfig.name;
		answerData.requestPath = 'load';
		answerData.requestParameters = JSON.stringify({ test: 'test' }).replace(/"/g, '&quot;');
		
	
		let html = utils.UseTemplate(path.join(appRoot, 'templates/common'), answerData);
		res.type('text/html');
		res.send(html);
	}
	else
	{
		console.log('Нет сохраненной сессии. Переходим на траницу логина');
		res.redirect('/');
	}
};
exports.load = async function(req, res, next)
{
	if(req.session.connection != undefined)
	{
		let mainData = await model.Load(req, res);

		let answerData = {};
		answerData.setGlobalParameters = { testPar: '111'};
		//answerData.title = 'Ростелеком';
		//answerData.requestPath = 'main/content';
		//answerData.requestParameters = JSON.stringify({ test: 'test' }).replace(/"/g, '&quot;');

		answerData.dataTable = [];

		let templateData = {};
		templateData.template = 'main';
		//templateData.template = 'render';
		templateData.data = {};
		templateData.data.moduleName = moduleConfig.name;
		templateData.data.mainData = mainData;
		templateData.targetSelector = 'body';
	
		answerData.dataTable.push(templateData);
	

		
	
		//let html = utils.UseTemplate(path.join(appRoot, 'templates/common'), answerData);
		//res.type('application/json');
		res.json(answerData);
	}
	else
	{
		console.log('Нет сохраненной сессии. Переходим на траницу логина');
		res.redirect('/');
	}
};
exports.content = async function(req, res, next)
{
	if(req.session.connection != undefined)
	{
		let mainData = await model.Load(req, res);

		let answerData = {};
		answerData.setGlobalParameters = { testPar: '111'};
		//answerData.title = 'Ростелеком';
		//answerData.requestPath = 'main/content';
		//answerData.requestParameters = JSON.stringify({ test: 'test' }).replace(/"/g, '&quot;');

		answerData.dataTable = [];

		let templateData = {};
		templateData.template = 'mainContent';
		//templateData.template = 'render';
		templateData.data = {};
		templateData.data.mainData = mainData;
		templateData.targetSelector = '#main';
	
		answerData.dataTable.push(templateData);
	

		
	
		//let html = utils.UseTemplate(path.join(appRoot, 'templates/common'), answerData);
		//res.type('application/json');
		res.json(answerData);
	}
	else
	{
		console.log('Нет сохраненной сессии. Переходим на траницу логина');
		res.redirect('/');
	}
};

exports.topPanel = async function(req, res, next)
{
	if(req.session.connection != undefined)
	{
		let mainData = await model.Load(req, res);

		let answerData = {};
		answerData.setGlobalParameters = { testPar: '111'};
		//answerData.title = 'Ростелеком';
		//answerData.requestPath = 'main/content';
		//answerData.requestParameters = JSON.stringify({ test: 'test' }).replace(/"/g, '&quot;');

		answerData.dataTable = [];

		let templateData = {};
		templateData.template = 'topPanel';
		//templateData.template = 'render';
		templateData.data = {};
		templateData.data.mainData = mainData;
		//templateData.targetSelector = 'body';
	
		answerData.dataTable.push(templateData);
	

		
	
		//let html = utils.UseTemplate(path.join(appRoot, 'templates/common'), answerData);
		//res.type('application/json');
		res.json(answerData);
	}
	else
	{
		console.log('Нет сохраненной сессии. Переходим на траницу логина');
		res.redirect('/');
	}
};
