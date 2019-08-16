const path = require('path');
const Promise = require('bluebird');
const $ = require('cronos-easy-code');
const colors = require('colors/safe');

/*
const CroServer = require(path.join(appRoot, '../external-libs/CroServer.node'));

if(CroServer.InitializeMemory != undefined && !memoryInitialized)
{
	const memorySize = 64;
	CroServer.InitializeMemory('HelloCronos', memorySize);
	memoryInitialized = true;
	console.log('Memory initialized ' + colors.yellow(memorySize + 'Mb'));
}
//*/

let model = (function()
{
	return { // скобку не переносить
		CreateSession: async function(req, res)
		{
			console.log('Name = "' + req.body.Name + '"');
			console.log('Password = "' + req.body.Password + '"');
			if(true || req.session.connection == undefined)
			{
				console.log('конекта нет');
				let versionNumber = parseInt(CroServer.GetVersion().replace(/\./g, ''));
				if(versionNumber <= 714)
				{
					let connection = await $(CroServer.Login, CroServer, req.body.Name, req.body.Password, config.server, config.sessionTimeout, req.ip);
					console.log(colors.green('Логин успешный'));
					console.log('connection = ' + connection.Serialize());
					req.session.connection = connection.Serialize();
					
					return true;
				}
				else
				{
					let connection = await CroServer.Login(req.body.Name, req.body.Password, config.server, config.sessionTimeout, req.ip);
					console.log(colors.green('Логин успешный'));
					console.log('connection = ' + connection.Serialize());
					req.session.connection = connection.Serialize();
					
					return true;
				}
			}
			else
			{
				console.log('конект есть');
				console.log('connection = ' + req.session.connection);
				
				return true;
			}
		},
	};
})();


module.exports = model