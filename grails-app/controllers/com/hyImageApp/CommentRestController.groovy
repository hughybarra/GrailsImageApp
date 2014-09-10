package com.hyImageApp

import grails.converters.JSON

class CommentRestController {

	def CommentRestService

	def getComments(){

		def success = commentRestService.getComments(params['id'].toInteger())

		render success as JSON

	}

	def createComment(){
		// session['userId'] = 'test'
		def success = commentRestService.createComment(params['id'].toInteger(), session['userEmail'].toString() , params['comment'].toString())
		// render success to screen
		render success as JSON
	}

	def deleteComment(){

	}

}