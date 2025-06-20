import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    this.slideIndex = 1 // Começa do primeiro slide real (após o clone do último)
    this.totalSlides = this.containerTarget.children.length
    this.slideWidth = this.containerTarget.offsetWidth / this.totalSlides

    this.goToSlide(this.slideIndex, false)

    this.isDragging = false
    this.startX = 0
    this.currentX = 0

    // Touch events
    this.containerTarget.addEventListener("touchstart", this.startDrag.bind(this))
    this.containerTarget.addEventListener("touchmove", this.onDrag.bind(this))
    this.containerTarget.addEventListener("touchend", this.endDrag.bind(this))

    // Mouse events
    this.containerTarget.addEventListener("mousedown", this.startDrag.bind(this))
    this.containerTarget.addEventListener("mousemove", this.onDrag.bind(this))
    this.containerTarget.addEventListener("mouseup", this.endDrag.bind(this))
    this.containerTarget.addEventListener("mouseleave", this.endDrag.bind(this))
  }

  goToSlide(index, animated = true) {
    const offset = -(index * 100)
    this.containerTarget.style.transition = animated ? "transform 0.5s ease-in-out" : "none"
    this.containerTarget.style.transform = `translateX(${offset}%)`
    this.slideIndex = index

    // Atualiza indicadores
    const realIndex = (index - 1 + (this.totalSlides - 2)) % (this.totalSlides - 2) // Ajusta para índice real (ignorando clones)
    document.querySelectorAll(".carousel-indicator").forEach((btn, i) => {
      btn.classList.toggle("bg-white", i === realIndex)
      btn.classList.toggle("bg-white/50", i !== realIndex)
    })
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
    this.currentX = event.touches ? event.touches[0].clientX : event.clientX
    const diffX = this.currentX - this.startX
    const offsetPercent = (diffX / this.containerTarget.offsetWidth) * 100
    const offset = -(this.slideIndex * 100) + offsetPercent
    this.containerTarget.style.transform = `translateX(${offset}%)`
  }

  endDrag() {
    if (!this.isDragging) return
    this.isDragging = false
    const diff = this.currentX - this.startX

    if (diff > 50) {
      this.prevSlide()
    } else if (diff < -50) {
      this.nextSlide()
    } else {
      this.goToSlide(this.slideIndex)
    }

    // Corrige loop (pós-transição)
    setTimeout(() => this.fixLoop(), 510)
  }

  fixLoop() {
    if (this.slideIndex === this.totalSlides - 1) {
      // Se estiver no clone do primeiro, volta para o primeiro real
      this.goToSlide(1, false)
    } else if (this.slideIndex === 0) {
      // Se estiver no clone do último, volta para o último real
      this.goToSlide(this.totalSlides - 2, false)
    }
  }

  showSlide(event) {
    const index = parseInt(event.currentTarget.dataset.index)
    this.goToSlide(index + 1) // +1 pois o slide real começa no índice 1
  }
}
