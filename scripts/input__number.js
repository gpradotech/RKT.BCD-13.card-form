import { formNumber, cardNumber } from './components.js'

function updateCardNumberDisplay(value) {
  for (let group = 0; group < 4; group++) {
    for (let digit = 0; digit < 4; digit++) {
      const index = group * 4 + digit;
      cardNumber[group].children[digit].textContent = value[index] ?? '•';
      
      if(!isNaN(cardNumber[group].children[digit].textContent)) {
        cardNumber[group].children[digit].style.opacity = '1'
      } else {
        cardNumber[group].children[digit].style.opacity = '0.5'
      }
    
    }
  }
}

export function inputNumber() {
  formNumber.addEventListener('input', (e) => {
    // Remove non-digit characters and limit to 16 digits
    const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 16);
    e.target.value = sanitizedValue;
    cardNumber.textContent = sanitizedValue;
    updateCardNumberDisplay(sanitizedValue);
  });
}

inputNumber();