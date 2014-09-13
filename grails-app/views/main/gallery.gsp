<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">

		<!-- main.css -->
		<asset:stylesheet src="gallery/main.css"/>
	</head>
	<body>


		<div class="mainContainer hideContainer">

			<div class="panel panel-default col-lg-6 col-lg-offset-2 ">
				<div class="col-lg-12 feature_title">
					<h3>${image.title}</h3>
				</div>
				
				<img src="${image.url}" class="col-lg-12 img-thumbnail feature_image" id="${image.id}">

				<div class="col-lg-6 feature_about">
					<p>${image.caption}</p>
				</div>

			</div>

			<div class="panel-default panel col-lg-6 col-lg-offset-2">



				<form roll="form" class="col-lg-12 form-inli">

					<div class="form-group col-lg-10">
						<input id="formComment" type="text" class="form-control" max-length="140" placeholder="Enter new Comment" class="col-lg-6">
						
					</div>
					<div class="form-group col-lg-2">
						<div class="btn btn-default form-control col-lg-3" id="commentSubmit">Submit</div>
					</div>
				</form>


			</div>

			<div class="panel panel-default col-lg-6 col-lg-offset-2 commentsPanel">

				<div class="panel panel-default">
				 	<div class="panel-body">
				    	<span>user</span><p>Basic panel example</p>
				  	</div>
				</div>
				

			</div>

		</div>

		<!-- main.js -->
		<asset:javascript src="gallery/main.js"/>

	</body>
</html>