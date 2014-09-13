<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">

		<!-- main.css -->
		<asset:stylesheet src="login/main.css"/>
	</head>
	<body>


		<div class="jumbotron">
			<div class="text-center">
				<h1>ImageApp</h1>
				<p>Login or sign up to start sharing images</p>
			</div>
		</div>

		<section class="mainContainer">

			<form role="form" class="col-lg-3 col-lg-offset-3 loginForm" >


				<h3> Login </h3>
				<div class="form-group loginFgEmail">
					<label for="loginEmail">Email address</label>
					<input type="email" class="form-control" id="loginEmail" placeholder="Enter email">
				</div>

				<div class="form-group loginFgPassword">
					<label for="loginPassword">Password</label>
					<input type="password" class="form-control" id="loginPassword" placeholder="Password">
				</div>

				<div class="btn btn-default loginButton">Login</div>
			  
			</form>


			<form role="form" class="col-lg-3 signUpForm">

				<h3>Sign Up</h3>

				<div class="form-group signUpFgEmail">
				    <label for="signUpEmail">Email address</label>
				    <input type="email" class="form-control" id="signUpEmail" placeholder="Enter email">
			    </div>

				<div class="form-group signUpFgPassword1">
					<label for="signUpPassword1">Password</label>
					<input type="password" class="form-control" id="signUpPassword1" placeholder="Password">
				</div>
				<div class="form-group signUpFgPassword2">
					<label for="signUpPassword2">Confirm Password</label>
					<input type="password" class="form-control" id="signUpPassword2" placeholder="Password">
				</div>

				<div class="btn btn-default signUpButton">Sign UP </div>

			</form>

		</section>

		<!-- main.js -->
		<asset:javascript src="login/main.js"/>
	</body>
</html>











