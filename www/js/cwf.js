var CWF = (function()
{
	return { // скобку не переносит
		Load: function(dataParameters)
		{
			$.ajax(
			{
				url : '/' +  dataParameters['moduleName'] + '/' + dataParameters['requestPath'],
				cache: false,
				data: dataParameters['requestParameters'],
				method : 'POST',
				//async: requestParameters.async,
				success: function(answer)
				{
					//console.log(answer);
					let parameters = {};
					parameters.answer =  answer;  
					parameters.dataParameters =  dataParameters;
					if(dataParameters.blockType == undefined || dataParameters.blockType =='' || dataParameters.blockType =='basic')
					{
						CWF.FillTemplateData(parameters);
					}
					else if(dataParameters.blockType =='dialog')
					{
						CWF.OpenDialog(parameters);
					}
					else if(dataParameters.blockType =='dropdown-block')
					{
						CWF.OpenDropDown(parameters);
					}
					else
					{
						CWF.FillTemplateData(parameters);
					}
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
					console.log(errorThrown);
				}
			});
		},
		InitializeBlocks: function(targetElement)
		{
			if(targetElement != undefined)
			{
				$(targetElement).find('.active-block').ActiveBlock();
				$(targetElement).find('.request-block').RequestBlock();
			}
			else
			{
				$('body').ActiveBlock();
			}
		},
		FillTemplateData: function(parameters)
		{
			//console.log('FillTemplateData');
			if(parameters.answer.dataTable.length == undefined)
			{
				parameters.answer.dataTable = [];
			}

			parameters.answer.dataTable = parameters.answer.dataTable.filter(function(dataTable)
			{
				return dataTable.template != undefined && dataTable.data != undefined;
			});

			var targetElement = parameters.dataParameters.sourceElement;
			/*
			if(parameters.dataParameters.blockType == 'dropdown-block')
			{
				console.log('!!!!!!!!!!!!!!!!!!!!!!!#####!######');
				targetElement = parameters.dataParameters.sourceElement.siblings('.dropdown-block');
				console.log(targetElement.length);
			}
			else
			{
				targetElement = parameters.dataParameters.sourceElement;
			}
			//*/
			if(parameters.dataParameters != undefined)
			{
				if(typeof(parameters.dataParameters.beforeLoad) == 'string')
				{
					if(window[parameters.dataParameters.moduleName] != undefined && typeof(window[parameters.dataParameters.moduleName][parameters.dataParameters.beforeLoad]) == 'function')
					{
						console.log('Вызываю callback-функцию(JavaScrpt) ' + parameters.dataParameters.moduleName + '.' + parameters.dataParameters.beforeLoad);
						try
						{
							window[parameters.dataParameters.moduleName][parameters.dataParameters.beforeLoad].apply(targetElement, parameters.dataParameters.beforeLoadParameters);
						}
						catch(err)
						{
							console.error(err);
						}
					}
				}
			}
			var promises = $.map(parameters.answer.dataTable, function(dataTable)
			{
				var templateContentPattern = /<%.+%>/;
				if(!templateContentPattern.test(dataTable.template))
				{
					return $.ajax('/modules/' + parameters.dataParameters.moduleName + '/templates/' + dataTable.template + '.tpl').then(function(templateText)
					{
						var html;
						if(!parameters.dataParameters.sourceElement.hasClass('active-block'))
						{
							if(parameters.dataParameters.targetSelector != undefined)
							{
								targetElement = $(parameters.dataParameters.targetSelector);
								//console.log('parameters.dataParameters.targetSelector');
							}
							else
							{
								if(dataTable.targetSelector != undefined)
								{
									targetElement = $(dataTable.targetSelector);
									//console.log('dataTable.targetSelector');
								}
								else
								{
									if(parameters.dataParameters.blockType == 'dropdown-block')
									{
										targetElement = parameters.dataParameters.sourceElement.siblings('.dropdown-block');
									}
									else
									{
										targetElement = parameters.dataParameters.sourceElement;
									}
									
									//console.log('sourseElement');
									//console.log(parameters.dataParameters);
								}
							}
						}
						console.log('targetElement');
						console.log(targetElement);
						
						if(targetElement != undefined)
						{
							try
							{
								html = tmpl(templateText, dataTable.data);
							}
							catch(error)
							{
								console.error('Ошибка шаблона: ' + error.message);
								var errorText = error.message;
								var errorType = 'templateError';
								var sessionId;

								var errorData = {};
								errorData.error = true;
								errorData.dataTable = [];
								var templateData = {};

								templateData.template = 'error/' + errorType;
								templateData.targetSelector = '#dialog-content';
								templateData.data = {};

								templateData.data.errorText = errorText;
								templateData.data.sessionId = sessionId;
								templateData.data.teplateFile = dataTable.template + '.tpl';

								errorData.dataTable.push(templateData);

								OpenDialog({ answer: errorData, dataParameters: parameters.dataParameters });
							}					

							if(html != undefined)
							{
								targetElement.css('visibility', 'visible');
								targetElement.html(html);
								CWF.InitializeBlocks(targetElement);
							}
							else
							{
								console.error('html не сформирован');
							}
						}
						else
						{
							console.error('Нет элемента для заполнения');
						}
					});
				}
				else
				{
					var html = tmpl(dataTable.template, dataTable.data);                    

					if(!parameters.dataParameters.sourceElement.hasClass('active-block'))
					{
						if(parameters.dataParameters.targetSelector != undefined)
						{
							targetElement = $(parameters.dataParameters.targetSelector);
						}
						else
						{
							if(dataTable.targetSelector != undefined)
							{
								targetElement = $(dataTable.targetSelector);
							}
							else
							{
								targetElement = parameters.dataParameters.sourceElement;
							}
						}    
					}
					targetElement.css('visibility', 'visible');
					targetElement.html(html);
					CWF.InitializeBlocks($(targetElement));

					return true;
				}
			});
			$.when.apply(this, promises).then(function()
			{
				//console.log('done')
				if(parameters.answer.clearBlock === true)
				{
					if(targetElement)
					{
						targetElement.html('');
					}
				}
				console.log('Завершена загрузка блока(ов). Модуль: "' + parameters.dataParameters.moduleName + '" путь: "' + parameters.dataParameters.requestPath + '"');
				if(parameters.dataParameters != undefined)
				{
					if(typeof(parameters.dataParameters.afterLoad) == 'string')
					{
						if(window[parameters.dataParameters.moduleName] != undefined && typeof(window[parameters.dataParameters.moduleName][parameters.dataParameters.afterLoad]) == 'function')
						{
							console.log('Вызываю callback-функцию(JavaScrpt) ' + parameters.dataParameters.moduleName + '.' + parameters.dataParameters.afterLoad);
							try
							{
								window[parameters.dataParameters.moduleName][parameters.dataParameters.afterLoad].apply(targetElement, parameters.dataParameters.afterLoadParameters);
							}
							catch(err)
							{
								console.error(err);
							}
						}
					}
				}
				if(parameters.dataParameters != undefined)
				{
					if(typeof(parameters.dataParameters.toast) == 'string')
					{
						$.Toast(parameters.dataParameters.toast);
						console.log('Toast');
					}
					else
					{
						if(parameters.answer.toast)
						{
							$.Toast(parameters.answer.toast);
							console.log('Toast');
						}
						else
						{

						}
					}
				}
				if(parameters.answer.updateSelectors != undefined)
				{
					if(typeof(parameters.answer.updateSelectors) == 'string')
					{
						console.log('Пытаемся обновить блоки по селектору "' + parameters.answer.updateSelectors + '"');
						$(parameters.answer.updateSelectors).ActiveBlock('update');
					}
				}
				if(parameters.dataParameters.closeDialog === true)
				{
					CloseDialog();
				}

				if(parameters.dataParameters.blockType =='dialog')
				{
					let dialog = $('#dialog');
					CWF.FitDialog(dialog);
					$('#dialog').show('drop', { direction: 'up' }, CWF.animationDuration, function()
					{
						CWF.FitDialog(dialog);
					});
				}
				/*
				if(clickTargets != undefined && typeof(clickTargets) == 'object')
				{
				for(var clickTargetIndex in clickTargets)
				{
				$(clickTargets[clickTargetIndex]).trigger('click');
				//console.log(clickTargets[clickTargetIndex]);
				//console.log($(clickTargets[clickTargetIndex]).length);
				}
				}
				*/
			});
		},
		GetDataParameters: function(block)
		{
			let dataParameters = {};

			//console.log(block);
			if(block != undefined && (block instanceof jQuery))
			{
				dataParameters['sourceElement'] = block;

				for(var attributeIndex in block.get(0).attributes)
				{
					var patt = new RegExp(/data\-(cwf\-(.+))/);
					var res = patt.exec(block.get(0).attributes[attributeIndex].name);

					if(res)
					{
						dataParameters[CWF.CamelCase(res[2])] = block.data(res[1]);
					}
				}
				let dataParametersExt = block.data();
				for(let parameterIndex in dataParametersExt)
				{
					var patt = new RegExp(/^cwf(.+)/);
					var res = patt.exec(parameterIndex);
					if(res)
					{
						dataParameters[CWF.LowFirstLetter(res[1])] = dataParametersExt[parameterIndex];
					}
					else
					{

					}
				}
			}

			return dataParameters;
		},
		animationDuration: 200,
		OpenDialog: function(parameters)
		{
			var dialog = $('#dialog');

			if(dialog.length == 0)
			{
				$.ajax(
				{
					method: 'GET',
					cache: false,
					url: '/templates/dialog.tpl',
					data: {},
					success: function(dialogTemplate, textStatus, jqXHR)
					{
						//$(window).css('owerflow', 'hidden');
						var dialog = $(dialogTemplate);
						dialog.hide();
						if(!isNaN(parseInt(parameters.dataParameters.dialogWidth)))
						{
							dialog.width(parseInt(parameters.dataParameters.dialogWidth));
						}
						else
						{
							if(!isNaN(parseInt(parameters.answer.dialogWidth)))
							{
								dialog.width(parseInt(parameters.answer.dialogWidth));
							}
							else
							{
								dialog.width(768);
							}
						}
						var dialogShadow = $('<div id="dialog-shadow"></div>');
						dialogShadow.hide();
						var dialogLayer = $('<div id="dialog-layer"></div>');
						dialogShadow.css(
						{
							'position': 'absolute',
							'top': $(window).scrollTop() + 'px',
							//'height': $(window).height() + 'px',
							'background-color': '#000',
							'z-index': '2000',
							'opacity': '.4',
						});
						dialogShadow.width($(window).width());
						dialogShadow.height($(document).height());
						dialogLayer.css(
						{
							'position': 'absolute',
							'top': $(window).scrollTop() + 'px',
							//'height': $(window).height() + 'px',
							'z-index': '2001',
							'overflow': 'auto',
						});
						dialogLayer.width($(window).width());
						dialogLayer.height($(window).height() + 0);
						dialog.css(
						{
							//'position': 'absolute',
							'top': $(window).scrollTop() + 'px',
							//'height': $(window).height() + 'px',
							'z-index': '2001',
							'opacity': '1',
						});

						dialog.on('mousedown', function()
						{
							console.log('mousedown');
							dialog.data('mousedown', true);
						});

						dialog.on('mouseup', function()
						{
							console.log('mouseup');
							dialog.data('mousedown', false);
						});

						dialogLayer.on('click', function(event)
						{
							if($(event.target).attr('id') == 'dialog-layer')
							{
								var dialogMousedown = dialog.data('mousedown');
								if(!dialogMousedown || dialogMousedown == undefined)
								{
									CWF.CloseDialog();
								}
								else
								{
									dialog.data('mousedown', false);
								}
							}
						});

						dialog.find('.dialog-close').on('click', function(event)
						{
							CWF.CloseDialog();
						});

						if(parameters.dataParameters.dialogHeight != undefined)
						{
							dialog.data('cwf-dialog-height', parameters.dataParameters.dialogHeight);
						}

						dialogLayer.append(dialog);

						$('body').append(dialogShadow);
						$('body').append(dialogLayer);

						dialogShadow.fadeIn(CWF.animationDuration);
						CWF.FillTemplateData(parameters);

						$.scrollLock(true);

						/*
						dialog.draggable(
						{
						handle: '.panel-heading',
						containment: "document",
						});
						//*/
						/*
						dialog.resizable(
						{
						//handles : 'n, e, s, w, ne, se, sw, nw',
						handles : 'n, e, s, w',
						});
						//*/
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						console.error('Ошибка загрузки шаблона дилога');
					}
				});
			}
			else
			{
				CWF.FillTemplateData(parameters);
			}
		},
		CloseDialog: function(parameters)
		{
			var dialog = $('#dialog');
			var dialogShadow = $('#dialog-shadow');
			var dialogLayer = $('#dialog-layer');

			dialog.hide('drop', { direction: 'up' }, CWF.animationDuration, function()
			{
				dialogLayer.remove();
			});

			dialogShadow.fadeOut(CWF.animationDuration, function()
			{
				dialogShadow.remove();
			});


			if(dialog.length == 0)
			{

			}
			$.scrollLock(false);
		},
		CamelCase: function(input)
		{
			return input.toLowerCase().replace(/-(.)/g, function(match, group1)
			{
				return group1.toUpperCase();
			});
		},
		FitDialog: function(dialog)
		{
			let dialogContent = dialog.find('#dialog-content');
			let dialogHeader = dialog.find('#dialog-header');
			let dialogShadow = $('#dialog-shadow');
			let dialogLayer = $('#dialog-layer');

			let dataParameters = CWF.GetDataParameters(dialog);
			//console.log('dataParameters');
			//console.log(dataParameters);

			dialogShadow.height($(document).height());
			dialogLayer.height($(window).height());

			console.log('dataParameters.dialogHeight = ' + dataParameters.dialogHeight)
			if(dataParameters.dialogHeight != undefined && dataParameters.dialogHeight != '' && dataParameters.dialogHeight != 0)
			{
				if(dataParameters.dialogHeight == 'screen')
				{
					dialog.height($(window).height() - parseInt(dialog.css('margin-top')) - parseInt(dialog.css('margin-bottom')) - 5);
				}
				else
				{
					if(typeof(dataParameters.dialogHeight) == 'number')
					{
						console.log('dialog.outerHeight() = ' + dialog.outerHeight())
						console.log('$(window).outerHeight() = ' + $(window).height())
						console.log('margin-top = ' + parseInt(dialog.css('margin-bottom')))
						console.log($(window).height() - parseInt(dialog.css('margin-top')) - parseInt(dialog.css('margin-bottom')) - 5)
						if(($(window).height() - parseInt(dialog.css('margin-top')) - parseInt(dialog.css('margin-bottom')) - 5) < dataParameters.dialogHeight)
						{
							dialog.height($(window).height() - parseInt(dialog.css('margin-top')) - parseInt(dialog.css('margin-bottom')) - 5);
						}
						else
						{
							dialog.height(dataParameters.dialogHeight);
						}
					}
				}
			}
			else
			{
				dialog.data('cwfDialogHeight', dialog.height());
				dataParameters.dialogHeight = dialog.height();
				console.log('dialog.height() = ' + dialog.height())

				if(($(window).height() - parseInt(dialog.css('margin-top')) - parseInt(dialog.css('margin-bottom')) - 5) < dataParameters.dialogHeight)
				{
					dialog.height($(window).height() - parseInt(dialog.css('margin-top')) - parseInt(dialog.css('margin-bottom')) - 5);
				}
				else
				{
					dialog.height(dataParameters.dialogHeight);
				}
			}
			let dialogContentMargin = parseInt(dialogContent.css('margin-top')) + parseInt(dialogContent.css('margin-bottom')) + parseInt(dialogContent.css('padding-top')) + parseInt(dialogContent.css('padding-bottom'))

			dialogContent.height(dialog.height() - dialogHeader.outerHeight(true) - dialogContentMargin);
		},
		LowFirstLetter: function(string)
		{
			return string.charAt(0).toLowerCase() + string.slice(1);
		},
		OpenDropDown: function(parameters)
		{
			console.log('dropdown-block');
			var dropdownBlock = parameters.dataParameters.sourceElement.nextAll('.dropdown-block:first');
			if(dropdownBlock.length == 0)
			{
				dropdownBlock = $('<div class="dropdown-block">&nbsp;</div>');
				
				parameters.dataParameters.sourceElement.after(dropdownBlock);
				CWF.FillTemplateData(parameters);
			}
			else
			{
				//console.log('event');
				//console.log(event);
				if(event.type != 'change')
				{
					dropdownBlock.remove();
				}
			}
		},
		CloseDropDown: function()
		{
			$('.dropdown-block').remove();
		}
	};
})();