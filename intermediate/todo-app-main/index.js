const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
  darkMode.src = html.classList.contains('dark')
    ? 'images/icon-sun.svg'
    : 'images/icon-moon.svg';
});
