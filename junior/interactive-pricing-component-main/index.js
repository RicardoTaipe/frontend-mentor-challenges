const slider = document.querySelector('.slider')

slider.addEventListener('input', (e) => {
    const { min, max, value } = e.target
    slider.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
})