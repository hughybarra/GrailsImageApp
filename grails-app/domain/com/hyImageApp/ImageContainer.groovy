package com.hyImageApp
// import grails.rest.*


// @Resource(uri='/gallery')
class ImageContainer {

	String user
	String url
	String title
	String caption
	Date date

	static hasMany = [comments: CommentContainer]


    static constraints = {
    }
}
