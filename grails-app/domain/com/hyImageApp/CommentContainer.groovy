package com.hyImageApp

class CommentContainer{
	String user
	String comment
	String date

	static belongsTo = [imageContainer: ImageContainer]
}