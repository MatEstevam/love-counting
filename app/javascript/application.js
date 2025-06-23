import { Application } from "@hotwired/stimulus"
import CarouselController from "./controllers/carousel_controller"
import ContadorController from "./controllers/contador_controller"
import FraseController from "./controllers/frase_controller"


const application = Application.start()
application.register("carousel", CarouselController)
application.register("contador", ContadorController)
application.register("frase", FraseController)
