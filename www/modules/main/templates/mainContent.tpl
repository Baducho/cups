<div id="mainRight" class="col-sm-4">			
        
        <ul class="nav nav-tabs">
            <li class="active"><a href="#create-request" data-toggle="tab">Создать запрос</a></li>
            <li><a href="#find-request" data-toggle="tab">Искать запрос</a></li>
            
        </ul>


        <div class="tab-content">
            <div class="tab-pane active" id="create-request">
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
                        <button type="submit" class="btn btn-default">Выполнить запрос</button>
                    </form>
                </div>
            
            </div>
            <div class="tab-pane" id="find-request">
                <h4>Задате реквизиты для поиска</h4>
                <form>
                    <form>
                        <input type="text" class="form-control" placeholder="ОГРНИП">
                        <input type="text" class="form-control" placeholder="Фамилия">
                        <input type="text" class="form-control" placeholder="Имя">
                        <input type="text" class="form-control" placeholder="Отчество">
                        <input type="text" class="form-control" placeholder="Дата рождения">
                        <input type="text" class="form-control" placeholder="Серия паспорта">
                        <input type="text" class="form-control" placeholder="Номер паспорта">
                        Дата запроса
                        <input type="text" class="form-control" placeholder="С">
                        <input type="text" class="form-control" placeholder="ПО">
                        Дата ответа
                        <input type="text" class="form-control" placeholder="С">
                        <input type="text" class="form-control" placeholder="ПО">
                        <div class="source-block">
                            <h4>Статусы</h4>
                            <div class="checkbox"><label><input type="checkbox" value="">Получен ответ</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">Ошибка</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">Обрабатывается</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">Нет данных</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">Нет согласия на обработку персональных данных</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">В очереди</label></div>
                            <div class="checkbox"><label><input type="checkbox" value="">Обработка завершена</label></div>
                            
                        </div>
                        
                        <button type="submit" class="btn btn-default">Найти запросы</button>
                    </form>
                </form>
            
            </div>
        </div>
        
    </div>
    <div id="mainContent"  class="col-sm-8">
		<button class="btn btn-warning request-block" data-cwf-block-type="basic" data-cwf-module-name="main" data-cwf-request-path="refresh"  data-cwf-request-parameters="{ &quot;lua-function-arguments&quot;: [1, &quot;text&quot;, &quot;Это из кнопки&quot;]}" data-cwf-after-load="AfterLoadFunction" data-cwf-after-load-parameters="[{&quot;test&quot;: &quot;testvalue&quot;}]" data-cwf-before-load="BeforeLoadFunction" data-cwf-before-load-parameters="[{&quot;test1&quot;: &quot;testvalue1&quot;}]">update</button>
		<button class="btn btn-warning request-block" data-cwf-block-type="dropdown-block" data-cwf-module-name="main" data-cwf-request-path="dropdown">dropdown</button>
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
                <th>#</th>
                <th>Запрос<%=obj.mainData%></th>
                <th><i class="fas fa-undo" title="Повторить запрос"></i></th>
                <th>Дата и время запроса</th>
                <th>Дата и время ответа</th>
                <th>Источник</th>
                <th>Пользователь</th>
                <th>Статус</th>
            </tr>
            <tr class="warning">
                <td>147074</td>
                <td><a href="#" data-toggle="collapse" data-target="#demo">Иванов Иван Петрович 312811863983</a></td>
                <td><i class="fas fa-undo" title="Повторить запрос"></i></td>
                <td>19.02.2019 15:31</td>
                <td>25.03.2019 11:15</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Мушанова Евгения Васильевна</td>
                <td><a href="#">Ошибка</a></td>
            </tr>
            <tr>
                <td colspan="8" class="description-td">
                <div id="demo" class="collapse description">
                    <h5>СПАРК - Банкротство физического лица</h5>
                    
                    <table class="simple-table">
                        <tr><td class="span">Фамилия</td><td>Иванов</td></tr>
                        <tr><td class="span">Имя</td><td>Иван</td></tr>
                        <tr><td class="span">Отчество</td><td>Петрович</td></tr>
                        <tr><td class="span">Дата рождения</td><td>12.05.1986</td></tr>
                        <tr><td class="span">ИНН</td><td>312811863983</td></tr>
                        <tr><td class="span">Серия паспорта</td><td>7894</td></tr>
                        <tr><td class="span">Номер паспорта</td><td>789456</td></tr>
                    </table>
                </div></td>
            </tr>
            <tr class="success">
                <td>147074</td>
                <td><a href="#">Иванов Иван Петрович 312811863983</a></td>
                <td><i class="fas fa-undo" title="Повторить запрос"></i></td>
                <td>19.02.2019 15:31</td>
                <td>25.03.2019 11:15</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Мушанова Евгения Васильевна</td>
                <td><a href="#">Ответ</a></td>
            </tr>
            <tr class="">
                <td>147074</td>
                <td><a href="#">Иванов Иван Петрович 312811863983</a></td>
                <td><i class="fas fa-undo" title="Повторить запрос"></i></td>
                <td>19.02.2019 15:31</td>
                <td>25.03.2019 11:15</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Мушанова Евгения Васильевна</td>
                <td>Обрабатывается</td>
            </tr>
            <tr class="nodata">
                <td>147074</td>
                <td><a href="#">Иванов Иван Петрович 312811863983</a></td>
                <td><i class="fas fa-undo" title="Повторить запрос"></i></td>
                <td>19.02.2019 15:31</td>
                <td>25.03.2019 11:15</td>
                <td>СПАРК - Банкротство физического лица</td>
                <td>Мушанова Евгения Васильевна</td>
                <td>Нет данных</td>
            </tr>
        </table>
        
    </div>