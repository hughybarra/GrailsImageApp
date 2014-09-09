<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<!-- META DATA -->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- END META DATA -->

		<title><g:layoutTitle default="Grails"/></title>

		
		<!-- FAVICONS -->
		<!-- END FAVICONS -->

		<!-- CSS -->
		<!-- reset has to run furst -->
  		<asset:stylesheet src="reset.css"/>
  		<!-- bootstarp distribution -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

		<!-- END CSS -->


		<!-- TEMPLATE HEADER DATA HERE -->
		<g:layoutHead/>
	</head>
	<body>


		<nav class="nav navbar-default">
			<div class="navbar-header">
				<a class="navbar-brand" href="/hyImageApp">Image App</a>
			</div>

			<!-- collect the nav links, froms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar=collapse-1">

				<ul class="nav navbar-nav">
					<li><a href="http://localhost:8080/hyImageApp/addImage"><span class="glyphicon glyphicon-open"></span> Add Images</a></li>
				</ul>

				<ul class="nav navbar-nav pull-right">
					%{-- Check if the user is logged in switch--}%
					<g:if test="${session['loggedIn']}">


						<li class="pull-right"><a href="/hyImageApp/authentication/logout"> Logout</a></li>

						<li class="pull-right"><a href="">Welcome: ${session['userEmail']}</a></li>


					</g:if>
					<g:else>
						<li class="pull-right"><a href="/hyImageApp/login">Login</a></li>
					</g:else>


			
				</ul>

			</div>
		</nav>

		<g:layoutBody/>


	</body>
</html>
