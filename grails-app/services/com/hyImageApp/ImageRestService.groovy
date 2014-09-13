package com.hyImageApp

import grails.transaction.Transactional

@Transactional
class ImageRestService {

	/*
	*Creates a new Image in the database
	*/
    def createImage(String email, String url, String title, String caption, Date date){

        //declaring vars
        def valid = false
        def emailValid = false
        def urlValid = false
        def titleValid = false
        def captionValid = false

        // simple data validation

        if (email == null){
            emailValid = false
        }else{
            emailValid = true
        }

        if(url == null){
            urlValid = false
        }else{
            urlValid = true
        }

        if(title == null){
            titleValid = false
        }else{
            titleValid = true
        }

        if (caption == null){
            captionValid = false
        }else{
            captionValid = true
        }

        // check if all fields are true
        if (emailValid && urlValid && titleValid && captionValid){
            valid = true
        }else{
            valid = false
        }

        if (valid){
            // convert all strings to lower case except url becuase that breaks urls lol dumbass
            // WOOOW this caued me so many issues. 
            caption = caption.toLowerCase()
            title = title.toLowerCase()
            email = email.toLowerCase()

            //create new Image 

            def newImage = new ImageContainer()
            newImage.url = url
            newImage.caption = caption
            newImage.title = title
            newImage.user = email
            newImage.date = date

            // save the new image
            newImage.save()
        }

        def data = [
            'success': valid
        ]

        return data

    }


    /*
    *Updates a image based off of id
    */
    def updateImage(){

    }

    /*
    *Deletes a specific image based off of id.
    */
    def deleteImage(int id){


        // grab item from the database
        def badImage = ImageContainer.get(id)
        def success = false
        def data = []

        if(badImage == null){
            success = 'false'
        }else{
            success = 'true'
        }

        if (success){
            badImage.delete()
        }

        data = [
            'success': success
        ]

        return data
    }

}
