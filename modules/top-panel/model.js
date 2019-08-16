const path = require('path');
const colors = require('colors/safe');


let model = (function()
{
	return { // скобку не переносит
		Load: async function(req, resrs/*, controllerCallback*/)
		{
			let versionNumber = parseInt(CroServer.GetVersion().replace(/\./g, ''));
			console.log(colors.magenta('versionNumber = ' + CroServer.GetVersion()));
			console.log(colors.magenta('versionNumber = ' + versionNumber));
			
			let connection = CroServer.DeSerializeConnection(req.session.connection);
			console.log(connection);
			let bank = await CroServer.AttachBank(connection, 'Test');
			let base = bank.GetBase('TZ', false);
			let field = base.GetField(1);
			let record = await base.GetRecord(1);
			let value = await record.GetValue(field);
			
			return value;
		},
	};  
})();


module.exports = model