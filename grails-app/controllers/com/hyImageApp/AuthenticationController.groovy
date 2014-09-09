package com.hyImageApp
import grails.converters.JSON
import java.security.MessageDigest

class AuthenticationController{

	//defining service
	def LoginService

	/*
	*Check login checks the session var for logged in status
	*/
	def checkLogin(){

		def success = loginService.checkLogin(session['loggedIn'])
		// render response as json
		render success as JSON

	}
	def login(){

		def success = loginService.login(params['email'], params['password'])
		// create new session variables
		if (success['success'] == true){
			session['userEmail'] = params['email']
			// logged in is turned on
			session['loggedIn'] = 1
		}
		// return success
		render success as JSON

	}

	def logout(){
		// Kill the current session
		session.invalidate()
		// redirect to landing page
		redirect(controller: 'main')
	}

	/*
	*Sign UP function validates and creates a new user in the database
	*/
	def signUp(){
		
		def success = loginService.signUp(params['email'], params['password'])
		// return success
		render success as JSON
	}

}