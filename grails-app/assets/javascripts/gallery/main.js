/*
 ██████╗  █████╗ ██╗     ██╗     ███████╗██████╗ ██╗   ██╗
██╔════╝ ██╔══██╗██║     ██║     ██╔════╝██╔══██╗╚██╗ ██╔╝
██║  ███╗███████║██║     ██║     █████╗  ██████╔╝ ╚████╔╝ 
██║   ██║██╔══██║██║     ██║     ██╔══╝  ██╔══██╗  ╚██╔╝  
╚██████╔╝██║  ██║███████╗███████╗███████╗██║  ██║   ██║   
 ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   
                                                          
                                       
                                        
@author hugh Ybarra
@contact hugh.ybarra@gmail.com                                                                   
*/
// anon function
$(function(){
	/*
	*Check Login 
	*Function checksif the user is logged in
	*/
	var checkLogin = function(){
		var ajaxUrl = '/hyImageApp/login/checkLogin';

		// get all image assets from the server
		$.ajax({
			type: "GET",
			url: ajaxUrl,
			dataType: 'json',
			success: function(success){

				if (success.success == 'true'){
					// user is logged in
					// do some stuff here
					$('.mainContainer').removeClass('hideContainer');
				}else{
					// user is not logged in

					// redirect to the main page
					window.location.href = '/hyImageApp/login';
				}
			},
		})
	}// end check login function

	/*
	*Comment Submit
	*/
	$('#commentSubmit').click(function(e){
		console.log('comment submit');

		// declaring vars 
		var comment = $('.formComment').val();

		if (comment){
			// submit the comment to the db
		}else{
			// enter a message into the comment
		}


		e.preventDefault();
		e.stopPropagation();
	});


	// run check login function
	checkLogin();
});