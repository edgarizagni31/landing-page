(()=>{"use strict";var e=document.getElementById("displayMenu"),t=e.classList,c="./assets/icons/";e.addEventListener("click",(function(){t.contains("icon-close")?(t.remove("icon-close"),e.setAttribute("src","".concat(c,"/icon-hamburger.svg"))):(t.add("icon-close"),e.setAttribute("src","".concat(c,"/icon-close.svg")));document.querySelector(".header__menu").classList.toggle("header__menu--display"),document.querySelector(".header__title").classList.toggle("header__title--menu")}))})();