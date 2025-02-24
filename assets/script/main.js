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



document.addEventListener('DOMContentLoaded', () => {
    // Cache frequently used DOM elements
    const galleryOpenBtn = document.querySelector('.gallery-open');
    const galleryDialog = document.getElementById('gallery-dialog');
    const closeBtn = document.querySelector('.gallery-close-btn');
    const galleryContainer = document.querySelector('.gallery-items');
    const galleryItems = Array.from(galleryContainer.querySelectorAll('img'));
  
    // Create and configure the lightbox element
    const lightbox = document.createElement('dialog');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <div class="lightbox-nav lightbox-prev">&#10094;</div>
        <div class="lightbox-nav lightbox-next">&#10095;</div>
        <img class="lightbox-image" src="" alt="">
      </div>
    `;
    document.body.appendChild(lightbox);
  
    // Cache lightbox sub-elements
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    let currentImageIndex = 0;
  
    // Open the gallery dialog
    galleryOpenBtn.addEventListener('click', () => {
      galleryDialog.showModal();
      document.body.style.overflow = 'hidden';
      // If no image is marked active, mark the first one
      if (!galleryContainer.querySelector('.active-image')) {
        galleryItems[0].classList.add('active-image');
      }
    });
  
    // Close the gallery dialog
    closeBtn.addEventListener('click', () => {
        galleryDialog.close();
        document.body.style.overflow = 'auto';
    });
  
    // Close dialog when clicking outside its content area
    galleryDialog.addEventListener('click', (e) => {
      const rect = galleryDialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        galleryDialog.close();
        document.body.style.overflow = 'auto';
      }
    });
  
    // Use event delegation for gallery image clicks
    galleryContainer.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'img') {
        // Determine clicked image's index
        const index = galleryItems.indexOf(e.target);
        if (index !== -1) {
          // Update active image class
          galleryContainer.querySelectorAll('img.active-image').forEach(img => img.classList.remove('active-image'));
          e.target.classList.add('active-image');
  
          // Close the dialog and open the lightbox
          galleryDialog.close();
          currentImageIndex = index;
          updateLightboxImage();
          lightbox.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      }
    });
  
    // Update the lightbox image source based on the current index
    function updateLightboxImage() {
      lightboxImage.src = galleryItems[currentImageIndex].src;
    }
  
    // Navigation functions for the lightbox
    function showPrevImage() {
      currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightboxImage();
    }
  
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
      updateLightboxImage();
    }
  
    // Close lightbox and optionally reopen the gallery dialog
    function closeLightbox() {
        lightboxImage.src = '';
        lightboxImage.removeAttribute('src');
        URL.revokeObjectURL(lightboxImage.src); 
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        galleryDialog.showModal();
        
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            if (lightboxImage.decode) lightboxImage.decode().catch(() => {});
          });
        }
      }
      
  
    // Lightbox event listeners
    lightboxClose.addEventListener('click', (e) => {
    //   e.stopPropagation();
      closeLightbox();
    });
    lightboxPrev.addEventListener('click', (e) => {
    //   e.stopPropagation();
      showPrevImage();
    });
    lightboxNext.addEventListener('click', (e) => {
    //   e.stopPropagation();
      showNextImage();
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  
  });
  