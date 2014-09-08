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
            controller = 'gallery'
            action = 'index'
        }

        
        "500"(view:'/error')
	}
}
