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
document.querySelector('.logo').addEventListener('click', function() {
  window.location.href = 'index.html';
});

const header = document.querySelector('.page-header');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxFade = 250; 
  const opacity = Math.max(0, 1 - scrollY / maxFade);
  header.style.setProperty('--gradient-opacity', opacity);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'     
            });
        }
    });
});



// Закрытие меню при клике на пункт навигации внутри мобильного меню
document.querySelectorAll('.mob-menu-nav a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
    });
});