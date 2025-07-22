import { formCvv, card, cardCvv } from './components.js'

export function inputCvv() {
  // Vira o catão ao focar no campo CVV
  formCvv.addEventListener('focus', () => {
    card.classList.add('flip')
  })

  // Desvira o catão ao desfocar do campo CVV
  formCvv.addEventListener('blur', () => {
    card.classList.remove('flip')
  })

  formCvv.addEventListener('input', (e) => {
    // Limpa o campo CVV de caracteres não numéricos
    formCvv.value = formCvv.value.replace(/[^0-9]/g, '')
    
    // Limita o campo CVV a 3 dígitos
    if (formCvv.value.length > 3) {
      formCvv.value = formCvv.value.slice(0, 3)
    }

    // Atualiza o CVV no cartão
    const firstChild = cardCvv.children[0]
    const secondChild = cardCvv.children[1]
    const thirdChild = cardCvv.children[2]

    firstChild.textContent = Number(formCvv.value[0]) || '•'
    secondChild.textContent = formCvv.value[1] || '•'
    thirdChild.textContent = formCvv.value[2] || '•'

    // Altera a opacidade do elemento no cartão se for preenchido
    Array.from(cardCvv.children).forEach((child) => {
      if (child.textContent !== '•' && child.textContent !== '') {
        child.style.opacity = 1;
      } else {
        child.style.opacity = 0.5;
      }
    })
  })
}
inputCvv()