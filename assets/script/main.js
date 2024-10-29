import {
    
} from './partials/gallery.js';



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
