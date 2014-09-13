package com.hyImageApp
import grails.transaction.Transactional

@Transactional
class CommentRestService{

	def createComment(int id, String email, String comment){

		def idValid = false
		def emailValid = false
		def commentValid = false
		def valid = false
		def date = new Date()



		if (id == null){
			idValid = false
		}else{
			idValid = true
		}

		if(emailValid == null){
			emailValid = false
		}else{
			emailValid = true
		}

		if (commentValid == null){
			commentValid = false
		}else{
			commentValid = true
		}

		if (idValid && emailValid && commentValid){
			valid = true
		}


		if(valid){
			// create new comment object
			def newComment = new CommentContainer(user: email, comment: comment, date: date)
			// grab image based on id
			def image = ImageContainer.get(id)
			// add comment to the image
			image.addToComments(newComment)
			// update the image
			image.save()

			valid = true
		}

		def data = [
			success: valid
		]

		return data

	}

	def getComments(int id){
		def data = []
		def response = []


        def image = ImageContainer.list(sort:'_id', order: 'desc')
		// grab comment by image id
		// def image = ImageContainer.get(id)
		// loop over all of the comments 
		for (comment in image.comments){

			data.push(comment)
		}
		return  image.comments
	}

	def deleteComment(int id){

	}
}