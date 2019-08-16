var config = (function()
{
	return { // скобку не переносить
		projectName: 'ProtoCWF', // Имя проекта
		server : "192.168.0.117", // Адрес сервера Кронос
		sessionTimeout : 600, // Таймаут сессии (секунды)
		port : 80, // Номер порта, на котором слушает нода
		memorySize : 64, // Размер выделяемой памяти для CronosServer
		modules: // Список модулей, подключаемых к системе
		[
			{
				name: 'logn',
				path: ''
			},
			{
				name: 'main1',
				path: 'main'
			},
			{
				name: 'authtttttt',
				path: 'auth'
			},
			{
				name: 'top-panel',
				path: 'top-panel'
			},
			{
				name: 'favorites',
				path: 'favorites'
			},
		]
	};  
})();

module.exports = config