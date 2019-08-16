/*! */

(function ( $ ) {
 
    $.Toast = function(toastText)
	{
		var fadeTime = 400;
		var liveTime = 1400;
		var maxWith = 800;
		
		$('#toast').remove();
		var toastContent = $('<div id="toast">' + toastText + '</div>');
		toastContent.css(
		{
			'position': 'absolute',
			'background-color': '#fff',
			'z-index': '10000',
			'border': 'solid #000 1px',
			'min-width': '150px',
			'max-width': maxWith + 'px',
			'min-height': '40px',
			'padding': '10px',
			'font-size': '15pt',
			'border-radius': '6px',
		}).hide();
		$('body').append(toastContent);
		toastContent.css(
		{
			'left': ($(window).width() / 2 - toastContent.width() / 2) + 'px',
			'top': ($(window).height() / 3) + $(window).scrollTop() + 'px',
		});
		toastContent.fadeIn(fadeTime, function()
		{
			///*
			setTimeout(function()
			{
				toastContent.fadeOut(fadeTime, function()
				{
					toastContent.remove();
				})
			}, liveTime);
			//*/
		});

		//console.log('toastContent.width() = ' + toastContent.width());
		//alert();
	};
 
}( jQuery ));