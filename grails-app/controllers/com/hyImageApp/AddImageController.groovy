package com.hyImageApp
import grails.converters.JSON

class AddImageController {

	def index(){
		
	}

	def update(){

		// declaring vars
		def valid = true
		def response = []
		def user = 'System Admin'
		def url = params['url']
		def title = params['title']
		def caption = params['caption']

		/*
		*This is just a simple check to make sure that the data is not null
		* There are much better forms such as regex that could be used 
		* for proof of concept and considering i'm the only user I will keep it simple for now.
		*/

		// validation 
		
		// check if user is null 
		if(user == null){
			valid = false
		}
		// check if url is null
		if(url == null){
			valid = false
		}
		// check if title is null 
		if(title == null){
			valid = false
		}
		// check it caption is null
		if (caption == null){
			valid = false
		}


		if(!valid){
			response = [
			'success': 'fail',
			'url': url,
			'title': title,
			'caption': caption
			]

		}else{

			// prep data for db
			url = url.toLowerCase()
			caption = caption.toLowerCase()
			title = title.toLowerCase()
			user = user.toLowerCase()

			// creeate new Image Instance 
			def newImage = new ImageContainer()
			newImage.url = url
			newImage.caption = caption
			newImage.title = title
			newImage.user = user

			// save the instance to MongoDB
			newImage.save()

			// create response object
			response = ['success': 'success']
		}// end else

		// output response to javascript 
		// rende json object to the view 
		render response as JSON
	}

}