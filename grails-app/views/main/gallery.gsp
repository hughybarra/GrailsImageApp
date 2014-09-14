<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">

		<!-- main.css -->
		<asset:stylesheet src="gallery/main.css"/>
	</head>
	<body>


		<div class="mainContainer hideContainer col-md-6 col-lg-12">

			<div class="titleContainer panel panel-default col-lg-6 col-lg-offset-2 
														   col-md- col-md-offset-">
				<div class="feature_title col-lg-12">

					<h3>${image.title}</h3>

				</div>
				
				<img src="${image.url}" id="${image.id}" class="img-responsive img-thumbnail feature_image col-lg-12 
																										   col-xs-12" >

				<div class="feature_about col-lg-6">
										  
					<p>${image.caption}</p>
				</div>

			</div>

			<div class="inputPanel panel-default panel col-lg-6 col-lg-offset-2
													   col-xs-">



				<form roll="form" class=" form-inli col-lg-12">

					<div class="form-group col-lg-10 ">
						<input id="formComment" type="text" class="form-control" max-length="140" placeholder="Enter new Comment" class="col-lg-6">
						
					</div>
					<div class="form-group col-lg-2">
						<div class="btn btn-default form-control col-lg-3" id="commentSubmit">Submit</div>
					</div>
				</form>


			</div>

			<div class="panel panel-default col-lg-6 col-lg-offset-2 commentsPanel">

			</div>

		</div>

		<!-- main.js -->
		<asset:javascript src="gallery/main.js"/>

	</body>
</html>