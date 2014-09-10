package com.hyImageApp
// import grails.rest.*


// @Resource(uri='/gallery')
class ImageContainer {

	String user
	String url
	String title
	String caption

	static hasMany = [comments: CommentContainer]


    static constraints = {
    }
}
