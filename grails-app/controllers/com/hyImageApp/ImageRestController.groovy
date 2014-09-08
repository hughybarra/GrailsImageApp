package com.hyImageApp
import grails.converters.JSON

class ImageRestController {

	def createImage(){

	}

	def getOne(){
		// def image = ImageContainer.get()
		// render params as JSON
	}

	def getAll(){
		def imageList = ImageContainer.getAll()
		render imageList as JSON
	}

	def deleteImage(){

		// grab item from the database with provided id
		def data = ImageContainer.get(params['dataId'])
		def response = []

		if (data == null){

			response = [
			'success': 'fail',
			'message': 'data for id was null'
			]

		}else{
			// delete the record 
			data.delete()

			response = [
				'success': 'success',
				'message': 'image remved successfully',
				'data': data
			]
		}

		render response as JSON


	}

	def updateImages(){

	}
}