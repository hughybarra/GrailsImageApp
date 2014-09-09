package com.hyImageApp
import grails.converters.JSON
import grails.transaction.Transactional
import java.security.MessageDigest

@Transactional
class LoginService {

	/*
	*Sign Up
	*Checks if user exists. Checks password Adds new User to the database
	*/
	def signUp(String email, String password){
		def emailValid = false
		def passwordValid = false
		def valid = false
		int pLength = password.length()

		if (pLength <= 3){
			passwordValid = false
		}else{
			passwordValid = true
		}

	    // check if the email exists in the database
	    def emailAuth = Users.findByEmail(email)

	    // check if data is null
	    if (emailAuth == null){
	    	emailValid = true
	    }else{
	    	emailValid = false
	    }

	    if (emailValid && passwordValid){
	    	// all of the data is valid
	    	valid = true

	    	// MD5 the password 
		    MessageDigest digest = MessageDigest.getInstance("MD5")
		    digest.update(password.bytes);
		    def md5Password = new BigInteger(1, digest.digest()).toString(16).padLeft(32, '0')

	    	// if the user does not exist savemd
	    	def newUser = new Users(password: md5Password, email: email)
	    	// save the new user
	    	newUser.save()

	    }else{
	    	// the submission was invalid
	    	valid = false
	    }

	    def success = [
	    	'success': valid,
	    	'email': emailValid,
	    	'password': passwordValid
	    ]

	    return success
	}
	/*
	*Checks if the user is logged in
	*/
	def checkLogin(String sessionVar){

		// declaring vars
		String success

		if (sessionVar == null){
			success ='false'
		}else{
			success = 'true'
		}

		def data = [
			'success': success
		]

		// render data as json
		return data
	}

	/*
	*Logs a user in
	*/
	def login(String email, String password){

		def valid = false
		def passwordValid = false
		def emailValid = false
		def success = false

		// check the database for the user email
		def userAuth = Users.findByEmail(email)

		// check if the user email exists
		if (userAuth == null){
			emailValid = false
		}else{
			emailValid = true
			// compare the md5 password with the database password
			MessageDigest digest = MessageDigest.getInstance("MD5")
		    digest.update(password.bytes);
		    def md5Password = new BigInteger(1, digest.digest()).toString(16).padLeft(32, '0')

		    //compar both passwords
		    if (md5Password == userAuth.password){
		    	passwordValid = true
		    }else{
		    	passwordValid = false
		    }
		}

		if(passwordValid && emailValid){
			valid = true
		}

		def data = [
			'success': valid,
			'email': emailValid,
			'password': passwordValid, 
		]

		// return data object to the controller
		return data
	}
}