<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>		
	
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" media="screen" />	
	<link rel="stylesheet" href="/font-awesome/css/fontawesome.min.css">
	<link rel="stylesheet" type="text/css" href="/css/main.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="/css/dialog.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="/css/dropdown-block.css" media="screen" />
	<link rel="stylesheet" href="/font-awesome/css/all.min.css">
	
	<script src="/js/jquery-3.2.1.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/jquery-ui.min.js"></script>
	<script src="/js/jquery.cookie.js"></script>
	<script src="/js/jquery.scrollLock.js"></script>
	<script src="/js/Toast.js"></script>
	<script src="/js/ActiveBlock.js"></script>
	<script src="/js/RequestBlock.js"></script>
	<script src="/js/cwf.js"></script>
	<script src="/js/common.js"></script>
	<script src="/js/template.js"></script>

	<%for(let moduleIndex in obj.modules){%>
	<script src="/modules/<%=obj.modules[moduleIndex]%>/script.js"></script>
	<%}%>

 	<title><%=obj.title%></title>
</head>

<body class="active-block" data-cwf-module-name="<%=obj.moduleName%>" data-cwf-request-path="<%=obj.requestPath%>" data-cwf-request-parameters="<%=obj.requestParameters%>">
	
</body>
</html>