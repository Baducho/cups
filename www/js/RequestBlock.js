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
			
			// Вспомогательные функции
			////////////////////////////

			return this.each(function()
			{
				var _this = $(this);
                var dataParameters = CWF.GetDataParameters(_this);
                dataParameters.event = (dataParameters.event != undefined ? dataParameters.event : 'click');
				//console.log(dataParameters);
				
				if(dataParameters.blockType =='dropdown-block')
				{
					let dropdownContainer = $('<div class="dropdown" style="display:inline-block;"></div>');
					_this.after(dropdownContainer);
					let __this = _this.detach();
					dropdownContainer.append(__this);
				}
                
                _this.on(dataParameters.event + ' change', function(event)
                {
					event.preventDefault();
					var _this = $(this);
					var dataParameters = CWF.GetDataParameters(_this);
					//console.log(dataParameters);
					CWF.Load(dataParameters);
	
				});
			});
		},
		update : function()
		{
			//console.log('update');
			//console.log(this); 
			
			var dataParemeters = CWF.GetDataParameters(this);
			
			if(dataParemeters.buttonType == 'dropdown-block')
			{
				//console.log('update dropdown-block');
				//$(this).trigger('change');
			}
			else
			{
				console.log('Метод update не предусмотрен для buttonType = ' + dataParemeters.buttonType);
			}
		}
	};
	
	$.fn.RequestBlock = function(method)
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
			$.error('Method ' +  method + ' does not exist on jQuery.RequestBlock');
		}    
	};
})(jQuery);