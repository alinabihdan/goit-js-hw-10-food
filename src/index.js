import './sass/main.scss';
import itemsTemplate from './templates/menu.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);

menuRef.insertAdjacentHTML('beforeend', markup);

// функционал изменения темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeBtnRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const currentTheme = localStorage.getItem('theme');

bodyRef.classList.add(Theme.LIGHT);

themeBtnRef.addEventListener('change', onThemeChange);

function onThemeChange() {
  if (themeBtnRef.checked) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function stayDarkAfterReload() {
  if (currentTheme === Theme.DARK) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    themeBtnRef.setAttribute('checked', true);
  }
}

stayDarkAfterReload();
