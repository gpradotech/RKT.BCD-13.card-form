import { card, formCvv } from './components.js';

export function flipCard() {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
  
  document.addEventListener('click', (event) => {
    if (!card.contains(event.target) && !formCvv.contains(event.target)) {
      card.classList.remove('flip');
    }
  });
}

flipCard()