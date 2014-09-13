class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        // main langind page
        "/"(controller: 'main')

        // In UrlMappings.groovy
        "/gallery/$id" {
            controller = 'main'
            action = 'gallery'
        }

        '/login'{
            controller = 'main'
            action = 'login'
        }
        '/addImage'{
            controller = 'main'
            action = 'addImage'
        }
        '/admin'{
            controller = 'main'
            action = 'admin'
        }
        '/testing'{
            controller = 'main'
            action = 'testing'
        }
        
        "500"(view:'/error')
	}
}
