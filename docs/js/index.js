"use strict";

displayMenu.addEventListener('click', handleMenu);

function handleMenu() {
  var displayMenu = document.getElementById("displayMenu");
  var menu = document.querySelector(".navbar__menu");

  if (!displayMenu.classList.contains('icon-close')) {
    displayMenu.classList.add("icon-close");
    displayMenu.setAttribute("src", "./assets/icons/icon-close.svg");
  } else {
    displayMenu.classList.remove("icon-close");
    displayMenu.setAttribute("src", "./assets/icons/icon-hamburger.svg");
  }

  ;
  menu.classList.toggle("navbar__menu--display");
}