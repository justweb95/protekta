function showAll() {
    const allSerices = document.querySelectorAll('.single-card');
    const showAllBtn = document.querySelector('.your-smile-btn');

    allSerices.forEach((card) => {
        card.style.display = 'flex';
    })

    showAllBtn.style.display = 'none';
}

export { showAll };