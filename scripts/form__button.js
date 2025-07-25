import { formButton, formButtonElement, formNumber, formName, formValidity, formCvv, cardNumber, cardName, cardValidity, cardCvv, card } from './components.js'

export function formButtonLoading() {
  formButton.addEventListener('click', (event) => {
    simulateLoading()
    
    // Remove o comportamento padrão do botão (PREVENT DEFAULT)
    event.preventDefault()

    setTimeout(() => {
      // Exibe um alerta de sucesso
      alert('Cartão cadastrado com sucesso!')
      // Limpa os campos do formulário
      formNumber.value = ''
      formName.value = ''
      formValidity.value = ''
      formCvv.value = ''

      // Foca no campo de número do cartão após o carregamento
      formNumber.focus()

      // Limpa os dados do cartão após o carregamento
      // Remove os dados do cartão após o botão ser clicado
      if(formButton.getAttribute('disabled') === null) {
        // Cria um loop para remover os elementos do cartão
        for(let i = 0; i < cardNumber.length; i++) {
          for(let j = 0; j < cardNumber[i].children.length; j++) {
            cardNumber[i].children[j].textContent = '•'
            cardNumber[i].children[j].style.opacity = 0.5
          }
        }
        
        // Remove o nome do cartão após o carregamento
        cardName.textContent = "Seu nome aqui"
        cardName.style.opacity = 0.5
        
        // Cria um loop para remover a data de validade do cartão após o carregamento
        for(let i = 0; i < cardValidity.children.length; i++) {
          cardValidity.children[i].textContent = '•'
          cardValidity.children[i].style.opacity = 0.5

          if(i === 2) {
            continue
          }
          cardValidity.children[2].textContent = '/'
        }

        // Remove o CVV do cartão após o carregamento
        cardCvv.textContent = '•••'
        cardCvv.style.opacity = 0.5
      }

      // Desabilita o botão após a simulação de carregamento
      formButton.setAttribute('disabled', true)
    }, 1000)
  })
}
formButtonLoading()

function simulateLoading() {
  formButtonElement.textContent = ''
  formButtonElement.classList.add('loading')
  formButtonElement.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.75 3V6C12.75 6.19891 12.671 6.38968 12.5303 6.53033C12.3897 6.67098 12.1989 6.75 12 6.75C11.8011 6.75 11.6103 6.67098 11.4697 6.53033C11.329 6.38968 11.25 6.19891 11.25 6V3C11.25 2.80109 11.329 2.61032 11.4697 2.46967C11.6103 2.32902 11.8011 2.25 12 2.25C12.1989 2.25 12.3897 2.32902 12.5303 2.46967C12.671 2.61032 12.75 2.80109 12.75 3ZM21 11.25H18C17.8011 11.25 17.6103 11.329 17.4697 11.4697C17.329 11.6103 17.25 11.8011 17.25 12C17.25 12.1989 17.329 12.3897 17.4697 12.5303C17.6103 12.671 17.8011 12.75 18 12.75H21C21.1989 12.75 21.3897 12.671 21.5303 12.5303C21.671 12.3897 21.75 12.1989 21.75 12C21.75 11.8011 21.671 11.6103 21.5303 11.4697C21.3897 11.329 21.1989 11.25 21 11.25ZM16.7728 15.7125C16.631 15.5778 16.4422 15.5038 16.2466 15.5063C16.0511 15.5088 15.8642 15.5876 15.7259 15.7259C15.5876 15.8642 15.5088 16.0511 15.5063 16.2466C15.5038 16.4422 15.5778 16.631 15.7125 16.7728L17.8331 18.8944C17.9739 19.0351 18.1647 19.1142 18.3638 19.1142C18.5628 19.1142 18.7536 19.0351 18.8944 18.8944C19.0351 18.7536 19.1142 18.5628 19.1142 18.3638C19.1142 18.1647 19.0351 17.9739 18.8944 17.8331L16.7728 15.7125ZM12 17.25C11.8011 17.25 11.6103 17.329 11.4697 17.4697C11.329 17.6103 11.25 17.8011 11.25 18V21C11.25 21.1989 11.329 21.3897 11.4697 21.5303C11.6103 21.671 11.8011 21.75 12 21.75C12.1989 21.75 12.3897 21.671 12.5303 21.5303C12.671 21.3897 12.75 21.1989 12.75 21V18C12.75 17.8011 12.671 17.6103 12.5303 17.4697C12.3897 17.329 12.1989 17.25 12 17.25ZM7.22719 15.7125L5.10562 17.8331C4.96489 17.9739 4.88583 18.1647 4.88583 18.3638C4.88583 18.5628 4.96489 18.7536 5.10562 18.8944C5.24636 19.0351 5.43723 19.1142 5.63625 19.1142C5.83527 19.1142 6.02614 19.0351 6.16687 18.8944L8.2875 16.7728C8.42221 16.631 8.49621 16.4422 8.4937 16.2466C8.4912 16.0511 8.4124 15.8642 8.2741 15.7259C8.1358 15.5876 7.94894 15.5088 7.75337 15.5063C7.5578 15.5038 7.36898 15.5778 7.22719 15.7125ZM6.75 12C6.75 11.8011 6.67098 11.6103 6.53033 11.4697C6.38968 11.329 6.19891 11.25 6 11.25H3C2.80109 11.25 2.61032 11.329 2.46967 11.4697C2.32902 11.6103 2.25 11.8011 2.25 12C2.25 12.1989 2.32902 12.3897 2.46967 12.5303C2.61032 12.671 2.80109 12.75 3 12.75H6C6.19891 12.75 6.38968 12.671 6.53033 12.5303C6.67098 12.3897 6.75 12.1989 6.75 12ZM6.16687 5.10562C6.02614 4.96489 5.83527 4.88583 5.63625 4.88583C5.43723 4.88583 5.24636 4.96489 5.10562 5.10562C4.96489 5.24636 4.88583 5.43723 4.88583 5.63625C4.88583 5.83527 4.96489 6.02614 5.10562 6.16687L7.22719 8.2875C7.36898 8.42221 7.5578 8.49621 7.75337 8.4937C7.94894 8.4912 8.1358 8.4124 8.2741 8.2741C8.4124 8.1358 8.4912 7.94894 8.4937 7.75337C8.49621 7.5578 8.42221 7.36898 8.2875 7.22719L6.16687 5.10562Z" fill="#F9FAFB"/>
    </svg>
  `
  
  setTimeout(() => {
    formButton.textContent = 'Adicionar cartão'
    formButtonElement.classList.remove('loading')
  }, 2000)
}

// Habilita o botão apenas se todos os inputs estiverem devidamente preenchidos
function statusButton() {
  // Verifica se todos os campos estão preenchidos corretamente
  const isNumberValid = formNumber.value.length === 16
  const isNameValid = formName.value.trim().length > 0
  const isValidityValid = formValidity.value.trim().length >= 4 // Ex: MM/AA
  const isCvvValid = formCvv.value.length === 3

  if (isNumberValid && isNameValid && isValidityValid && isCvvValid) {
    formButton.removeAttribute('disabled')
  } else {
    formButton.setAttribute('disabled', true)
  }
}

// Adiciona o evento para todos os inputs relevantes
[formNumber, formName, formValidity, formCvv].forEach(input => {
  input.addEventListener('input', statusButton)
})

// Inicializa o status do botão ao carregar
statusButton()