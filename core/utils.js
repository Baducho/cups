var utils = (function()
{
	return { // скобку не переносить
		UseTemplate: function(templateName, templateData)
		{
			var fs = require('fs');
			//var path = require('path');
			//console.log('UseTemplate');
			//console.log('templateName = ' + templateName);
			//var filePath = path.join(appRoot, 'views/' + templateName + '.tpl');
			var filePath =  templateName + '.tpl';
			var fileContent = fs.readFileSync(filePath);
			var html = tmpl(fileContent.toString(), templateData);
			return html;
		},
		CallCwfLuaFunction: async function()
		{
			//console.log('currentModule = ' + currentModule);
			//console.log(arguments);
			let bank = arguments[0];
			//let moduleName = arguments[1];
			let functionName = arguments[1];
			let luaFunctionArguments = Array.prototype.slice.call(arguments, 2);
			luaFunctionArguments.unshift(config.projectNetPath)
			luaFunctionArguments.unshift(currentModule + '.' + functionName)
			console.log(functionName);
			let luaFunctionResult = await bank.CallLuaFunction('NodeModuleFunction', luaFunctionArguments.join('~'));
			console.log(luaFunctionResult);
			luaFunctionResult = JSON.parse(luaFunctionResult)
			return luaFunctionResult;
		}
	};  
})();

module.exports = utils