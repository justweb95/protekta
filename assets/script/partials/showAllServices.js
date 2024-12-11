let currentIndex = 0; // Keep track of the current index

function showAll() {
    const allServices = document.querySelectorAll('.single-card');
    const showAllBtn = document.querySelector('.your-smile-btn');

    // Show the next 3 cards
    const cardsToShow = Math.min(3, allServices.length - currentIndex); // Calculate how many cards to show
    for (let i = 0; i < cardsToShow; i++) {
        if (currentIndex < allServices.length) {
            allServices[currentIndex].style.display = 'flex'; // Show the card
            currentIndex++; // Move to the next card
        }
    }

    // Hide the button if all cards are shown
    if (currentIndex >= allServices.length) {
        showAllBtn.style.display = 'none';
    }
}


function handleOpenPopUp(serviceID) {
    // Service Number ID
    let serviceIdNumber = parseInt(serviceID.dataset.serviceId); 
    // Service Modal 
    const serviceModal = document.getElementById('service-modal');

    serviceModal.innerHTML = ModalData[serviceIdNumber - 1].modalContent;
    serviceModal.style.setProperty('--modal-background-image', `url('${ModalData[serviceIdNumber - 1].modalBackgroundImage}')`);

    // Close Modal BTN 
    const closeModalBtn = document.querySelector('.close-modal-btn');
    // Redirect To Form BTN 
    const redirectBtn = document.querySelector('.back-to-form-btn');

    serviceModal.showModal();

    closeModalBtn.addEventListener('click', () => handleClosePopUp(serviceModal));
    redirectBtn.addEventListener('click', () => handleClosePopUp(serviceModal));
}

function handleClosePopUp() {
    // Service Modal 
    const serviceModal = document.getElementById('service-modal');
    serviceModal.close();
}

export { showAll, handleOpenPopUp, handleClosePopUp };


// Data in Array
const ModalData = [
    {
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/implant-icon.svg" alt="Implantologija Icon">
            <h2 class="modal-hero-title">Implantologija</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Ugradnja implantata: pojedinačnih, All-on-4, All-on-6 (doživotna garancija na implante!)</li>
            <li>Ugradnja veštačke kosti i bio membrana,</li>
            <li>Transplantacija grafta sa nepca</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/inpmplants.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/hirurgija-icon.svg" alt="Oralna Hirurgija Icon">
            <h2 class="modal-hero-title">Oralna Hirurgija</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Hirurško vađenje zuba</li>
            <li>Hirurško vađenje umnjaka i impaktiranih zuba</li>
            <li>Intraoralna incizija apscesa</li>
            <li>Apikotomija (hirurško uklanjanje vrha korena zuba)</li>
            <li>Uklanjanje cista i granuloma</li>
            <li>Gingivektomija</li>
            <li>Terapija “Gummy smile-a”</li>
            <li>Sinus lift</li>
            <li>Terapija otvorenog maxilarnog sinusa.</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/hirurgija.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/protetika-icon.svg" alt="Protetika Icon">
            <h2 class="modal-hero-title">Protetika</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li><h4>KRUNICE</h4></li>
            <li>metalokeramičke</li>
            <li>bezmetalne (Litijum-disilikatne, cirkonijum)</li>
            <li>izrada privreminih kruna</li>

            <li><h4>ZUBNE PROTEZE</h4></li>
            <li>akrilatne (više vrsta),</li>
            <li>vizil proteze (sa ili bez atečmena),</li>
            <li>Bredent BioHPP proteze,</li>
            <li>izrada proteza na implantima,</li>
            <li>mogućnost ugradnje najkvalitetnijih zubnih garnitura
u protezu (Candular, Vita sedmoslojni zubi)</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/protetika.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/stomatologija-icon.svg" alt="Opšta stomatologija Icon">
            <h2 class="modal-hero-title">Opšta stomatologija</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Preventivni i dijagnostički pregledi</li>
            <li>Popravka i plombiranje zuba nano-kompozitnim plombama nove generacije</li>
            <li>Nadogradnja frakturiranog zuba sa ili bez kočića</li>
            <li>Glas-jonomer plombe (kao privremeno ili trajno rešenje kod lečenja osetljivih zuba)</li>
            <li>Zalivanje fisura mlečnih i stalnih zuba kod dece u prevenciji karijesa,</li>
            <li>Ukazivanje prve pomoći kod zubobolje</li>
            <li>Vađenje zuba</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/stomatologija.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/endodoncaija-icon.svg" alt="Endodoncija Icon">
            <h2 class="modal-hero-title"> Endodoncija</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Lečenje i obrada kanala korena zuba kod pulpita, periodontita i gangrene zuba</li>
            <li>Interseansna medikacija</li>
            <li>Mašinska endodoncija</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/endodonacija.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero ortodoncija">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/ortodonacija-icon.svg" alt="Ortodoncija Icon">
            <h2 class="modal-hero-title">Ortodoncija</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Terapija nepravilnosti u položaju zuba kod dece i odraslih</li>
            <li>Izrada mobilnih zubnih aparata</li>
            <li>Izrada fiksnih ortodontskih proteza</li>
            <li>Izrada folija za ispravljanje zuba (Invisalign)</li>
            <li>Izrada retainera nakon skidanja ortodontskog aparata</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/ortodonacija.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/paradontologija-icon.svg" alt="Paradontologija Icon">
            <h2 class="modal-hero-title">Paradontologija</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Ukljanjanje mekih naslaga (poliranje zuba),</li>
            <li>Uklanjanje zubnog kamenca</li>
            <li>Obrada parodontalnih džepova</li>
            <li>Drenaža akutnog parodontalnog apscesa</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/paradontologija.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/decja-icon.svg" alt="Dečija stomatologija Icon">
            <h2 class="modal-hero-title">Dečija stomatologija</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Popravka mlečnog zuba</li>
            <li>Zalivanje fisura</li>
            <li>Fluorizacija</li>
            <li>Uklanjanje mekih naslaga</li>
            <li>Ekstrakcija mlečnog zuba</li>
            </ul>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/decija.webp`
    },
    {   
        modalContent:
        `<!-- Close button -->
        <button class="close-modal-btn">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27065 0L0 5.27065L2.69139 7.96204L9.34512 14.7279L2.69139 21.3816L0 23.9609L5.27065 29.3437L7.96204 26.6523L14.7279 19.8864L21.3816 26.6523L23.9609 29.3437L29.3437 23.9609L26.6523 21.3816L19.8864 14.7279L26.6523 7.96204L29.3437 5.27065L23.9609 0L21.3816 2.69139L14.7279 9.34512L7.96204 2.69139L5.27065 0Z" fill="white"/>
            </svg>  
        </button>
        <!-- Modal Hero -->
        <div class="modal-hero">
            <img class="modal-hero-logo" src="./assets/images/header-logo.svg" alt="Protekta Logo">
            <img class="modal-hero-icon" src="./assets/images/pop-up/izbeljivanja-icon.svg" alt="Izbeljivanje zuba Icon">
            <h2 class="modal-hero-title">Izbeljivanje zuba</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <p class="modal-content-text"><mark>Izbeljivanje zuba</mark> u ordinacijskim uslovima je bezbedna procedura.<br>
                Kontraindikovana je kod trudnica, dojilja i osoba mlađih od 18 godina.<br>
                Neophodno je da zubi koji se izbeljuju budu zdravi <br>
                ili da se eventualno stare plombe zamene novim nakon izbeljivanja. <br>
                Neophodno je <mark>24h pre i nakon</mark> intervencije izbegavati<br>
                alkohol, pušenje, obojenu hranu i pića.<br>
            </p>
            <a href="tel:+381603840740" class="back-to-form-btn">Zakaži Termin</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/izbeljivanje.webp`
    }
];