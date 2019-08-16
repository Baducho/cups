<div id="mainLeft" class="admin-list col-sm-3">			
				
        <div class="panel panel-default grey-panel">
            <div class="center grey-panel-heading panel-heading">Настройки</div>
            <div class="panel-body">
                <ul>
                    <li><a href="#" data-toggle="collapse" data-target="#main-settings">Общие настройки</a></li>
                    <li><a href="#">Настройки пакетных запросов</a></li>
                    <li><a href="#" data-toggle="collapse" data-target="#source-settings">Настройка источников</a></li>
                </ul>
            </div>
        </div>
        
        <div class="panel panel-default grey-panel">
            <div class="center grey-panel-heading panel-heading">Список пользователей</div>
            <div class="panel-body">
                <button type="button" class="btn btn-default">Добавить пользователя</button>
                <ul>
                    <li><a href="#" data-toggle="collapse" data-target="#users-list">Список пользователей</a></li>
                    <li><a href="#">Список групп</a></li>
                </ul>
            </div>
        </div>
        
    </div>
    <div id="mainContent"  class="col-sm-9">
    
        <div id="users-list" class="collapse">
            <div class="panel panel-default">
                <div class="center grey-panel-heading panel-heading">Список пользователей</div>
                <div class="panel-body">
                    <table class="table table-hover table-striped table-bordered">
                        <tr>						
                            <th>Логин</th>
                            <th>ФИО</th>									
                            <th>Статус</th>
                            <th>Тип пользователя</th>
                            <th>Группы</th>
                        </tr>									
                        <tr class="">
                            <td><a href="#" data-toggle="modal" data-target="#about-user">Admin</a></td>
                            <td>Мушанова Евгения Васильевна</td>														
                            <td>Действующий</td>									
                            <td>Администратор</td>									
                            <td>Белгородский филиал</td>									
                        </tr>
                        <tr class="">
                            <td><a href="#">Admin</a></td>
                            <td>Мушанова Евгения Васильевна</td>														
                            <td>Действующий</td>									
                            <td>Администратор</td>									
                            <td>Белгородский филиал</td>									
                        </tr>
                        <tr class="">
                            <td><a href="#">Admin</a></td>
                            <td>Мушанова Евгения Васильевна</td>														
                            <td>Действующий</td>									
                            <td>Администратор</td>									
                            <td>Белгородский филиал</td>									
                        </tr>
                        <tr class="">
                            <td><a href="#">Admin</a></td>
                            <td>Мушанова Евгения Васильевна</td>														
                            <td>Действующий</td>									
                            <td>Администратор</td>									
                            <td>Белгородский филиал</td>									
                        </tr>
                        <tr class="danger">
                            <td><a href="#">Admin</a></td>
                            <td>Мушанова Евгения Васильевна</td>														
                            <td>Заблокирован</td>									
                            <td>Администратор</td>									
                            <td>Белгородский филиал</td>									
                        </tr>
                        <tr class="">
                            <td><a href="#">Admin</a></td>
                            <td>Мушанова Евгения Васильевна</td>														
                            <td>Действующий</td>									
                            <td>Администратор</td>									
                            <td>Белгородский филиал</td>									
                        </tr>
                        <tr class="">
                            <td><a href="#">Admin</a></td>
                            <td>Мушанова Евгения Васильевна</td>														
                            <td>Действующий</td>									
                            <td>Администратор</td>									
                            <td>Белгородский филиал</td>									
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        <div id="main-settings" class="collapse">
            <div class="panel panel-default">
                <div class="center grey-panel-heading panel-heading">Общие настройки</div>
                <div class="panel-body">
                    <form class="form-horizontal" action="/action_page.php">
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="email">Номера запросов по образцу для статистики (через ;)</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="email" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="pwd">Путь к лог-файлу</label>
                            <div class="col-sm-8"> 
                                <input type="text" class="form-control" id="pwd" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="pwd">Папка для хранений отчетов</label>
                            <div class="col-sm-8"> 
                                <input type="text" class="form-control" id="pwd" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="pwd">Служебная папка (для хранения служебных файлов)</label>
                            <div class="col-sm-8"> 
                                <input type="text" class="form-control" id="pwd" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="pwd">Служебная папка (для хранения служебных файлов)</label>
                            <div class="col-sm-8"> 
                                <input type="text" class="form-control" id="pwd" placeholder="">
                            </div>
                        </div>
                        <div class="form-group"> 
                            <div class="col-sm-offset-4 col-sm-8">
                                <button type="submit" class="btn btn-default">Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <div id="source-settings" class="collapse">
            <div class="panel panel-default">
                <div class="center grey-panel-heading panel-heading">Настройка источников</div>
                <div class="panel-body">
                    
                    <table class="table table-hover table-striped table-bordered">
                        <tr>						
                            <th>Название</th>
                            <th>Включен/Выключен</th>									
                            <th>Проверять по базе абонентов</th>
                        </tr>	
                        <tr>
                            <td colspan="4">
                                <h4>Юридическое лицо</h4>
                            </td>
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr>
                            <td colspan="4">
                                <h4>Физическое лицо</h4>
                            </td>
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                        <tr class="">
                            <td>СПАРК - Полная справка</td>
                            <td>
                                <label><input type="checkbox" value=""> Включить</label>
                            </td>														
                            <td></td>									
                        </tr>
                    </table>
                    
                </div>
            </div>
        </div>
        
        
    </div>
    
    <div class="modal fade" id="about-user" tabindex="-2" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Свойства пользователя</h4>
                </div>					
                <div class="modal-body">
                    <div class="admin-user-block left">
                        <h4>Основные сведения</h4>
                        <div class="form-group">
                            
                            <label for="user-title-name">Логин</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>									
                            <div class="radio">
                                <label class="radio-inline"><input type="radio" name="optradio" >Администратор</label>
                                <label class="radio-inline"><input type="radio" name="optradio" >Руководитель</label>
                                <label class="radio-inline"><input type="radio" name="optradio">Пользователь</label>
                            </div>
                            <label for="user-title-name">Срок действия пароля в днях</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                            <label for="user-title-name">Количество попыток</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                            <button type="button" class="btn btn-default " data-dismiss="modal">Изменить пароль</button>
                            <button type="button" class="btn btn-danger " data-dismiss="modal">Заблокировать</button>
                        </div>
                    </div>
                    
                    <div class="admin-user-block left">
                        <h4>Доступ</h4>
                        <div class="form-group">
                            <div class="checkbox"><label><input type="checkbox" value="">Доступны избранные запросы</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">Доступны поручения</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">Доступны пакетные запросы</label></div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Входит в группы <span class="caret"></span></button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Действие</a></li>
                                    <li><a href="#">Другое действие</a></li>
                                    <li><a href="#">Что-то иное</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Отдельная ссылка</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="admin-user-block left">
                        <h4>Контактная информация</h4>
                        <div class="form-group">
                            <label for="user-title-name">ФИО</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                            <label for="user-title-name">Фамилия</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                            <label for="user-title-name">Имя</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                            <label for="user-title-name">Отчество</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                            <label for="user-title-name">Контакты</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                            <label for="user-title-name">e-mail</label>
                            <input type="text" name="user-title-name" class="form-control long-input"></input>
                        </div>
                    </div>
                    <div class="clear">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Сохранить</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                    
                </div>
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