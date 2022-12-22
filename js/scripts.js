const menuBtn = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu');
const menu = document.querySelector('#mobile-navbar');
const desktopLinks = document.querySelectorAll('#navbar a');
const mobileLinks = document.querySelectorAll('#mobile-navbar a');
const allLinks = [...desktopLinks, ...mobileLinks];
const slides = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });

  setTimeout(() => {
    if (menu.classList.contains('menu-active')) {
      menu.classList.remove('menu-active');
    }
  }, 500);
}
