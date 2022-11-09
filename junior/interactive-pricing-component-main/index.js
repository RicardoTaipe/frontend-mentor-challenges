const slider = document.querySelector('.slider')
const reviews = document.querySelector('.reviews')
const quantity = document.querySelector('.quantity')

slider.addEventListener('input', (e) => {
    const { min, max, value } = e.target
    slider.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
    reviews.innerHTML = `${value}K PAGEVIEWS`
    quantity.innerHTML = (value > 50) ? '$30.00' : '$16.00'
})