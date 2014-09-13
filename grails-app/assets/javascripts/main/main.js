/*
███╗   ███╗ █████╗ ██╗███╗   ██╗
████╗ ████║██╔══██╗██║████╗  ██║
██╔████╔██║███████║██║██╔██╗ ██║
██║╚██╔╝██║██╔══██║██║██║╚██╗██║
██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
                                
@author hugh Ybarra
@contact hugh.ybarra@gmail.com                                                                   
*/
// anon function
$(function(){
	var ajaxUrl = 'imageRest/getAll';

	// get all image assets from the server
	$.ajax({
		type: "GET",
		url: ajaxUrl,
		dataType: 'json',
		success: function(success){
			console.log(success);
			renderImages(success);
		},
	})

	var renderImages = function(images){

		var imageArray = [];	

		var checkImage = function(data, callback){
			// The "callback" argument is called with either true or false
			// depending on whether the image at "url" exists or not.
			var img = new Image();
			img.onload = function() { 
				callback(true, data);
				test = true
				return test 
			};
			img.onerror = function() { 
				callback(false, data); 
			};

			img.src = data.url;
		};

		var imageLoad = function(data){
			var linkUrl = 'gallery/';
			var imageContainer = 
				'<div class="imageContainer col-lg-2 img-thumbnail">'+
					'<a href="'+linkUrl+data.id+'"><img src="'+data.url+'" class="img-responsive "></a>'+
				'</div>'
				;
			
			$('.imageDiv').append(imageContainer);

		}

		var imageError = function(data){
			// the image would not load so delete the image from the database
		}

		/*
		*Loop over all of the images
		*Load every image
		*Create HTML img tag for each image
		*Push each tag into an array 
		*/
		for(var x = 0; x < images.length; x ++ ){

			var check = checkImage(images[x], function(exists, data){

				if (exists){
					imageArray.push(imageLoad(data));
				}else{
					console.log('does not exist');
				}

				// some how pass array out 
				// promise reolve here
			});
		};

	};// end render image function
});