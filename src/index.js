import './styles.css';
import menuItems from './menu.json';
import menuTpl from './templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuMarkup = createMenuMarkup(menuItems);
const menuListRef = document.querySelector('.js-menu');
const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

menuListRef.insertAdjacentHTML('beforeend', menuMarkup);

bodyRef.classList.add(localStorage.getItem('bodyTheme'));

if (localStorage.getItem('bodyTheme') === 'dark-theme') {
    switchRef.checked = true;
}

switchRef.addEventListener('change', onSwitchBtnChange);

function createMenuMarkup(menuItems) {
    return menuItems.map(menuTpl).join('');
}

function onSwitchBtnChange() {
    if (switchRef.checked === true) {
        classReplaceFunc(Theme.DARK);
    } else {
        classReplaceFunc(Theme.LIGHT);
    }
}

function classReplaceFunc(theme) {
    bodyRef.classList.value = '';
    bodyRef.classList.add(theme);
    localStorage.setItem('bodyTheme', theme);
}