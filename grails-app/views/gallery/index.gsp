<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">

		<!-- main.css -->
		<asset:stylesheet src="gallery/main.css"/>
	</head>
	<body>

		<div class="panel panel-default col-lg-6 col-lg-offset-2 ">
			<div class="col-lg-12 feature_title">
				<h3>${image.title}</h3>
			</div>
			
			<img src="${image.url}" class="col-lg-12 img-thumbnail feature_image">

			<div class="col-lg-6 feature_about">
				<p>${image.caption}</p>
			</div>

		</div>

		<div class="panel-default panel col-lg-6 col-lg-offset-2">
			<form rol="form">
				<input type="text" class="form-control" max-length="140" placeholder="Enter new Comment">
				<div class="btn btn-default form-control">Submit</div>
			</form>
			<div class="well well-sm">
				<p>number of comments: {{numComments}} </p>
			</div>
		</div>

		<div class="panel panel-default col-lg-6 col-lg-offset-2">

			<span class="col-lg-3">{{data.author}}</span><span>{{data.date}}</span>
			<div class="panel-body">
				<p>{{data.newComment}}</p>
			</div>
		</div>







		<g:applyLayout name="footer" />
		<!-- main.js -->
		<asset:javascript src="gallery/main.js"/>

	</body>
</html>