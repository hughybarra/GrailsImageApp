/*
 █████╗ ██████╗ ██████╗     ██╗███╗   ███╗ █████╗  ██████╗ ███████╗
██╔══██╗██╔══██╗██╔══██╗    ██║████╗ ████║██╔══██╗██╔════╝ ██╔════╝
███████║██║  ██║██║  ██║    ██║██╔████╔██║███████║██║  ███╗█████╗  
██╔══██║██║  ██║██║  ██║    ██║██║╚██╔╝██║██╔══██║██║   ██║██╔══╝  
██║  ██║██████╔╝██████╔╝    ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗
╚═╝  ╚═╝╚═════╝ ╚═════╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
@author hugh Ybarra
@contact hugh.ybarra@gmail.com                                                                   
*/
// anon function
$(function() {

	/*
	*This function checks the url provided to see if an image actually exists
	*/
	var checkImage = function(url, callback){
		// The "callback" argument is called with either true or false
		// depending on whether the image at "url" exists or not.
		var img = new Image();
		img.onload = function() { callback(true); };
		img.onerror = function() { callback(false); };
		img.src = url;

	};

	/*
	* URL INPUT
	* Keyup Change Funtion
	* Checks the image url for valid image
	* changes the image once a user has input a valid url
	*/
	$('#hyFormURL').keyup(function(){
		checkImage( $('#hyFormURL').val(), function(exists){
			if (exists){
				// remove spinner
				$('.new_image').attr('src', $('#hyFormURL').val());
				$('.urlDiv').addClass('has-success');
				$('.urlDiv').removeClass('has-error');
			}else{
				$('.urlDiv').addClass('has-error');
				$('.urlDiv').removeClass('has-success');
			}			
		});// end exists function
	});

	
	/*
	* URL INPUT
	* Change Function
	* Waits for change in url input. Checks to see if theimag is loaded or not. If the image path exists
	* it shows that iamge. If it does not exist it adds an error class to the input field
	*/
	$('#hyFormURL').change(function(){
		checkImage($('#hyFormURL').val(), function(exists){
			if (exists){
				$('.new_image').attr('src', $('#hyFormURL').val());
				$('.urlDiv').addClass('has-success');
				$('.urlDiv').removeClass('has-error');
			}else{
				$('.new_image').attr('src', 'http://www.hdwallpapers8.com/wp-content/uploads/2014/02/WaterFall-HD-Wallpapers-Background.jpg');
				$('.urlDiv').addClass('has-error');
				$('.urlDiv').removeClass('has-success');
			}
		});
	});

	/*
	*TITLE INPUT 
	*runs on key up and changes the title of the card
	*/
	$('#hyFormTitle').keyup(function(){
		var newData = $('#hyFormTitle').val();
		$('.panelTitleText').text(newData);
	});

	/* 
	* CAPTION INPUT 
	* runs on key up and changes the caption p tag
	*/
	$('#hyFormCaption').keyup(function(){
		var newData = $('#hyFormCaption').val();
		$('.panelCaptionText').text(newData);
	});	
	

	/*
	   _____       _               _ _   
	  / ____|     | |             (_) |  
	 | (___  _   _| |__  _ __ ___  _| |_ 
	  \___ \| | | | '_ \| '_ ` _ \| | __|
	  ____) | |_| | |_) | | | | | | | |_ 
	 |_____/ \__,_|_.__/|_| |_| |_|_|\__|

	*/
	$('#submitImage').click(function(e){
		console.log('submitclicked');

		// declaring vars

		var title 		= $('#hyFormTitle').val();
		var caption 	= $('#hyFormCaption').val();
		var url 		= $('#hyFormURL').val();
		var valid 		= true;
		var errorClass 	= 'has-error';
		var validClass 	= 'has-success';


		// check the url first! Make sure the url is proper 
		if(!url){
			valid = false;
			// error class;
			$('.urlDiv').addClass(errorClass);

		}else{
			// check if the image url exists
			checkImage(url, function(exists){
				if (!exists){
					valid = false
					// error class
					$('.urlDiv').addClass(errorClass);
					$('.urlDiv').removeClass(validClass);
				}else{
					valid = true
					// remove error class
					$('.urlDiv').addClass(validClass);
					$('.urlDiv').removeClass(errorClass);
					
				}
			});
		}// end check url if


		// check if fields contain text
		if (!title){
			valid = false;
			// error class
			$('.titleDiv').addClass(errorClass);
		}else{
			// remove error class
			$('.titleDiv').addClass(validClass);

		}

		if (!caption){
			valid = false;
			// error class
			$('.captionDiv').addClass(errorClass);
			$('.captionDiv').removeClass(validClass);
		}else{
			// remove error class
			$('.captionDiv').addClass(validClass);
			$('.captionDiv').removeClass(errorClass);
		}

		// check if the form is valid 
		// ajax to server
		if (valid){
			// place text into new object
			var ajaxUrl = 'addImage/update';
			// var ajaxUrl = 'testing/update'

			// building new ajax object
			var data = {
				'url': url,
				'caption': caption,
				'title': title
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

			// clear the form 

			// fade out main content
			// fade in success spinner

			// redirect to the landing page
			window.location.href = "/hyImageApp";
			// window.location = '/';/
		}
		//prevent default behavior
		e.preventDefault();
		e.stopPropagation();


	})// end new image submit function

});