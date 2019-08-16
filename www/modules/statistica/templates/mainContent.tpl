<div id="mainRight" class="col-sm-4">			
				
        <div class="panel panel-default">
            <div class="panel-heading">Выберите отчет</div>
            <div class="panel-body">
                <ul>
                    <li><a href="#">Статистика пакетного запроса</a></li>
                    <li><a href="#">Отчет 2</a></li>
                    <li><a href="#">Отчет 3</a></li>
                </ul>
            </div>
        </div>
        
        
        
    </div>
    <div id="mainContent"  class="col-sm-8">
        
        <div class="panel panel-default">
            <div class="panel-heading">Статистика пакетного запроса</div>
            <div class="panel-body">
                <form>
                    <div class="form-group row">								
                        <div class="col-xs-3">
                            <label for="ex2">Время пакета</label>
                            <input class="form-control" id="ex2" type="text">
                        </div>
                        <div class="col-xs-3">
                            <label for="ex3">Дата пакета</label>
                            <input class="form-control" id="ex3" type="text">
                        </div>
                        
                    </div>
                    <div class="form-group row">								
                        <div class="col-xs-3">
                            <button type="submit" class="btn btn-default">Сформировать отчет</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        
    </div>
    
    
    <div class="modal fade" id="adminText" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Сообщение от администратора</h4>
                </div>					
                <div class="modal-body">
                    
                    Система будет выключена через 2 часа.

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                    
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Создание/Редактирование запроса</h4>
                </div>
                <div class="modal-body">
                    <div class="dropdown">							
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Выберите тип запроса
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Физическое лицо</a></li>
                            <li><a href="#">Юридическое лицо</a></li>
                            <li><a href="#">Индивидуальный предприниматель</a></li>
                            <li><a href="#">Транспортное средство</a></li>
                            <li><a href="#">Внешний источник</a></li>
                        </ul>							
                    </div>
                    <div id="create-request-form">
                        <form>
                            <input type="text" class="form-control" placeholder="ОГРНИП">
                            <input type="text" class="form-control" placeholder="Фамилия">
                            <input type="text" class="form-control" placeholder="Имя">
                            <input type="text" class="form-control" placeholder="Отчество">
                            <input type="text" class="form-control" placeholder="Дата рождения">
                            <input type="text" class="form-control" placeholder="Серия паспорта">
                            <input type="text" class="form-control" placeholder="Номер паспорта">
                            <div class="source-block">
                                <h4>Источники</h4>
                                <h5>МБКИ</h5>
                                <div class="checkbox"><label><input type="checkbox" value="">МБКИ - ЕГРИП архив</label></div>
                                <div class="checkbox"><label><input type="checkbox" value="">МБКИ - Бизнес-Справка по ИП</label></div>
                                <div class="checkbox"><label><input type="checkbox" value="">МБКИ - ЕГРИП</label></div>
                                <div class="checkbox"><label><input type="checkbox" value="">МБКИ - Справка по ИП</label></div>
                                
                                <h5>СПАРК</h5>
                                <div class="checkbox"><label><input type="checkbox" value="">СПАРК - Краткая справка по ИП</label></div>
                            </div>
                            <h4>Настройки</h4>
                            <input type="text" class="form-control" placeholder="Дата начала">
                            <input type="text" class="form-control" placeholder="Период в днях">
                            <div class="checkbox"><label><input type="checkbox" value="">Включен</label></div>
                            
                        </form>
                    </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary">Сохранить изменения</button>
                </div>
            </div>
        </div>
    </div>
    
</div>