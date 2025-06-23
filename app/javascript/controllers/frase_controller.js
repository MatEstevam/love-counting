import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["texto"]

  connect() {
    console.log("frase controller conectado")
    this.frases = [
      "Entre todas as voltas que o mundo dá, a melhor foi quando ele me trouxe até você.",
      "Entre milhões de sorrisos, o seu é o meu favorito.",
      "Se a vida é feita de instantes, que os meus sejam ao teu lado.",
      "Te amo, te amo, te amo.",
      "Você é o detalhe que fez tudo mudar.",
      "A gente nem precisa de um plano — só um sofá, risadas e você perto já bastam.",
      "Você é tipo meme bom: aparece e meu dia melhora na hora.",
      "Te amo, linda."
    ]
  }

  trocar() {
    const novaFrase = this.frases[Math.floor(Math.random() * this.frases.length)]
    this.textoTarget.textContent = `“${novaFrase}”`
  }
}
