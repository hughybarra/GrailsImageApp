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

}
