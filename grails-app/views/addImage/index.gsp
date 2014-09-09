<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">

		<!-- main.css -->
		<asset:stylesheet src="addImage/main.css"/>
	</head>
	<body>


		<div class="mainContainer hideContainer">
			<!-- Add New ImageForm -->
			<div class="col-lg-3 formContainer">
				<form rol="form" class="">

					<div class="form-group titleDiv col-lg-12">
						<label for="hyFormTitle">Image Title</lebel>
						<input type="text" id="hyFormTitle" class="form-control input-lg col-lg-12" placeholder="title">
					</div>

					<div class="form-group urlDiv col-lg-12">
						<label for="hyFormURL"><span class="glyphicon glyphicon-picture"></span> Enter a URL</label>
						<input type="url" placeholder="http://www.yoururl.com" id="hyFormURL" class="form-control input-lg">
					</div>

					<div class="form-group captionDiv col-lg-12">
						<label for="hyFormCaption">Image Caption</label>
						<textarea id="hyFormCaption" class="form-control input-lg" placeholder="caption about the image"></textarea>
					</div>
					<div class="col-lg-12 text-right">
						<div type="submit" class="btn btn-default" id="submitImage">Add Image</div>
					</div>

				</form>
			</div>

			<!-- Display Content div -->
			<div class="col-lg-5 col-lg-offset-1 newImageContainer">

				<div class="panel panel-default">

					<div class="panel panel-heading">
						<h3 class="panelTitleText">Form Title</h3>
					</div>

					<div class="panel-body">

						<img src="http://www.hdwallpapers8.com/wp-content/uploads/2014/02/WaterFall-HD-Wallpapers-Background.jpg" class="new_image img-thumbnail img-responsive col-lg-12">


						
						<p class="panelCaptionText">Image Caption</p>
					</div>


				</div>

			</div>
		</div>


		<g:applyLayout name="footer" />
		<!-- main.js -->
		<asset:javascript src="addImage/main.js"/>

	</body>
</html>