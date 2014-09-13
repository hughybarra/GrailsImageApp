package com.hyImageApp
import grails.converters.JSON

class ImageRestController {


	//defining service
	def ImageRestService

	/*
	*Create image
	*Calls Image Rest service to create a new image
	*/
	def createImage(){
		// create new date 
		def dateNow = new Date()

		def success = imageRestService.createImage( session['userEmail'], params['url'], params['title'], params['caption'], dateNow )

		render success as JSON
	}

	/*
	*Get all 
	*Grabs all imags from the Image Container instance 
	*/
	def getAll(){
		// def results = Book.list(max: 10, offset: 100, sort: "title", order: "desc")
		def imageList = ImageContainer.list(sort:'date', order: 'desc')
		// def imageList = ImageContainer.getAll()
		render imageList as JSON
	}

	/*
	*Delet Image 
	* Calls Image rest service to delete image
	*/
	def deleteImage(){

		def success = imageRestService.deleteImage(params['dataId'].toInteger())
		
		render success as JSON

	}
}