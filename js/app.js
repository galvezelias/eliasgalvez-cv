const menu = document.querySelector(".menu");
const openmenu = document.querySelector(".open-menu");
const closemenu = document.querySelector(".close-menu");

function togglemenu() {
  menu.classList.toggle("menu-opened");
}
openmenu.addEventListener("click", togglemenu);
closemenu.addEventListener("click", togglemenu);
