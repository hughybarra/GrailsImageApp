package com.hyImageApp
import grails.converters.JSON
class MainController {

	/*
	*Main Landing Page of the Application
	*/
    def index() { 
    	def idle = [idle: 'true']
    	session['idle'] = idle
    }

    def gallery(String id){
    	def image = ImageContainer.get(id)
		// [image: image]
		render(view:'gallery', model: [image:image])
    }

    def login(){}

    def addImage(){}

    def admin(){}

}
