import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    console.log("CarouselController connected");
    this.index = 0
    this.showSlide(this.index)
  }

  showSlide(index) {
    const slides = this.containerTarget.children
    if (index < 0) this.index = slides.length - 1
    else if (index >= slides.length) this.index = 0
    else this.index = index

    const offset = -this.index * 100
    this.containerTarget.style.transform = `translateX(${offset}%)`
  }

  next() {
    this.showSlide(this.index + 1)
  }

  prev() {
    this.showSlide(this.index - 1)
  }
}
