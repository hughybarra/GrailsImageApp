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
			var ajaxUrl = 'login/attemptLogin';
			// var ajaxUrl = 'testing/update'

			// building new ajax object
			var data = {
				'email': loginEmail,
				'password': loginPassword
			};
			
			console.log(data);
			// save text to the server
			$.ajax({
				type: "POST",
				url: ajaxUrl,
				data: data,
				dataType: 'json',
				success: function(success){
					console.log(success);
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

		console.log(signUpEmail);
		console.log(signUpPassword1);
		console.log(signUpPassword2);

		/// Email validation 
		if (signUpEmail){
			loginValid = false;
			$('.signUpFgEmail').addClass('has-success');
			$('.signUpFgEmail').removeClass('has-success');
		}else{
			$('.signUpFgEmail').addClass('has-error');
			$('.signUpgEmail').removeClass('has-success')
		}
		///passowrd 1validation 
		if (signUpPassword1){
			loginValid = false;
			$('.signUpFgPassword1').addClass('has-success');
			$('.signUpFgPassword1').removeClass('has-success');
		}else{
			$('.signUpFgPassword1').addClass('has-error');
			$('.signUpFgPassword1').removeClass('has-success')
		}
		/// password2 validation 
		if (signUpPassword2){
			loginValid = false;
			$('.signUpFgPassword2').addClass('has-success');
			$('.signUpFgPassword2').removeClass('has-success');
		}else{
			$('.signUpFgPassword2').addClass('has-error');
			$('.signUpFgPassword2').removeClass('has-success')
		}



	})
});