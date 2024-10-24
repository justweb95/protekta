// Gallery.js
class Gallery {
    constructor(headerSelector, subHeaderSelector) {
        this.headerElement = document.querySelector(headerSelector); // Select the h1 element using the provided selector
        this.subHeaderElement = document.querySelector(subHeaderSelector); // Select the h2 element using the provided selector
        
        // Store the original text and color for both elements
        this.originalHeaderText = this.headerElement ? this.headerElement.textContent : '';
        this.originalSubHeaderText = this.subHeaderElement ? this.subHeaderElement.textContent : '';
        
        this.originalHeaderColor = this.headerElement ? getComputedStyle(this.headerElement).color : '';
        this.originalSubHeaderColor = this.subHeaderElement ? getComputedStyle(this.subHeaderElement).color : '';
    }

    changeHeaderText(newText) {
        if (this.headerElement) {
            this.headerElement.textContent = newText; // Change the text of the h1 element
        } else {
            console.error("Header element not found!");
        }
    }

    changeSubHeaderText(newText) {
        if (this.subHeaderElement) {
            this.subHeaderElement.textContent = newText; // Change the text of the h2 element
        } else {
            console.error("Sub-header element not found!");
        }
    }

    changeHeaderColor(newColor) {
        if (this.headerElement) {
            this.headerElement.style.color = newColor; // Change the color of the h1 element
        } else {
            console.error("Header element not found!");
        }
    }

    changeSubHeaderColor(newColor) {
        if (this.subHeaderElement) {
            this.subHeaderElement.style.color = newColor; // Change the color of the h2 element
        } else {
            console.error("Sub-header element not found!");
        }
    }

    resetHeaderText() {
        if (this.headerElement) {
            this.headerElement.textContent = this.originalHeaderText; // Reset to original text for h1
        } else {
            console.error("Header element not found!");
        }
    }

    resetSubHeaderText() {
        if (this.subHeaderElement) {
            this.subHeaderElement.textContent = this.originalSubHeaderText; // Reset to original text for h2
        } else {
            console.error("Sub-header element not found!");
        }
    }

    resetHeaderColor() {
        if (this.headerElement) {
            this.headerElement.style.color = this.originalHeaderColor; // Reset to original color for h1
        } else {
            console.error("Header element not found!");
        }
    }

    resetSubHeaderColor() {
        if (this.subHeaderElement) {
            this.subHeaderElement.style.color = this.originalSubHeaderColor; // Reset to original color for h2
        } else {
            console.error("Sub-header element not found!");
        }
    }
}

export default Gallery;