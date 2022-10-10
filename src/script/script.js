("use strict");

console.log("hello");

// мобильное меню
let iconMenu = document.querySelector(".menu__icon");
let menuBody = document.querySelector(".mobile__menu");
let navLinks = document.querySelectorAll(".nav__link");
let navLogo = document.querySelector(".header__logo");
let navLangs = document.querySelectorAll(".lang__item");

if (iconMenu) {
  iconMenu.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("mobile__menu_mob");
    iconMenu.classList.toggle("menu__icon_mob");
    navLogo.classList.toggle("header__logo_mob");
    navLangs.forEach(navLang => navLang.classList.toggle("lang__item_mob"));
  });
}

if (navLinks) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (e) {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("mobile__menu_mob");
    iconMenu.classList.remove("menu__icon_mob");
    navLogo.classList.remove("header__logo_mob");
    navLangs.forEach(navLang => navLang.classList.remove("lang__item_mob"));
    });
  });
}
