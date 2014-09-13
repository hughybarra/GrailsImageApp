<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">

		<!-- main.css -->
		<asset:stylesheet src="addImage/main.css"/>
	</head>
	<body>

		<!-- MAIN CONTAINER -->
		<div class="mainContainer">


			
			<div class="formsContainer">


				<div class="formsToggle col-lg-3">
					<button id="fileFormToggle" type="button" class="btn btn-primary btn-lg col-lg-12 text-left formToggleButton">
						<span class="glyphicon glyphicon-link"></span> Browse Your Computer
					</button>
					<button id="urlFormToggle" type="button" class="btn btn-primary btn-lg col-lg-12 text-left formToggleButton">
						<span class="glyphicon glyphicon-globe"></span> Enter Image Url
					</button>
				</div>

				<!-- UPLOAD IMAGE FORM -->
				<div class="col-lg-3">






%{-- 					<g:form class="hideForm" role="form" id="UIForm" name="ImageUploadForm" url="[controller:'imageRest',action:'testing']">

						<!-- upload title -->
						<div class="form-group UITitleDiv col-lg-12">
							<label for="UITitle">Image Title</label>
							<input type="text" id="UITitle" placeholder="title" class="form-control input-lg col-lg-12" name="UItitle">
						</div>

						<!-- upload file -->
						<div class="form-group UIFileDiv col-lg-12">
							<label for="UIFile"><span class="glyphicon glyphicon-picture"></span> Pick a File</label>
							<input type="file" id="UIFile" class="input-lg col-lg-12" name="UIFile">
						</div>
						<!-- upload caption -->
						<div class="form-group UICaptionDiv col-lg-12">
							<label for="UICaption">Caption</label>
							<textarea  id="UICaption" class="form-control input-lg" placeholder="Caption about the image" name="UICaption"></textarea>
						</div>

						<div class="col-lg-12 text-right">
							<input type="submit" class="btn btn-success" id="submitFile" value="Add Image"/>	
						</div>

					</g:form> --}%
					<!-- UPLOAD IMAGE FORM -->








				
					<!-- URL FORM -->
					<form id="urlForm" role="form" class="form-horizontal hideForm">

						<div class="form-group titleDiv col-lg-12">
							<label for="hyFormTitle">Image Title</label>
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
							<div type="submit" class="btn btn-success" id="submitUrlForm">Add Image</div>
						</div>

					</form>
					<!-- END URL FORM -->
				</div>
				

			</div>
			<!-- END FORMS CONTAINER -->
			

			<!-- Display Content div -->
			<div class="col-lg-5 col-lg-offset-1 newImageContainer">

				<div class="panel panel-default">

					<div class="panel panel-heading">
						<h3 class="panelTitleText">Form Title</h3>
					</div>

					<div class="panel-body">

						<img src="http://www.hdwallpapers8.com/wp-content/uploads/2014/02/WaterFall-HD-Wallpapers-Background.jpg" class="new_image img-thumbnail img-responsive col-lg-12" id="imagePreview">

						<p class="panelCaptionText">Image Caption</p>
					</div>


				</div>

			</div>
			<!-- END DISPLAY CONTENT DIV -->

		</div>
		<!-- END MAIN CONTAINER -->

		<!-- main.js -->
		<asset:javascript src="addImage/main.js"/>

	</body>
</html>