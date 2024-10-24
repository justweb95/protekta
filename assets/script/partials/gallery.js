const pavle = 'Pavle Pesic';

function hello(params) {
    console.log('This function is from gallery.js');
    console.log(params);
}

function changeText(selector, newText) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = newText;
    } else {
        console.error("Element not found!");
    }
}

function changeColor(selector, newColor) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.color = newColor;
    } else {
        console.error("Element not found!");
    }
}

function resetText(selector, originalText) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = originalText;
    } else {
        console.error("Element not found!");
    }
}

// Export the functions
export { hello, changeText, changeColor, resetText, pavle };