const slide = document.getElementById('slide');
const priceEl = document.getElementById('price-el')
const views = document.getElementById('views');
function initial(){
    const value = document.getElementById('slide').value;
    priceEl.textContent = value + "$";
    views.textContent = "10K pageviews"
}
slide.addEventListener('input', () => {
    const slideVal = document.getElementById('slide').value;
    priceEl.textContent = slideVal + '$';
    if(priceEl.textContent == '8$'){
        views.textContent = '10K pageviews';
    }else if(priceEl.textContent == '12$'){
        views.textContent = '50K pageviews';
    }else if(priceEl.textContent == '16$'){
        views.textContent = '100K pageviews';
    }else if(priceEl.textContent == '20$'){
        views.textContent = '400K pageviews';
    }else if(priceEl.textContent == '24$'){
        views.textContent = '500K pageviews'
    }else if(priceEl.textContent == '28$') {
        views.textContent = '700K pageviews'
    }else if(priceEl.textContent == '32$') {
        views.textContent = '900K pageviews'
    }else{
        views.textContent = '1M pageviews';
    }
})

console.log(priceEl.textContent)



/* 
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
*/
