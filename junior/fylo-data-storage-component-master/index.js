const slider = document.querySelector('.slider');
const usedStorage = document.querySelector('.used-storage');
const leftStorage = document.querySelector('.left-storage-value');

slider.addEventListener('input', (e) => {
  const { min, max, value } = e.target;
  slider.style.backgroundSize = ((value - min) * 100) / (max - min) + '% 100%';
  usedStorage.innerHTML = `${value} GB`;
  leftStorage.innerHTML = max - value;
});
