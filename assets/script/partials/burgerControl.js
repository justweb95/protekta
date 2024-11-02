function handleBurgerMenu() {    
    const burgerMenu = document.getElementById('burger-menu');
    const body = document.querySelector('body');

    burgerMenu.classList.toggle('burger-menu-active');

    // if (burgerMenu.classList.contains('burger-menu-active')) {
    //     body.style.overflow = 'hidden';
    // } else {
    //     body.style.overflow = '';
    // }
    
}

export { handleBurgerMenu };