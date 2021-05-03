import './styles.css';

const displayMenu = document.getElementById('displayMenu');
const classListDisplayMenu = displayMenu.classList;
const pathAssets = './assets/icons/'; 

displayMenu.addEventListener('click', handleMenu);

function handleMenu() {
  if ( !classListDisplayMenu.contains('icon-close') ) {
    classListDisplayMenu.add('icon-close');
    displayMenu.setAttribute('src', `${pathAssets}/icon-close.svg`);
  }else {
    classListDisplayMenu.remove('icon-close');
    displayMenu.setAttribute("src", `${pathAssets}/icon-hamburger.svg`);
  }

  document.querySelector('.header__menu').classList.toggle("header__menu--display");
  document.querySelector('.header__title').classList.toggle("header__title--menu");
}