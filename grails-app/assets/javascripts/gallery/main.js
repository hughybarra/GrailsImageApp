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
	*Builds the comments on the page 
	*/
	var buildComments = function(comments){

		var commentPanel = $('.commentsPanel');
		commentPanel.empty();


		// console.log(comments);
		for(var x = 0; x < comments.length; x ++){
			console.log(comments[x]);
			var commentDiv = 
				'<div class="userComment panel panel-default">'+
				 	'<div class="panel-body">'+
				    	'<span>'+comments[x].user+'</span><p>'+comments[x].comment+'</p>'+
				  	'</div>'+
				'</div>';

			commentPanel.prepend(commentDiv);
		}
	};

	/*
	*Get Comments
	*/
	var getComments = function (){
		// ajax url
		var ajaxUrl = 'http://localhost:8080/hyImageApp/commentRest/getComments'
		var imageId = $('.feature_image').attr('id');

		var data = {
			'id': imageId
		};
		// grab all comments
		$.ajax({
			type: "GET",
			url: ajaxUrl,
			dataType: 'json',
			data: data,
			success: function(success){
				// console.log(success[0][0]);
				// if data exists in comments
				if (success){
					// user is logged in
					// do some stuff here
					buildComments(success);
				}else{
					// some error if comments did not work
				}
			},
		})
	}

	/*
	*Comment Submit
	*/
	$('#commentSubmit').click(function(e){
		console.log('comment submit');

		// declaring vars 
		var comment = $('#formComment').val();
		// grab the id of the image
		var imageId = $('.feature_image').attr('id');

		if (comment){
			// submit the comment to the db
			var ajaxUrl = 'http://localhost:8080/hyImageApp/commentRest/createComment';

			// build data object
			var data = {
				'comment': comment,
				'id': imageId
			};

			// clear the form 
			$('#formComment').val('');

			// get all image assets from the server
			$.ajax({
				type: "POST",
				url: ajaxUrl,
				dataType: 'json',
				data: data,
				success: function(success){
					console.log(success);
					if (success.success == true){
						// reset the form

						// reload the get comments function
						getComments();

					}else{
						// user is not logged in

						// redirect to the main page
						// window.location.href = '/hyImageApp/login';
					}
				},
			})
		}else{
			// enter a message into the comment
		}
		e.preventDefault();
		e.stopPropagation();
	});


	// run check login function
	getComments();

});