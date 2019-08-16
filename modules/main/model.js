const path = require('path');
const colors = require('colors/safe');
const utils = require(path.join(appRoot, 'core/utils'));

const moduleConfig = require('./config');

let model = (function()
{
	return { // скобку не переносит
		Load: async function(req, res)
		{
			let versionNumber = parseInt(CroServer.GetVersion().replace(/\./g, ''));
			console.log(colors.magenta('versionNumber = ' + CroServer.GetVersion()));
			console.log(colors.magenta('versionNumber = ' + versionNumber));
			
			let connection = CroServer.DeSerializeConnection(req.session.connection);
			console.log(connection);
			let bank = await CroServer.AttachBank(connection, 'Test');
			let base = bank.GetBase('TZ', false);
			let field = base.GetField(1);
			//let recordSet = await base.GetRecordSet();
			//console.log(recordSet);
			let record = await base.GetRecord(1);
			let value = await record.GetValue(field);

			return value;
		},
		Lua: async function(req, res)
		{
			let connection = CroServer.DeSerializeConnection(req.session.connection);
			console.log(connection);
			let bank = await CroServer.AttachBank(connection, 'Test');
			//let value = await bank.CallLuaFunction('test', 'test1~test2~test3');
			//console.log('moduleConfig.name = ' + moduleConfig.name);
			//console.log(req.body);
			//console.log(req.body['lua-function-arguments'].constructor);
			let luaFunctionArguments = req.body['lua-function-arguments'];
			if(luaFunctionArguments == undefined)
			{
				luaFunctionArguments = [];
			}
			luaFunctionArguments.unshift('test');
			luaFunctionArguments.unshift(bank);
			let value = await utils.CallCwfLuaFunction.apply(utils, luaFunctionArguments);
			console.log('value = ' + value);
			//arguments
			return value;
		},
	};  
})();


module.exports = model