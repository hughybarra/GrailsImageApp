package com.hyImageApp
import grails.converters.JSON
class GalleryController{

	def index(String id){
		def image = ImageContainer.get(id)
		[image: image]
	}
}