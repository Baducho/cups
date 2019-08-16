<div id="mainRight" class="col-sm-4">			
				
        <ul class="nav nav-tabs">
            <li class="active"><a href="#create-request" data-toggle="tab">Редактирование запросов</a></li>
            <li><a href="#find-request" data-toggle="tab">Фильтр запросов</a></li>
            
        </ul>
        
        <div class="tab-content">
            <div class="tab-pane active" id="create-request">
                <button href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Создать запрос</button>
                <hr>
                <h4>Настроить несколько запросов</h4>
                <form>
                    <form>								
                        <input type="text" class="form-control" placeholder="Дата начала">
                        <input type="text" class="form-control" placeholder="Период в днях">
                        <div class="checkbox"><label><input type="checkbox" value="">Выключить</label></div>
                        <div class="checkbox"><label><input type="checkbox" value="">Включить</label></div>
                        <div class="checkbox"><label><input type="checkbox" value="">Удалить</label></div>
                        <button type="submit" class="btn btn-default">Выполнить	</button>
                    </form>
                </form>
            </div>
            <div class="tab-pane" id="find-request">
                <form>
                    <form>								
                        <input type="text" class="form-control" placeholder="Тип запроса">
                        Дата начала
                        <input type="text" class="form-control" placeholder="С">
                        <input type="text" class="form-control" placeholder="ПО">
                        Период
                        <input type="text" class="form-control" placeholder="С">
                        <input type="text" class="form-control" placeholder="ПО">
                        <br>
                        <button type="submit" class="btn btn-default">Отфильтровать</button>
                    </form>
                </form>
            </div>
        </div>
        
        
        
    </div>
    <div id="mainContent"  class="col-sm-8">
        <ul class="pagination">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&raquo;</a></li>
        </ul>
        
        <div class="clear"></div>
        <table class="table table-bordered table-hover">
            <tr>
                <th><input type="checkbox" value=""></th>
                <th>#</th>
                <th>Запрос</th>
                <th>Дата начала</th>
                <th>Период</th>
                <th>Источник</th>
                <th>Статус</th>
                <th>Ответы</th>
            </tr>
            <tr class="warning">
                <td><input type="checkbox" value=""></td>
                <td>147074</td>
                <td><a href="#" data-toggle="modal" data-target="#myModal">Иванов Иван Петрович 312811863983</a></td>						
                <td>19.02.2019</td>
                <td>45</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Ошибка</td>
                <td><a href="#">Ответ</a></td>
            </tr>
            <tr class="warning">
                <td><input type="checkbox" value=""></td>
                <td>147074</td>
                <td><a href="#" data-toggle="modal" data-target="#myModal">Иванов Иван Петрович 312811863983</a></td>						
                <td>19.02.2019</td>
                <td>45</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Ошибка</td>
                <td><a href="#">Ответ</a></td>
            </tr>
            <tr class="warning">
                <td><input type="checkbox" value=""></td>
                <td>147074</td>
                <td><a href="#" data-toggle="modal" data-target="#myModal">Иванов Иван Петрович 312811863983</a></td>						
                <td>19.02.2019</td>
                <td>45</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Ошибка</td>
                <td><a href="#">Ответ</a></td>
            </tr>
            <tr class="warning">
                <td><input type="checkbox" value=""></td>
                <td>147074</td>
                <td><a href="#" data-toggle="modal" data-target="#myModal">Иванов Иван Петрович 312811863983</a></td>					
                <td>19.02.2019</td>
                <td>45</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Ошибка</td>
                <td><a href="#">Ответ</a></td>
            </tr>
        </table>
        
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