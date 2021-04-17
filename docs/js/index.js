"use strict";

var displayMenu = document.getElementById("displayMenu");
displayMenu.addEventListener('click', handleMenu);

function handleMenu() {
  var menu = document.querySelector(".header__menu");

  if (!displayMenu.classList.contains('icon-close')) {
    displayMenu.classList.add("icon-close");
    displayMenu.setAttribute("src", "./assets/icons/icon-close.svg");
  } else {
    displayMenu.classList.remove("icon-close");
    displayMenu.setAttribute("src", "./assets/icons/icon-hamburger.svg");
  }

  ;
  menu.classList.toggle("header__menu--display");
  document.querySelector('.header__title').classList.toggle("header__title--menu");
}