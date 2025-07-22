import { formName, cardName } from './components.js'

export function inputName() {
  formName.addEventListener('input', () => {

    // Transforma o texto digitado em maiúsculo
    formName.value = formName.value.toUpperCase()
   
    // Manipula o texto e sua opacidade no cartão
    if(formName.value != '') {
      cardName.textContent = formName.value.toUpperCase()
      cardName.style.opacity = 1
    } else {
      cardName.textContent = "Seu nome aqui"
      cardName.style.opacity = 0.5
    }

    // Remove tudo que não é letra ou espaço, mas continua permitindo caracteres especiais
    formName.value = formName.value.replace(/[^a-zA-ZçÇáÁ'\s]/g, '')
  })
}

inputName()