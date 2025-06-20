import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    this.slideIndex = 1
    this.totalSlides = this.containerTarget.children.length

    this.goToSlide(this.slideIndex, false)

    this.isDragging = false
    this.startX = 0
    this.currentX = 0

    // Touch
    this.containerTarget.addEventListener("touchstart", this.startDrag.bind(this), { passive: true })
    this.containerTarget.addEventListener("touchmove", this.onDrag.bind(this), { passive: false })
    this.containerTarget.addEventListener("touchend", this.endDrag.bind(this))

    // Mouse
    this.containerTarget.addEventListener("mousedown", this.startDrag.bind(this))
    this.containerTarget.addEventListener("mousemove", this.onDrag.bind(this))
    this.containerTarget.addEventListener("mouseup", this.endDrag.bind(this))
    this.containerTarget.addEventListener("mouseleave", this.endDrag.bind(this))
  }

  goToSlide(index, animated = true) {
    const offset = -(index * 100)
    this.containerTarget.style.transition = animated ? "transform 0.4s ease-in-out" : "none"
    this.containerTarget.style.transform = `translateX(${offset}%)`
    this.slideIndex = index
  }

  nextSlide() {
    if (this.slideIndex >= this.totalSlides - 1) return
    this.goToSlide(this.slideIndex + 1)
  }

  prevSlide() {
    if (this.slideIndex <= 0) return
    this.goToSlide(this.slideIndex - 1)
  }

  startDrag(event) {
    this.isDragging = true
    this.startX = event.touches ? event.touches[0].clientX : event.clientX
    this.containerTarget.style.transition = "none"
  }

  onDrag(event) {
    if (!this.isDragging) return

    const currentX = event.touches ? event.touches[0].clientX : event.clientX
    const diffX = currentX - this.startX

    // Impede o scroll da página
    if (event.cancelable) event.preventDefault()

    const containerWidth = this.containerTarget.offsetWidth
    const offsetPercent = (diffX / containerWidth) * 100
    const offset = -(this.slideIndex * 100) + offsetPercent

    this.containerTarget.style.transform = `translateX(${offset}%)`
  }

  endDrag(event) {
    if (!this.isDragging) return
    this.isDragging = false

    const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX
    const diff = endX - this.startX

    if (diff > 50) {
      this.prevSlide()
    } else if (diff < -50) {
      this.nextSlide()
    } else {
      this.goToSlide(this.slideIndex)
    }

    // Corrige looping após a transição
    setTimeout(() => this.fixLoop(), 410)
  }

  fixLoop() {
    if (this.slideIndex === this.totalSlides - 1) {
      this.goToSlide(1, false)
    } else if (this.slideIndex === 0) {
      this.goToSlide(this.totalSlides - 2, false)
    }
  }

  showSlide(event) {
    const index = parseInt(event.currentTarget.dataset.index)
    this.goToSlide(index + 1)
  }
}
