package com.hyImageApp

class CommentContainer{
	String user
	String comment

	static belongsTo = [imageContainer: ImageContainer]
}