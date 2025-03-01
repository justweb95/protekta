function showAllEN() {
    const allSerices = document.querySelectorAll('.single-card');
    const showAllENBtn = document.querySelector('.your-smile-btn');

    allSerices.forEach((card) => {
        card.style.display = 'flex';
    })

    showAllENBtn.style.display = 'none';
}


function handleOpenPopUpEN(serviceID) {
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

    closeModalBtn.addEventListener('click', () => handleClosePopUpEN(serviceModal));
    redirectBtn.addEventListener('click', () => handleClosePopUpEN(serviceModal));
}

function handleClosePopUpEN() {
    // Service Modal 
    const serviceModal = document.getElementById('service-modal');
    serviceModal.close();
}

export { showAllEN, handleOpenPopUpEN, handleClosePopUpEN };


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
            <h2 class="modal-hero-title">Implantology</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <h3 class="modal-content-title">Implant Installation</h3>
            <p class="modal-content-text">
            Individual, All-on-4, All-on-6 <br>
            <span>(Lifetime warranty on implants)</span>
            </p>
            <h3 class="modal-content-title">Installation of artificial bone and bio-membrane</h3>
            <h3 class="modal-content-title">Graft transplantation from the palate</h3>
            <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
            <img class="modal-hero-icon" src="./assets/images/pop-up/hirurgija-icon.svg" alt="Oral Surgery Icon">
            <h2 class="modal-hero-title">Oral Surgery</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Surgical tooth extraction</li>
            <li>Surgical removal of wisdom teeth and impacted teeth</li>
            <li>Intraoral incision of abscess</li>
            <li>Apicoectomy (surgical removal of the root tip of a tooth)</li>
            <li>Removal of cysts and granulomas</li>
            <li>Gingivectomy</li>
            <li>Treatment of "Gummy smile"</li>
            <li>Sinus lift</li>
            <li>Treatment of open maxillary sinus.</li>
            </ul>
            <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
            <img class="modal-hero-icon" src="./assets/images/pop-up/protetika-icon.svg" alt="Prosthetics Icon">
            <h2 class="modal-hero-title">Prosthetics</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <h3 class="modal-content-title">Crowns:</h3>
            <p class="modal-content-text">
                Metal-ceramic, non-metallic <br>
                <span>(E-max, Zirconium).</span>
            </p>
            <h3 class="modal-content-title">Dental prostheses:</h3>
            <p class="modal-content-text">
                Acrylic total and partial, <br>
                ThermoSens (silicone),<br>
                vizil prostheses (with or without attachments), <br>
                Bredent BioHPP prostheses.
            </p>
            <h3 class="modal-content-title">Implant-supported prostheses</h3>
            <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
                <img class="modal-hero-icon" src="./assets/images/pop-up/stomatologija-icon.svg" alt="General Dentistry Icon">
                <h2 class="modal-hero-title">General Dentistry</h2>
            </div>
            <!-- Modal Content -->
            <article class="modal-content">
                <ul class="modal-content-list">
                <li>Preventive and diagnostic examinations</li>
                <li>Repairing and filling teeth with nano-composite <br>
                fillings of the new generation</li>
                <li>Reconstruction of fractured teeth with or without posts</li>
                <li>Glass ionomer fillings (as a temporary or permanent <br>
                solution for treating sensitive teeth)</li>
                <li>Sealing fissures in primary and permanent teeth in children for <br> caries prevention</li>
                <li>Providing first aid for toothache</li>
                <li>Tooth extraction</li>
                </ul>
                <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
                <img class="modal-hero-icon" src="./assets/images/pop-up/endodoncaija-icon.svg" alt="Endodontics Icon">
                <h2 class="modal-hero-title">Endodontics</h2>
            </div>
            <!-- Modal Content -->
            <article class="modal-content">
                <ul class="modal-content-list">
                <li>Treatment and processing of root canals in cases of pulpitis, <br> periodontitis, and tooth gangrene,</li>
                <li>Mechanical endodontics.</li>
                </ul>
                <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
                <img class="modal-hero-icon" src="./assets/images/pop-up/ortodonacija-icon.svg" alt="Orthodontics Icon">
                <h2 class="modal-hero-title">Orthodontics</h2>
            </div>
            <!-- Modal Content -->
            <article class="modal-content">
                <ul class="modal-content-list">
                <li>Treatment of dental misalignment in children and adults</li>
                <li>Creation of removable dental appliances</li>
                <li>Creation of fixed orthodontic braces</li>
                <li>Aligners and retainers for straightening teeth.</li>
                </ul>
                <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
            <img class="modal-hero-icon" src="./assets/images/pop-up/paradontologija-icon.svg" alt="Periodontology Icon">
            <h2 class="modal-hero-title">Periodontology</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <ul class="modal-content-list">
            <li>Removal of soft deposits (tooth polishing)</li>
            <li>Removal of tartar</li>
            <li>Treatment of periodontal pockets</li>
            </ul>
            <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
                <img class="modal-hero-icon" src="./assets/images/pop-up/decja-icon.svg" alt="Pediatric Dentistry Icon">
                <h2 class="modal-hero-title">Pediatric Dentistry</h2>
            </div>
            <!-- Modal Content -->
            <article class="modal-content">
                <ul class="modal-content-list">
                <li>Repair of primary teeth</li>
                <li>Sealing fissures</li>
                <li>Extraction of primary teeth</li>
                <li>Fluoridation</li>
                <li>Removal of soft deposits</li>
                </ul>
                <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
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
            <img class="modal-hero-icon" src="./assets/images/pop-up/izbeljivanja-icon.svg" alt="Teeth Whitening Icon">
            <h2 class="modal-hero-title">Teeth Whitening</h2>
        </div>
        <!-- Modal Content -->
        <article class="modal-content">
            <p class="modal-content-text"><mark>Teeth whitening</mark> in office conditions is a safe procedure.<br>
                It is contraindicated for pregnant women, nursing mothers, and individuals under the age of 18.<br>
                It is necessary for the teeth being whitened to be healthy <br>
                or for any old fillings to be replaced with new ones after whitening.<br>
                It is essential to avoid<br>
                alcohol, smoking, colored food, and drinks <mark>24 hours before and after</mark> the intervention.<br>
            </p>
            <a href="tel:+38169616000" class="back-to-form-btn">Schedule Appointment</a>
        </article>`,
        modalBackgroundImage: `../../../assets/images/pop-up/izbeljivanje.webp`
    }
];