/*
██╗      ██████╗  ██████╗ ██╗███╗   ██╗
██║     ██╔═══██╗██╔════╝ ██║████╗  ██║
██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
██║     ██║   ██║██║   ██║██║██║╚██╗██║
███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝
                                       
                                        
@author hugh Ybarra
@contact hugh.ybarra@gmail.com                                                                   
*/
// anon function
$(function(){

	// login 
	$('.loginButton').click(function(){
		console.log('login clicked');

		var loginEmail = $('#loginEmail').val();
		var loginPassword = $('#loginPassword').val();
		var loginValid = true;

		console.log(loginEmail);
		console.log(loginPassword);

		///validation 
		if (loginEmail){
			$('.loginFgEmail').addClass('has-success');
			$('.loginFgEmail').removeClass('has-success');
		}else{
			loginValid = false;
			$('.loginFgEmail').addClass('has-error');
			$('.loginFgEmail').removeClass('has-success')
		}

		///validation 
		if (loginEmail){
			$('.loginFgPassword').addClass('has-success');
			$('.loginFgPassword').removeClass('has-success');
		}else{
			loginValid = false;
			$('.loginFgPassword').addClass('has-error');
			$('.loginFgPassword').removeClass('has-success')
		}


		if (loginValid){
			console.log('ajaxing into logMeIn');

			// place text into new object
			var ajaxUrl = 'authentication/login'
			// var ajaxUrl = 'testing/update'

			// building new ajax object
			var data = {
				'email': loginEmail,
				'password': loginPassword
			};
		
			// save text to the server
			$.ajax({
				type: "POST",
				url: ajaxUrl,
				data: data,
				dataType: 'json',
				success: function(success){
					console.log(success);
					// redirect to the landing page
					// window.location.href = "/hyImageApp";

					console.log(success.success);

					if (success.success){
						// you were logged in
						window.location.href = '/hyImageApp';
					}else{

						$('.errorContainer').empty();
						// you were not logged in
						// error message on the secreen
						var loginError = 
						'<div class="errorContainer">'+
						'<p class="text-danger">User name or password was incorrect</p>'+
						'</div>';

						$('.loginForm').prepend(loginError);
					}
				},
			});



		}else{
			console.log('login was Invalid');
		}

	});


	// sign up 
	$('.signUpButton').click(function(){
		console.log('sign Up clicked');
		var signUpEmail = $('#signUpEmail').val();
		var signUpPassword1 = $('#signUpPassword1').val();
		var signUpPassword2 = $('#signUpPassword2').val();
		var loginValid = true;

		console.log(signUpEmail);
		console.log(signUpPassword1);
		console.log(signUpPassword2);

		/// Email validation 
		if (signUpEmail){
			$('.signUpFgEmail').addClass('has-success');
			$('.signUpFgEmail').removeClass('has-error');
		}else{
			loginValid = false;
			$('.signUpFgEmail').addClass('has-error');
			$('.signUpgEmail').removeClass('has-success')
		}
		///passowrd 1validation 
		if (signUpPassword1){
			
			$('.signUpFgPassword1').addClass('has-success');
			$('.signUpFgPassword1').removeClass('has-error');
		}else{
			loginValid = false;
			$('.signUpFgPassword1').addClass('has-error');
			$('.signUpFgPassword1').removeClass('has-success')
		}
		/// password2 validation 
		if (signUpPassword2){
			
			$('.signUpFgPassword2').addClass('has-success');
			$('.signUpFgPassword2').removeClass('has-error');
		}else{
			loginValid = false;
			$('.signUpFgPassword2').addClass('has-error');
			$('.signUpFgPassword2').removeClass('has-success')
		}

		if (signUpPassword1 != signUpPassword2){
			loginValid = false;
			// add error classes 
			$('.signUpFgPassword2').addClass('has-error');
			$('.signUpFgPassword2').removeClass('has-success')
			$('.signUpFgPassword1').addClass('has-error');
			$('.signUpFgPassword1').removeClass('has-success')
		}

		if (loginValid){
			console.log('ajaxing into logMeIn');

			// place text into new object
			var ajaxUrl = 'authentication/signUp';

			// building new ajax object
			var data = {
				'email': signUpEmail,
				'password': signUpPassword2
			};
		
			// save text to the server
			$.ajax({
				type: "POST",
				url: ajaxUrl,
				data: data,
				dataType: 'json',
				success: function(success){
					console.log(success);
					
					if (success.success){

						$('.dangerDiv').empty(); 
						// you created a new user
						// place text into new object
						var ajaxUrl = 'authentication/login';
						// save text to the server
						$.ajax({
							type: "POST",
							url: ajaxUrl,
							data: data,
							dataType: 'json',
							success: function(success){
								console.log(success);

								if (success.success){
									// you were logged in
									window.location.href = '/hyImageApp';
								}else{
									// you were not logged in
									// error message on the secreen
									var loginError = 
									'<p class="text-danger">User name or password was incorrect</p>';

									$('.loginForm').prepend(loginError);
								}
							},
						});/// end ajax call
					}else{
						// user name already exists
						$('.dangerDiv').empty();
						var loginError = 
						'<div class="dangerDiv">'+
						'<p class="text-danger">User Name Already Exists</p>'+
						'</div>';
						$('.signUpForm').prepend(loginError);
					}
				}

			});
		}else{
			console.log('form was not valid');
		}

	});
});