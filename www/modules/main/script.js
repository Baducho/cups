var main = (function()
{
	return { // скобку не переносит
		BeforeLoadFunction: function(parameters)
		{
			console.log('BeforeLoadFunction');
			console.log('this');
			console.log(this);
			console.log('parameters');
			console.log(parameters);

		},
		AfterLoadFunction: function(parameters)
		{ 
			console.log('AfterLoadFunction');
			console.log('this');
			console.log(this);
			console.log('parameters');
			console.log(parameters);
		},
	};  
})();