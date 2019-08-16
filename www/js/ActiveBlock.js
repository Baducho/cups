(function($)
{
	var methods = 
	{
		
		init : function(options) 
		{
			var settings =
			{
				dialogId: 'bsDialog'
			};
			if(options)
			{ 
				$.extend(settings, options);
			}
			
			return this.each(function()
			{
				var _this = $(this);
				var dataParameters = CWF.GetDataParameters(_this);
				//console.log(dataParameters);
				CWF.Load(dataParameters);
            });

		},
		update : function()
		{
			var _this = $(this);
			var dataParameters = CWF.GetDataParameters(_this);
			//console.log(dataParameters);
			CWF.Load(dataParameters);
		}
	};


	
	$.fn.ActiveBlock = function(method)
	{
		if (methods[method]) 
		{
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			//return methods[method].apply(this, arguments);
		}
		else if (typeof method === 'object' || ! method)
		{
			return methods.init.apply(this, arguments);
		}
		else
		{
			$.error('Method ' +  method + ' does not exist on jQuery.ActiveBlock');
		}    
	};
})(jQuery);