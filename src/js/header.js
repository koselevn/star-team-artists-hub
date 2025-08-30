const menuButton = document.querySelector('[data-menu-open]');
const closeButton = document.querySelector('[data-menu-close]');
const menu = document.querySelector('.mob-menu');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
});


