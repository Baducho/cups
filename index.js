var express = require('express');
var session = require('express-session')

var path = require('path');
var fs = require('fs');

const colors = require('colors/safe');


// sfgdfgsdfgsdg78ue7
global.appRoot = path.resolve(__dirname);
global.config = require(path.join(appRoot, 'config'));
global.memoryInitialized = false;

global.CroServer = require(path.join(appRoot, '../external-libs/CroServer.node'));

var $ = require(path.join(appRoot, 'core/async-wrap'));


if(CroServer.InitializeMemory != undefined && !memoryInitialized)
{
	var memorySize = 64;
	CroServer.InitializeMemory('HelloCronos', memorySize);
	memoryInitialized = true;
	console.log('Memory initialized ' + colors.yellow(memorySize + 'Mb'));
}



var template = require(path.join(appRoot, 'core/template'));
var utils = require(path.join(appRoot, 'core/utils'));

var app = express();

app.use(session(
{
	'secret': config.projectName,
	'resave': false,
	'saveUninitialized': false
}));
//app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var modulesRouter = require(path.join(appRoot, 'core/modules'));


app.use(express.static(path.join(__dirname, 'www')));

app.use('/', $(async (req, res, next) =>
{
	if(global.connection == undefined)
	{
		try
		{
			global.connection = req.session.connection;
			let connection = CroServer.DeSerializeConnection(global.connection);
			global.bank = await CroServer.AttachBank(connection, 'Cups');
		}
		catch(error)
		{
			console.error(colors.red(error));
		}
	}
	next();
}));
app.use('/', modulesRouter);



app.use(function (err, req, res, next)
{
	console.error(colors.red(err))
	
	if(err.libraryCode != undefined)
	{
		req.session.connection = undefined;
		//res.status(500).send((err));
		res.redirect('/');
	}
	else
	{
		res.status(500).send('<pre>' + err.stack + '</pre>');
	}
	
});

app.use(function (req, res, next)
{
	res.send('Нету');
});


app.listen(config.port, function ()
{
	/*
	console.log(colors.black('black'));
	console.log(colors.bold.black('bold.black'));
	console.log(colors.red('red'));
	console.log(colors.bold.red('bold.red'));
	console.log(colors.green('green'));
	console.log(colors.bold.green('bold.green'));
	console.log(colors.yellow('yellow'));
	console.log(colors.bold.yellow('bold.yellow'));
	console.log(colors.blue('blue'));
	console.log(colors.bold.blue('bold.blue'));
	console.log(colors.magenta('magenta'));
	console.log(colors.bold.magenta('bold.magenta'));
	console.log(colors.cyan('cyan'));
	console.log(colors.bold.cyan('bold.cyan'));
	console.log(colors.white('white'));
	console.log(colors.bold.white('bold.white'));
	console.log(colors.gray('gray'));
	console.log(colors.bold.gray('bold.gray'));
	console.log(colors.grey('grey'));
	console.log(colors.bold.grey('bold.grey'));
	//*/

	console.log(colors.underline.green('Server started on port ' + config.port + '...'));
	console.log();
});


