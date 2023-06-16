const MENU_CLOSED_CLASS_NAME = "page-nav--closed";
const TOGGLE_OPENED_CLASS_NAME = "page-header__toggle--opened";

const headerToggler = document.querySelector(".page-header__toggle");
const pageNav = document.querySelector(".page-nav");

pageNav.classList.remove("page-nav--nojs");
headerToggler.classList.remove("page-header__toggle--nojs");
headerToggler.classList.remove(TOGGLE_OPENED_CLASS_NAME);

let isOpened = false;

headerToggler.addEventListener("click", function () {
  isOpened = !isOpened;
  pageNav.classList.toggle(MENU_CLOSED_CLASS_NAME, !isOpened);
  headerToggler.classList.toggle(TOGGLE_OPENED_CLASS_NAME, isOpened);
});
