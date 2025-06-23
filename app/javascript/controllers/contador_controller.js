import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["contador"]
  static values = {
    dataInicial: String
  }

  connect() {
    this.atualizarContador()
  }

  atualizarContador() {
    const dataInicial = new Date(this.dataInicialValue)
    const agora = new Date()
    let diferenca = agora - dataInicial

    if (diferenca < 0) {
      this.contadorTarget.textContent = "Data futura"
      return
    }

    const msPorHora = 1000 * 60 * 60
    const msPorDia = msPorHora * 24
    const msPorMes = msPorDia * 30.44  // média aproximada

    const meses = Math.floor(diferenca / msPorMes)
    diferenca -= meses * msPorMes

    const dias = Math.floor(diferenca / msPorDia)
    diferenca -= dias * msPorDia

    const horas = Math.floor(diferenca / msPorHora)

    this.contadorTarget.textContent = `${meses} meses, ${dias} dias e ${horas}h`
  }
}
