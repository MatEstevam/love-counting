import { Application } from "@hotwired/stimulus"
import CarouselController from "./controllers/carousel_controller"
import ContadorController from "./controllers/contador_controller"


const application = Application.start()
application.register("carousel", CarouselController)
application.register("contador", ContadorController)
