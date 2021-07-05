
const viewsElem = document.getElementById('views');
const priceElem = document.getElementById('price-el');
const toggleElem = document.getElementById('toggle');

window.oninput = () => {
    // Initialize results
    let price, views;
    // Get slider value
    const sliderValue = Number(document.getElementById('slide').value);
    // Checking selected value
    if (sliderValue < 24) {
        price = 8;
        views = '10K';
    } else if (sliderValue < 49) {
        price = 12;
        views = '50K';
    } else if (sliderValue < 74) {
        price = 16;
        views = '100K';
    } else if (sliderValue < 100) {
        price = 24;
        views = '500K';
    } else {
        price = 36;
        views = '1M';
    }
    // Apply discount
    price *= (toggleElem.checked)? .75 : 1
    // Setting values
    priceElem.innerHTML = `$${price}.00`
    viewsElem.innerHTML = `${views}`
}
