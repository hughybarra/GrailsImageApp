/*
 █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║
███████║██║  ██║██╔████╔██║██║██╔██╗ ██║
██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║
██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║
╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝
                                        
@author hugh Ybarra
@contact hugh.ybarra@gmail.com                                                                   
*/
// anon function
$(function() {
	var ajaxUrl = 'imageRest/getAll';

	// get all image assets from the server
	$.ajax({
		type: "GET",
		url: ajaxUrl,
		dataType: 'json',
		success: function(success){
			renderImages(success);
		},
	});

	/* 
	*Builds the images to display on the page
	*/
	var buildImages = function(data){

		
		var imageData = 			
			'<div class="dataDiv panel panel-default col-lg-12">'+
				'<div class="imageDiv row col-lg-6">'+
					'<img src="'+data.url+'" class="img-responsive">'+
				'</div>'+
				'<div class="row col-lg-3">'+
					'<div class="deleteButton btn btn-danger" id="'+data.id+'">Delete Image</div>'+
				'</div>	'+			
			'</div>';


		// apend each div to the image container
		$('.mainContianer').append(imageData);

		// add the click events for these divs
			/* 
		* Delete Image Click Function
		*/
		$('#'+data.id).click(function(e){
		
			console.log(e.currentTarget.id);

			var ajaxUrl = 'imageRest/deleteImage'

			var data ={
				'dataId': e.currentTarget.id.toString()
			};

			$.ajax({
				// WOULD HAVE used DELETE but I could not figure out why i was getting forbidden message 
				// I tried setting the gails allowed method variables but I was still getting a forbidden message
				type: "POST", 
				url: ajaxUrl,
				data: data,
				dataType: 'json',
				success: function(success){
					console.log(success);
				}

			});

			// reload the window when done with update
			location.reload();
			//prevent default behavior
			e.preventDefault();
			e.stopPropagation();
		});

	};

	/*
	*Loops over all of the images and renders them on the page
	*/
	var renderImages = function(images){

		for (var x = 0; x < images.length; x++){
			buildImages(images[x]);
		}; 

	};






});