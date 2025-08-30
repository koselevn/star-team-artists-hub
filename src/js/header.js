// Скрипт запускается, когда вся разметка загружена
document.addEventListener('DOMContentLoaded', () => {
  // Находим основные элементы интерфейса
  const btnBurger = document.querySelector('.burger-btn');     // кнопка открытия меню
  const menuMobile = document.querySelector('.mobile-menu');   // само мобильное меню
  const btnClose = document.querySelector('.mobile-close');    // крестик закрытия
  const overlay = document.querySelector('.mobile-backdrop');  // затемнение фона
  const logoHeader = document.querySelector('.header-logo-link'); // логотип из шапки

  let isLogoCopied = false; // чтобы логотип не дублировался каждый раз

  // Функция закрытия меню
  const hideMenu = () => {
    overlay.classList.remove('open');
    menuMobile.classList.remove('open');
    document.body.style.overflow = ''; // возвращаем прокрутку
  };

  // Открытие меню по клику на "бургер"
  btnBurger.addEventListener('click', () => {
    overlay.classList.add('open');
    menuMobile.classList.add('open');
    document.body.style.overflow = 'hidden'; // блокируем прокрутку фона

    // Один раз копируем логотип внутрь меню
    if (!isLogoCopied && logoHeader) {
      const logoCopy = logoHeader.cloneNode(true);
      logoCopy.classList.add('mobile-logo');
      menuMobile.prepend(logoCopy);
      isLogoCopied = true;
    }
  });

  // Закрытие по кнопке "крестик"
  btnClose.addEventListener('click', hideMenu);

  // Закрытие при клике на подложку (не на само меню)
  overlay.addEventListener('click', event => {
    if (event.target === overlay) hideMenu();
  });

  // Закрытие при переходе по любой ссылке внутри меню
  const menuLinks = menuMobile.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
  });
});