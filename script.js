/*
const slide = document.getElementById('slide');
const priceEl = document.getElementById('price-el')
const views = document.getElementById('views');
function initial(){
    slide.value = 8;
    priceEl.textContent = slide.value + "$";
    views.textContent = "10K pageviews"
}
slide.addEventListener('input', () => {
    const slideVal = document.getElementById('slide').value;
    priceEl.textContent = slideVal + '$';
    switch(priceEl.textContent){
        case '8$':
            views.textContent = '10K pageviews';
            break;
        case '12$':
            views.textContent = '50K pageviews';
            break;
        case '16$':
            views.textContent = '100K pageviews';
            break;
        case '20$':
            views.textContent = '400K pageviews';
            break;
        case '24$':
            views.textContent = '500K pageviews';
            break;
        case '28$':
            views.textContent = '700K pageviews';
            break;
        case '32$':
            views.textContent = '900K pageviews';
            break;
        case '36$':
            views.textContent = '1M pageviews';
            break;
    }
})
*/
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
