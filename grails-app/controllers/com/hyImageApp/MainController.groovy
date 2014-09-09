package com.hyImageApp
import grails.converters.JSON
class MainController {

    def index() { 
    	def idle = [idle: 'true']
    	session['idle'] = idle
    }

}
