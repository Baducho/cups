const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');
const colors = require('colors/safe');
const utils = require(path.join(appRoot, 'core/utils'));

let modulesDirContent = fs.readdirSync(path.join(appRoot, 'modules/'), {encoding: 'utf8', withFileTypes: true});
//dirent.isDirectory()
let modulesArray = [];
for(let dirIndex in modulesDirContent)
{
	if(modulesDirContent[dirIndex].isDirectory())
	{
		modulesArray.push(modulesDirContent[dirIndex].name);
	}
}
console.log(modulesArray);

//var indexController = require(path.join(appRoot, 'controllers/indexController'));
//config.modules.push('admin');
let deferredUse = [];

for(let moduleIndex in modulesArray)
{
	let moduleLoader;
	try
	{
		moduleLoader = require(path.join(appRoot, 'modules/' + modulesArray[moduleIndex] + '/loader'))
	}
	catch(error)
	{
		//console.log(error.stack)
		console.log(error.message);
	}
	if(moduleLoader != undefined)
	{
		console.log(colors.blue('Loading module ') + colors.bold.blue(modulesArray[moduleIndex]));
		//console.log(colors.white.bold('path = ' + config.modules[moduleIndex].path));
		
		try
		{
			const moduleConfig = require(path.join(appRoot, 'modules', modulesArray[moduleIndex], 'config'));
			//console.log(moduleConfig);
			router.use('/' + moduleConfig.path, moduleLoader);
		}
		catch(error)
		{
			console.log(colors.yellow(error.message));
		}

		
	}
}


//router.use('/', require(path.join(appRoot, 'modules/login/loader')));


module.exports = router;