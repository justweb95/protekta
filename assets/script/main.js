import { 
    showAll,
    handleOpenPopUp,
    handleClosePopUp } from './partials/showAllServices.js';
import { handleBurgerMenu } from './partials/burgerControl.js';

import { 
    showAllEN,
    handleOpenPopUpEN,
    handleClosePopUpEN } from './partials/showAllServicesEN.js';

// Burger Menu
const burgerMenuOpen = document.querySelector('.burger-menu-open');
const burgerMenuClose = document.querySelector('.burger-menu-close');
const burgerMenuHolder = document.querySelector('.burger-menu-holder');

burgerMenuOpen.addEventListener('click', handleBurgerMenu);
burgerMenuClose.addEventListener('click', handleBurgerMenu);

burgerMenuHolder.addEventListener('click', (event) => {
    // Check if the target is an <li> or <a> element
    if (event.target.tagName === 'LI' || event.target.tagName === 'A') {
        handleBurgerMenu();
    }
});

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

const allServiceCard = document.querySelectorAll('#service-card-btn')

allServiceCard.forEach( (service_card) => {    
    service_card.addEventListener('click', (e) => {
        if(service_card.classList.contains('en-version')) {
            handleOpenPopUpEN(service_card)
            return;
        }
        handleOpenPopUp(service_card)
    });
})
