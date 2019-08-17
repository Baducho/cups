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
		GetUsers: async function()
		{
			let connection = CroServer.DeSerializeConnection(global.connection);
			console.log(connection);
			let bank = await CroServer.AttachBank(connection, 'Cups');
			let vocBank = await bank.GetVocabulary();
			let usersBase = await vocBank.GetBase('US');
			let usersRecords = await usersBase.GetRecordSet();

			let usersArray = []; 
			for(let recordIndex = 1; recordIndex <= usersRecords.Count; recordIndex++)
			{
				let userRecord = await usersRecords.GetRecordByIndex(recordIndex);
				let userInfo = {};
				userInfo.code = await userRecord.GetValue(usersBase.GetField(10));
				userInfo.name = await userRecord.GetValue(usersBase.GetField(20));
				//console.log();
				usersArray.push(userInfo);
			}
			//let base = bank.GetBase('TZ', false);
			//arguments
			return usersArray;
		},
		GetUsersCups: async function(users)
		{
			//let connection = CroServer.DeSerializeConnection(global.connection);
			//console.log(connection);
			//let bank = await CroServer.AttachBank(connection, 'Cups');
			let userCupsArray = [];
			for(let userIndex in users)
			{
				let userCupsRecords = await bank.StringRequest('ОТ CU01 1 РВ ' + users[userIndex].code);
				for(let recordIndex = 1; recordIndex <= userCupsRecords.Count; recordIndex++)
				{
					let userCupRecord = await userCupsRecords.GetRecordByIndex(recordIndex);
					let userCupInfo = {};
					userCupInfo.cupOwner = await userCupRecord.GetValue(userCupRecord.Base.GetField(1), 1, false);
					userCupInfo.cupType = await userCupRecord.GetValue(userCupRecord.Base.GetField(2), 1, false);
					userCupInfo.cupEventYype = await userCupRecord.GetValue(userCupRecord.Base.GetField(3), 1, false);
					userCupInfo.cupComment = await userCupRecord.GetValue(userCupRecord.Base.GetField(4));
					//console.log();
					userCupsArray.push(userCupInfo);
				}
	
			}
			return userCupsArray;
		},
	};  
})();


module.exports = model