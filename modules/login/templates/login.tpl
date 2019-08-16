<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>		
	
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" media="screen" />	
	<link rel="stylesheet" href="/font-awesome/css/fontawesome.min.css">
	<link rel="stylesheet" type="text/css" href="/css/main.css" media="screen" />
	
	<script src="/js/jquery-3.2.1.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/jquery-ui.min.js"></script>
	<script src="/js/jquery.cookie.js"></script>

 	<title>  Платформа Кронос - Ростелеком</title>
</head>

<body>
		<nav id="top-panel" class="navbar navbar-default navbar-fixed-top col-sm-12" data-spy="affix">
		
		</nav>

		<div id="login-panel">
			<h1>Платформа Кронос - Ростелеком <%=obj.test%></h1>
			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">Для работы с системой необходимо авторизоваться</h3>
				</div>
				<div class="panel-body">
					<form name="first" style="display: block" action="/auth" method="post">
						<div class="login_table">
								<input type="hidden" name="WorkingDirectory" value="C:\Inetpub\">
								<input type="hidden" name="WorkingDirectoryAdd" value="ГазпромЭнерго\">
								<input type="hidden" name="CroCommand" value="BankSelect:~!ГЭ Проверка;CallFunction:~Login">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Введите логин</span>
									<input type="text" name="Name" class="form-control" placeholder="Username" aria-describedby="basic-addon1" value="Admin">
									
									<!-- <select class="form-control" name="Name" id="loginNameSelect">
										<option value="Gazprom">Gazprom</option>
										<option value="Admin">Admin</option>
										<option value="Baducho">Baducho</option>
										<option value="Jenya">Jenya</option>
										<option value="uuuuu">uuuuu</option>
									</select> -->
								</div>	
								<br>
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Введите пароль</span>
									<input type="password" name="Password" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
									<span class="input-group-btn">
										<input type="submit" class="btn btn-default" name="Login" type="button" value="Войти">
									 </span>
								</div>

						</div>			
					</form>
				</div>
			</div>
		</div>	
		<div class="panel panel-default" id="footer">
			<div class="panel-heading">
				<h3 class="panel-title">
					<div >&copy; 2019 Кронос-Информ</div>
					<div class="clearer">&nbsp;</div>
				</h3>
			</div>
		</div>
</body>
</html>