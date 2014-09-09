package com.hyImageApp
import grails.converters.JSON
import java.security.MessageDigest

class LoginController{
	def index(){

	}

	def logout(){
		// Kill the current session
		session.invalidate()
		// redirect to landing page
		redirect(controller: 'main')
	}

	def attemptLogin(){

		def response = []
		def valid = true
		def passwordValid = true
		def emailValid = true
		def success = true
		// check the database for user email
		def userAuth = Users.findByEmail(params['email'])

		// check is user email exists
		if (userAuth == null){
			valid = false
			emailValid = false
			passwordValid = false

		}else{	

			emailValid = true
			// compare the md5 password witht he database pasword
			//md5 the password 
			MessageDigest digest = MessageDigest.getInstance("MD5")
		    digest.update(params['password'].bytes);
		    def md5Password = new BigInteger(1, digest.digest()).toString(16).padLeft(32, '0')

		    if (md5Password == userAuth.password){
		    	passwordValid = true
		    }else{
		    	passwordValid = false
		    	valid = false
		    }
		}

		if (valid){
			// starta  new session
			// def email = [email: params['email']]
			def loggedIn = [loggedIn: '1']

	    	session["userEmail"] = params['email']
	    	session['loggedIn'] = loggedIn
		}

		def data = [
			'success': valid,
			'email': emailValid,
			'password': passwordValid
		]


		render data as JSON
		// render params as JSON
	}

	def attemptSignUp(){

		def emailValid = true
		def valid = true

		// MD5 the password 
	    MessageDigest digest = MessageDigest.getInstance("MD5")
	    digest.update(params['password'].bytes);
	    def md5Password = new BigInteger(1, digest.digest()).toString(16).padLeft(32, '0')


	    // check if the email exists in the database
	    def emailAuth = Users.findByEmail(params['email'])

	    // checking if the data is null
	    if (emailAuth == null){
			// if the user does not exist save
			def newUser = new Users(password: md5Password, email: params['email'])
			newUser.save()
	    }else{
	    	// user does exist
	    	emailValid = false
	    	// the submission was invalid
	    	valid = false
	    }


		def data = [
			'success': valid,
			'emailValid': emailValid
		]

		render  data as JSON
	}

	def checkLogin(){

		def data = [
			'loggedIn': session['loggedIn'],
			'email': session['email']
		]

		render data as JSON
	}
}
