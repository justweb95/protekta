import { showAll } from './partials/showAllServices.js';
import { handleBurgerMenu } from './partials/burgerControl.js';

// Burger Menu
const burgerMenuOpen = document.querySelector('.burger-menu-open');
const burgerMenuClose = document.querySelector('.burger-menu-close');

burgerMenuOpen.addEventListener('click', handleBurgerMenu);
burgerMenuClose.addEventListener('click', handleBurgerMenu);

// Form function
document.querySelectorAll('.full-name input, .email input, .number input').forEach(input => {
  const label = input.previousElementSibling;

  const toggleLabel = () => {
      if (input.value.trim() !== '' || document.activeElement === input) {
          label.classList.add('input-active');
      } else {
          label.classList.remove('input-active');
      }
  };

  input.addEventListener('focus', toggleLabel);
  input.addEventListener('blur', toggleLabel);
  input.addEventListener('input', toggleLabel);
});


// Show all Service
const serviceBtn = document.querySelector('.your-smile-btn');

serviceBtn.addEventListener('click', () => {
    showAll();
    serviceBtn.removeEventListener('click', showAll())
})
