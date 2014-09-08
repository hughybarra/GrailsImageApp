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

			// append the iamges to the div
			$('.imageDiv').append(imageContainer);

		}

		var imageError = function(data){
			console.log('======');
			console.log(data);
			console.log('bad iamge');
			console.log('======');
		}

		var imageExists;
		for(var x = 0; x < images.length; x ++ ){

			checkImage(images[x], function(exists, data){

				if (exists){
					imageLoad(data);
				}else{
					console.log('does not exist');
				}
			});

		}

	}// end render image function
});