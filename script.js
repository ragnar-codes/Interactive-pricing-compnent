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
