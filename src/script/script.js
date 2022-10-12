("use strict");

console.log("hello");

// мобильное меню
document.addEventListener("DOMContentLoaded", function () {
    let open = document.querySelector(".menu__icon");
    let menuBody = document.querySelector(".menu__mobile");
    let close = document.querySelector(".menu__close");
    let navLinks = document.querySelectorAll(".nav__link");
    let navLogo = document.querySelector(".header__logo");
    let navLangs = document.querySelectorAll(".lang__item");
  
  open.addEventListener('click', function (event) {
    event.preventDefault();
    menuBody.classList.add('open');
  });

  close.addEventListener('click', function (event) {
    event.preventDefault();
    menuBody.classList.remove('open');
  })
});



// // мобильное меню
// document.addEventListener("DOMContentLoaded", function () {
//   let menu = document.querySelector(".header__mobile");
//   let close = document.querySelector(".menu__close");
//   let open = document.querySelector(".menu__open");
//   let navLinks = document.querySelectorAll(".nav__link");

//   open.addEventListener("click", function (event) {
//     event.preventDefault();
//     menu.classList.add("header__mobile-show");
//     close.classList.add("menu__close-open");
//     open.classList.add("menu__open-close");
//     document.body.classList.add("__lock");
//   });

//   close.addEventListener("click", function (event) {
//     event.preventDefault();
//     menu.classList.remove("header__mobile-show");
//     close.classList.remove("menu__close-open");
//     open.classList.remove("menu__open-close");
//     document.body.classList.remove("__lock");
//   });

//   navLinks.forEach((navLink) => {
//     navLink.addEventListener("click", function (event) {
//       menu.classList.remove("header__mobile-show");
//       close.classList.remove("menu__close-open");
//       open.classList.remove("menu__open-close");
//       document.body.classList.remove("__lock");
//     });
//   });
// });
