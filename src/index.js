import './sass/main.scss';

import iconOpen from './assets/icons/icon-hamburger.svg';
import iconClose from './assets/icons/icon-close.svg';

const displayMenu = document.getElementById('displayMenu');

document.addEventListener('DOMContentLoaded', () => init() );

function init() {
  const menuItems = document.querySelectorAll('.header__menu-items');

  displayMenu.addEventListener('click', handleMenu); 
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', handleMenuItem);
  });
}

function handleMenu() {
  const classListDisplayMenu = displayMenu.classList;
  const pathAssets = './assets/icons/'; 

  if ( !classListDisplayMenu.contains('icon-close') ) {
    classListDisplayMenu.add('icon-close');
    displayMenu.setAttribute('src', iconClose);
  }else {
    classListDisplayMenu.remove('icon-close');
    displayMenu.setAttribute("src", iconOpen);
  }
  document.querySelector('.header__menu').classList.toggle("header__menu--display");
  document.querySelector('.header__title').classList.toggle("header__title--menu");
}

function handleMenuItem() {
  handleMenu();
}