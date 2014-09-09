package com.hyImageApp

class Users {


	String email
	String password
	
    static constraints = {
    	email unique: true
    }
}
