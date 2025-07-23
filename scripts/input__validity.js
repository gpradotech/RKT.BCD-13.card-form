import { formValidity, cardValidity } from './components.js'

export function inputValidity() {
  formValidity.addEventListener('input', (event) => {

    const firstNumber = formValidity.value[0] ?? "•"
    const secondNumber = formValidity.value[1] ?? "•"

    cardValidity.children[0].textContent = firstNumber
    cardValidity.children[1].textContent = secondNumber
    cardValidity.children[3].textContent = formValidity.value[3] ?? "•"
    cardValidity.children[4].textContent = formValidity.value[4] ?? "•"

    Array.from(cardValidity.children).forEach((child) => {
      if (!isNaN(child.textContent) && child.textContent !== "•") {
        child.style.opacity = 1;
      } else {
        child.style.opacity = 0.5;
      }
    })

    // Remove tudo que não é número
    formValidity.value = formValidity.value.replace(/[^\d/]/g, '')

    // Se firstNumber for maior que 1, substitua por vazio
    if (firstNumber > 1) {
      formValidity.value = formValidity.value.replace(firstNumber, '')
      cardValidity.children[0].textContent = '•'
    }

    // Se firstNumber concatenado com SecondNumber for maior que 12, substitua por vazio
    if (firstNumber + secondNumber > 12) {
      formValidity.value = formValidity.value.replace(firstNumber + secondNumber, '1')
      cardValidity.children[1].textContent = '•'
    }

    // Se o valor contiver 2 números, acrescente uma barra como terceiro digito
    if (formValidity.value.length === 2) {
      formValidity.value = formValidity.value + '/'
    }

    // Se o primeiro ou o segundo digito for "/", substitua por vazio
    if (firstNumber === '/' || secondNumber === '/') {
      formValidity.value = formValidity.value.replace('/', '')
    }

    // Se o segundo digito for "/", substitua por vazio
    if (secondNumber === '/') {
      formValidity.value = formValidity.value.replace('/', '')
    }
  })
}

inputValidity()